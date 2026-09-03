// Single source of truth for the /faq page's questions — rendered by
// Faqs.astro and fed to the FAQPage JSON-LD in faq.astro, so the structured
// data can never drift from what's actually on the page.
export const faqData = [
  {
    question: 'Can I receive payments in my preferred currency?',
    answer: "Yes. You can set your desired currency in UnumPay's configuration settings.",
  },
  {
    question: 'Can I accept payments directly through UnumPay?',
    answer: 'Yes. You need a valid merchant account. Add credentials inside the UnumPay app to start.',
  },
  {
    question: "I'm getting an Invalid Request error at checkout.",
    answer: 'This usually means merchant account credentials are incorrect. Recheck details in the UnumPay app.',
  },
  {
    question: 'Which payment providers are supported?',
    answer: 'PayTabs, Checkout.com, Stripe, Paymob, and 40+ more PSPs globally.',
    link: { text: 'View all supported providers →', href: '/coverage/' },
  },
  {
    question: 'Can I reconcile payments from multiple gateways?',
    answer: 'Yes. UnumPay provides reconciliation reports for up to 7 days. Enable in advanced settings.',
  },
  {
    question: 'How do I view rejected transaction details?',
    answer: "In the Transaction Module inside UnumPay, or in your payment provider's merchant dashboard.",
  },
  {
    question: 'Does UnumPay provide real-time reporting?',
    answer: 'Yes. Unified view of total transactions, success rates, payment trends, active providers.',
  },
  {
    question: 'How do I integrate multiple payment gateways?',
    answer: 'Install UnumPay on Shopify, select gateways, add API keys, click Save. No coding required.',
  },
  {
    question: "I made a payment but haven't received it.",
    answer: 'UnumPay is an integration hub, not a payment processor. Contact your payment provider directly.',
  },
]
