// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Per-URL changefreq/priority, mirroring the live unumpay.com sitemap so the
// rebuild keeps the same crawl signals rather than emitting flat defaults.
const PAGE_PRIORITY = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/coverage/': { priority: 0.9, changefreq: 'weekly' },
  '/pricing/': { priority: 0.8, changefreq: 'monthly' },
  '/faq/': { priority: 0.8, changefreq: 'monthly' },
  '/our-story/': { priority: 0.7, changefreq: 'monthly' },
  '/contact/': { priority: 0.7, changefreq: 'monthly' },
  '/blog/': { priority: 0.7, changefreq: 'weekly' },
  '/become-a-partner/': { priority: 0.6, changefreq: 'monthly' },
  '/reconciliation-setup/': { priority: 0.5, changefreq: 'monthly' },
  '/privacy-policy/': { priority: 0.3, changefreq: 'yearly' },
  '/terms-of-use/': { priority: 0.3, changefreq: 'yearly' },
};

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs, absolute og:image URLs and the sitemap.
  site: 'https://www.unumpay.com',

  // Prefetch internal links on hover, so the page is already in cache by the
  // time the click lands.
  //
  // Deliberately 'hover' and not 'viewport': with 'viewport' the coverage page
  // fires ~46 gateway-guide prefetches the moment they scroll into view. That's
  // harmless against static production files, but the dev server re-renders
  // every one of those requests, which stalls it badly enough that pages start
  // coming through half-rendered.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'framer-motion',
        'lucide-react',
      ],
    },
  },

  devToolbar: {
    enabled: false,
  },

  markdown: {
    rehypePlugins: [rehypeSlug],
  },

  integrations: [
    react(),
    sitemap({
      // 404 must never be advertised to crawlers.
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const known = PAGE_PRIORITY[path];

        if (known) {
          item.priority = known.priority;
          item.changefreq = known.changefreq;
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/payment-gateways/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path.includes('-integration-guide')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ]
});