// @ts-check
import fs from 'fs';
import path from 'path';

/**
 * 빌드 후 sitemap-index.xml 파일에 블로그 사이트맵 추가
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

  let content = fs.readFileSync(sitemapIndexPath, 'utf-8');

  // 이미 블로그 사이트맵이 포함되어 있는지 확인
  if (content.includes('https://www.hwonda.com/blog/sitemap.xml')) {
    console.log('블로그 사이트맵이 이미 포함되어 있습니다.');
    return;
  }

  // </sitemapindex> 태그 앞에 블로그 사이트맵 추가
  content = content.replace(
    '</sitemapindex>',
    '<sitemap><loc>https://www.hwonda.com/blog/sitemap.xml</loc></sitemap></sitemapindex>',
  );

  fs.writeFileSync(sitemapIndexPath, content, 'utf-8');
  console.log('sitemap-index.xml에 블로그 사이트맵이 추가되었습니다.');
}

updateSitemapIndex();
