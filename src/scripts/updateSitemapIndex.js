// @ts-check
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.hwonda.com';

/**
 * microfrontends.json에서 블로그 등 하위 앱의 sitemap URL을 읽어
 * 빌드 후 sitemap-index.xml에 추가
 */
function updateSitemapIndex() {
  const sitemapIndexPath = path.resolve(
    process.cwd(),
    'dist/sitemap-index.xml',
  );

  if (!fs.existsSync(sitemapIndexPath)) {
    console.error('sitemap-index.xml 파일을 찾을 수 없습니다.');
    return;
  }

  const mfConfigPath = path.resolve(process.cwd(), 'microfrontends.json');
  if (!fs.existsSync(mfConfigPath)) {
    console.error('microfrontends.json 파일을 찾을 수 없습니다.');
    return;
  }

  const mfConfig = JSON.parse(fs.readFileSync(mfConfigPath, 'utf-8'));
  let content = fs.readFileSync(sitemapIndexPath, 'utf-8');

  for (const [appName, appConfig] of Object.entries(mfConfig.applications)) {
    if (!appConfig.routing) continue;

    // 라우팅 경로 중 첫 번째 기본 경로를 사용하여 sitemap URL 생성
    const basePath = appConfig.routing[0]?.paths?.[0];
    if (!basePath) continue;

    const sitemapUrl = `${SITE_URL}${basePath}/sitemap.xml`;

    if (content.includes(sitemapUrl)) {
      console.log(`${appName} 사이트맵이 이미 포함되어 있습니다.`);
      continue;
    }

    content = content.replace(
      '</sitemapindex>',
      `<sitemap><loc>${sitemapUrl}</loc></sitemap></sitemapindex>`,
    );
    console.log(
      `sitemap-index.xml에 ${appName} 사이트맵(${sitemapUrl})이 추가되었습니다.`,
    );
  }

  fs.writeFileSync(sitemapIndexPath, content, 'utf-8');
}

updateSitemapIndex();
