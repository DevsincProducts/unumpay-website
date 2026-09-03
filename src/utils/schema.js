// Shared schema.org building blocks.
//
// The Organization and WebSite nodes carry stable @id values so every page can
// reference them (e.g. `publisher: { '@id': ORG_ID }`) instead of repeating the
// full object — that's what keeps the entity consistent across the whole site
// in Google's eyes rather than looking like many separate organizations.

const SITE = 'https://www.unumpay.com';

export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'UnumPay',
  url: `${SITE}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE}/#logo`,
    url: `${SITE}/og-image.jpg`,
    caption: 'UnumPay',
  },
  image: { '@id': `${SITE}/#logo` },
  description:
    'UnumPay is a Shopify payment gateway mediation platform connecting merchants to 40+ payment providers across 45+ countries.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Devsinc',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'unumpay@devsinc.com',
    telephone: '+92-300-0342357',
    contactType: 'customer support',
    url: `${SITE}/contact/`,
    availableLanguage: ['en'],
  },
  sameAs: [
    'https://www.instagram.com/unumpay/',
    'https://www.linkedin.com/showcase/unumpay',
    'https://www.facebook.com/unumpay',
    'https://apps.shopify.com/unum-pay',
  ],
  knowsAbout: [
    'Shopify payment gateways',
    'Payment gateway integration',
    'Online payment processing',
    'Multi-currency payments',
    'Payment reconciliation',
    'E-commerce payments',
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: 'UnumPay',
  description:
    'Connect your Shopify store to 40+ payment gateways worldwide.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export const softwareApplicationSchema = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE}/#softwareapplication`,
  name: 'UnumPay',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Shopify Payment App',
  operatingSystem: 'Web',
  installUrl: 'https://apps.shopify.com/unum-pay',
  publisher: { '@id': ORG_ID },
  description:
    'Connect your Shopify store to 40+ local and global payment gateways through a single integration.',
  featureList: [
    '40+ payment gateway integrations',
    'Multi-gateway failover',
    'Unified transaction dashboard',
    'Multi-currency payment acceptance',
    'Automated reconciliation reports',
    'Refund tracking',
    'Real-time success-rate monitoring',
    'No-code setup',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: 'Free to install. 0.85% per successful transaction.',
  },
};

/**
 * Build a BreadcrumbList from [name, path] pairs.
 * Pass an `id` when embedding it in a @graph so other nodes can reference it;
 * nodes inside a @graph must not carry their own @context.
 */
export function breadcrumb(items, id) {
  return {
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': `${SITE}${id}` } : {}),
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE}${path}`,
    })),
  };
}

/** Build an FAQPage from the same {question, answer} arrays the UI renders. */
export function faqPage(faqs, id) {
  return {
    '@type': 'FAQPage',
    ...(id ? { '@id': `${SITE}${id}` } : {}),
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Wrap nodes in a single @graph — one script tag, cross-referenced by @id. */
export function graph(nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export { SITE };
