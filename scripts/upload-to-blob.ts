import { put } from '@vercel/blob';
import { config } from 'dotenv';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs';
import { join, relative } from 'path';

// .env 파일의 환경변수를 process.env로 로드
// 로컬 실행 시 BLOB_READ_WRITE_TOKEN을 읽기 위해 필요
config();

const PUBLIC_DIR = join(process.cwd(), 'public', 'projects');
const OUTPUT_DIR = join(process.cwd(), 'scripts', 'blob-mappings');

const IMAGE_EXTENSIONS = [
  '.webp',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.avif',
];

// 디렉토리를 재귀 순회하며 이미지 파일 경로를 수집
function getImageFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (
      IMAGE_EXTENSIONS.some((ext) => entry.toLowerCase().endsWith(ext))
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

async function uploadFiles(projectName?: string) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error('BLOB_READ_WRITE_TOKEN is not set in .env');
    process.exit(1);
  }

  // 인자가 있으면 특정 프로젝트만, 없으면 전체 업로드
  const targetDir = projectName ? join(PUBLIC_DIR, projectName) : PUBLIC_DIR;
  if (!existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const files = getImageFiles(targetDir);
  console.log(
    `Found ${files.length} images in ${projectName || 'all projects'}\n`,
  );

  // 기존 경로 -> blob URL 매핑을 저장할 객체
  const mapping: Record<string, string> = {};

  // 한 번에 5개씩 병렬 업로드 (Rate Limit 방지)
  // 모두 동시에 보내면 API 제한에 걸릴 수 있어 배치 단위로 나눠서 처리
  const concurrency = 5;

  for (let i = 0; i < files.length; i += concurrency) {
    const batch = files.slice(i, i + concurrency);
    const results = await Promise.all(
      batch.map(async (filePath) => {
        // 로컬 절대경로를 blob 저장소의 경로명으로 변환
        // 예: /Users/.../public/projects/diki/0.webp -> projects/diki/0.webp
        const relativePath = `projects/${relative(PUBLIC_DIR, filePath)}`;
        const fileBuffer = readFileSync(filePath);

        const blob = await put(relativePath, fileBuffer, {
          access: 'public', // 누구나 URL로 접근 가능 (이미지이므로 public)
          token,
          addRandomSuffix: false, // URL에 랜덤 문자열을 붙이지 않음 (경로를 예측 가능하게 유지)
        });

        const oldUrl = `/${relativePath}`;
        console.log(
          `[${i + batch.indexOf(filePath) + 1}/${files.length}] ${oldUrl} -> ${blob.url}`,
        );
        return { oldUrl, newUrl: blob.url };
      }),
    );

    for (const { oldUrl, newUrl } of results) {
      mapping[oldUrl] = newUrl;
    }
  }

  // 매핑 결과를 JSON 파일로 저장
  // 이후 소스코드에서 이미지 경로를 일괄 교체할 때 활용
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const outputFile = join(OUTPUT_DIR, `${projectName || 'all'}.json`);
  writeFileSync(outputFile, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping saved to ${outputFile}`);
  console.log(`Total uploaded: ${Object.keys(mapping).length} files`);
}

// CLI 인자로 프로젝트명을 받음
// 예: npx tsx scripts/upload-to-blob.ts diki
const projectName = process.argv[2];
uploadFiles(projectName);
