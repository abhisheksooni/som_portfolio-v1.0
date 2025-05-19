// sitemap-generator
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.asarastudio.in' });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/services', changefreq: 'monthly' });
  sitemap.write({ url: '/project', changefreq: 'monthly' });
  sitemap.write({ url: '/about', changefreq: 'monthly' });
  sitemap.end();

  await streamToPromise(sitemap);
})();