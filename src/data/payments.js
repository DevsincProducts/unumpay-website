import flouciLogo from '../assets/paymentlogo/flouci.webp'
import abhipayLogo from '../assets/paymentlogo/abhipay.webp'
import assanPayLogo from '../assets/paymentlogo/assan-pay.webp'
import abhipay from '../assets/paymentlogo/abhipay.webp'
import alliedbank from '../assets/paymentlogo/alliedbank.webp'
import assan from '../assets/paymentlogo/assan.webp'
import authorizenet from '../assets/paymentlogo/authorizenet.webp'
import bankislami from '../assets/paymentlogo/bankislami.webp'
import bankofpunjab from '../assets/paymentlogo/bankofpunjab.webp'
import blinq from '../assets/paymentlogo/blinq.webp'
import bop from '../assets/paymentlogo/bop.webp'
import ccavenue from '../assets/paymentlogo/ccavenue.webp'
import ccbill from '../assets/paymentlogo/ccbill.webp'
import checkout from '../assets/paymentlogo/checkout.webp'
import citybank from '../assets/paymentlogo/citybank.webp'
import dialogpay from '../assets/paymentlogo/dialogpay.webp'
import directpay from '../assets/paymentlogo/directpay.webp'
import easypaisa from '../assets/paymentlogo/easypaisa.webp'
import hblhosted from '../assets/paymentlogo/hbl-hosted.webp'
import fab from '../assets/paymentlogo/fab.webp'
import keenu from '../assets/paymentlogo/keenu.webp'
import moyasar from '../assets/paymentlogo/moyasar.webp'
import meezan from '../assets/paymentlogo/meezan.webp'
import hblsecure from '../assets/paymentlogo/hblsecure.webp'
import flouci from '../assets/paymentlogo/flouci.webp'
import hbl from '../assets/paymentlogo/hbl.webp'
import jazzcash from '../assets/paymentlogo/jazzcash.webp'
import payfast from '../assets/paymentlogo/payfast.webp'
import paylogo from '../assets/paymentlogo/paylogo.webp'
import paylogo1 from '../assets/paymentlogo/paylogo1.webp'
import paylogo2 from '../assets/paymentlogo/paylogo2.webp'
import paylogo3 from '../assets/paymentlogo/paylogo3.webp'
import paymob from '../assets/paymentlogo/paymob.webp'
import paypro from '../assets/paymentlogo/paypro.webp'
import rapyd from '../assets/paymentlogo/rapyd.webp'
import stripe from '../assets/paymentlogo/stripe.webp'
import swich from '../assets/paymentlogo/swich.webp'
import tap from '../assets/paymentlogo/tap.webp'
import tbc from '../assets/paymentlogo/tbc.webp'
import walee from '../assets/paymentlogo/walee.webp'
import flutter from '../assets/paymentlogo/flutterwave.webp'
import mcb from '../assets/paymentlogo/mcb.webp'
import naeem from '../assets/paymentlogo/neem.webp'

// Reusable default breadcrumb path (same for all gateways via UnumPay app)
const defaultBreadcrumb = [
  'Shopify Portal Settings',
  'Payments',
  'Supported Payment Methods',
  'Add Payment Method',
  'Search by Provider',
]

export const gatewayGuides = [

{
  slug: 'flouci-integration-guide',
  name: 'Flouci Hosted Checkout',
  regions: ['Tunisia'],
  logo: flouci,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Flouci Authorization Token (provided by Flouci)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay App',
      description:
        'Open the Shopify App Store and install the UnumPay app. Select the Shopify store where you want to activate {name} as a payment method.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Open the App in Shopify Admin',
      description:
        'After installation navigate to the UnumPay app directly or find it manually through Shopify Admin settings.',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name}',
      description:
        'In the UnumPay app left menu select Payment Service Providers. Find {name} in the list and fill in the configuration fields.',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Authorization Token', instruction: 'Paste the token provided by Flouci' },
          { field: 'Client Description', instruction: 'Short description or tagline about the goods you sell' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
        footnote: 'Once all fields are filled click the Save button.',
      },
    },
    {
      title: 'Activate UnumPay',
      description: 'After saving you will be redirected to the activation screen. Review the settings and activate.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit – Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Flouci Authorization Token?',
      answer:
        'Contact Flouci directly through their official website to obtain your merchant Authorization Token before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Once activated, Flouci will appear at your Shopify checkout as "Debit – Credit Card" alongside your other enabled payment methods.',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'Yes. Enter your demo credentials and enable Test Mode to verify the integration works correctly before switching to live credentials.',
    },
  ],
  bottomCta: {
    layout: 'box',
    heading: 'Need help setting up Flouci?',
    subtitle: 'Our support team is available to guide you through every step of the integration.',
    buttons: [
      { label: 'Contact Support', href: '/contact', variant: 'primary' },
    ],
  },
},

  {
    slug: 'abhi-pay-integration-guide',
    name: 'Abhi Pay',
    regions: ['Pakistan'],
    logo: abhipayLogo,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Abhi Pay credentials (provided by Abhi Pay)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter little Description / Tagline / Selling Good Information' },
            { field: 'Merchant ID', instruction: 'Merchant ID provided by Abhipay' },
            { field: 'Merchant Secret', instruction: 'Merchant Secret provided by Abhipay' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description: 'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Abhi Pay credentials?',
        answer: 'Contact Abhi Pay directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer: 'Abhi Pay under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer: 'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Abhi Pay Payments?',
      subtitle: 'Install the UnumPay app and start accepting Abhi Pay payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
},
  },

  {
    slug: 'aik-by-bankislami-integration-guide',
    name: 'Aik by BankIslami',
    regions: ['Pakistan'],
    logo: bankislami,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Aik by BankIslami credentials (provided by Aik by BankIslami)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Customer ID', instruction: 'Customer ID provided by Aik by BankIslami' },
            { field: 'API Key', instruction: 'API Key provided by Aik by BankIslami' },
            { field: 'Secret Key', instruction: 'Secret Key provided by Aik by BankIslami' },
            { field: 'X API Key', instruction: 'X API Key provided by Aik by BankIslami' },
            {field: 'Merchant ID', instruction: 'Merchant ID provided by Aik by BankIslami' },
            {field: 'Active', isToggle: true , instruction: 'Toggle to enable' },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description: 'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Raast QR / Digital Payments',
    commonQuestions: [
      {
        question: 'Where do I get my Aik by BankIslami credentials?',
        answer: 'Contact Aik by BankIslami directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer: 'Aik by BankIslami under UnumPay appears at your Shopify checkout as "Raast QR / Digital Payments".',
      },
      {
        question: 'Can I test before going live?',
        answer: 'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Aik by BankIslami Payments?',
    subtitle: 'Install the UnumPay app and start accepting Aik by BankIslami payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
},
  },

  {
    slug: 'allied-bank-integration-guide',
    name: 'Allied Bank Integration Guide',
    regions: ['Pakistan'],
    logo: alliedbank,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Allied Bank credentials (provided by Allied Bank)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Phone', instruction: 'Default Value is 111111111' },
            { field: 'Email', instruction: 'Default Value is null@cybersource.com' },
            { field: 'Profile ID', instruction: 'Profile ID provided by ABL' },
            {field: 'Access Key', instruction: 'Access Key provided by ABL' },
            {field: 'Secret Key', instruction: 'Secret Key provided by ABL'},
            {field: 'Merchant Define Data3', instruction: 'Default Value is Clothes or Shoes'},
            {field: 'Active', isToggle: true , instruction: 'Toggle to enable' },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description: 'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Need to ask ABL to update/add Response URL: https://unumpay.alche.cloud/payment_app/abl_response/',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated Allied Bank under UnumPay will appear at checkout as "Debit - Credit Card".',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Raast QR / Digital Payments',
    commonQuestions: [
      {
        question: 'Where do I get my Allied Bank credentials?',
        answer: 'Contact Allied Bank directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer: 'Allied Bank under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer: 'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Allied Bank Payments?',
    subtitle: 'Install the UnumPay app and start accepting Allied Bank payments on your Shopify store in minutes. the UnumPay app and start accepting Aik by BankIslami payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
},
  },

  {
  slug: 'assan-pay-integration-guide',
  name: 'Assan Pay',
  regions: ['Turkey'],
  logo: assanPayLogo,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Assan Pay credentials (provided by Assan Pay)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Merchant ID',
            instruction: 'Will be provided by Assan Pay',
          },
          {
            field: 'X API Key',
            instruction: 'Will be provided by Assan Pay',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Response URL: https://unumpay.alche.cloud/payment_app/assanpay_response/',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated Assan Pay under UnumPay will appear at checkout as "Debit - Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Assan Pay credentials?',
      answer:
        'Contact Assan Pay directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Assan Pay under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Assan Pay Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Assan Pay payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'authorize-net-integration-guide',
  name: 'Authorize.net',
  regions: ['USA'],
  logo: authorizenet,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Authorize.net credentials (provided by Authorize.net)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'API Login ID',
            instruction: 'Will be provided by Authorize.net',
          },
          {
            field: 'Transaction Key',
            instruction: 'Will be provided by Authorize.net',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Need to ask Authorize.net to update/add Response/Return/Callback URL: https://unumpay.alche.cloud/payment_app/authorize_webhook/',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated Authorize.net under UnumPay will appear at checkout as "Debit - Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Authorize.net credentials?',
      answer:
        'Contact Authorize.net directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Authorize.net under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Authorize.net Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Authorize.net payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'bank-alfalah-mpgs-integration-guide',
  name: 'Bank Alfalah MPGS',
  regions: ['Pakistan'],
  logo: paylogo, 
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Bank Alfalah MPGS credentials (provided by Bank Alfalah MPGS)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note:
          'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Merchant ID',
            instruction: 'Merchant ID provided by Bank Alfalah MPGS',
          },
          {
            field: 'API Username',
            instruction: 'API Username provided by Bank Alfalah MPGS',
          },
          {
            field: 'API Password',
            instruction: 'API Password provided by Bank Alfalah MPGS',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated Bank Alfalah MPGS under UnumPay will appear at checkout as "Debit - Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Bank Alfalah MPGS credentials?',
      answer:
        'Contact Bank Alfalah MPGS directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Bank Alfalah MPGS under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Bank Alfalah MPGS Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Bank Alfalah MPGS payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'blinq-integration-guide',
  name: 'Blinq',
  regions: ['Pakistan'],
  logo: blinq,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Blinq credentials (provided by Blinq)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note:
          'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Client ID',
            instruction: 'Will be provided by Blinq',
          },
          {
            field: 'Secret Key',
            instruction: 'Will be provided by Blinq',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Need to ask Blinq to update/add Response/Return/Callback URL: https://unumpay.alche.cloud/payment_app/blinq_response',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated Blinq under UnumPay will appear at checkout as "Debit Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Blinq credentials?',
      answer:
        'Contact Blinq directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Blinq under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Blinq Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Blinq payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'bank-of-punjab-integration-guide',
  name: 'Bank of Punjab',
  regions: ['Pakistan'],
  logo: bop,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Bank of Punjab credentials (provided by Bank of Punjab)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note:
          'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Merchant ID',
            instruction: 'Will be provided by Bank of Punjab',
          },
          {
            field: 'API Username',
            instruction: 'Will be provided by Bank of Punjab',
          },
          {
            field: 'API Password',
            instruction: 'Will be provided by Bank of Punjab',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated Bank of Punjab under UnumPay will appear at checkout as "Debit - Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Bank of Punjab credentials?',
      answer:
        'Contact Bank of Punjab directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Bank of Punjab under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Bank of Punjab Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Bank of Punjab payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'ccavenue-integration-guide',
  name: 'CCAvenue',
  regions: ['UAE'],
  logo: ccavenue,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'CCAvenue credentials (provided by CCAvenue)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note:
          'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Merchant ID',
            instruction: 'Will be provided by CCAvenue',
          },
          {
            field: 'Access Code',
            instruction: 'Will be provided by CCAvenue',
          },
          {
            field: 'ENC Key',
            instruction: 'Will be provided by CCAvenue',
          },
          {
            field: 'Phone Number',
            instruction: 'Will be provided by CCAvenue',
          },
          {
            field: 'Email Address',
            instruction: 'Will be provided by CCAvenue',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated CCAvenue under UnumPay will appear at checkout as "Debit - Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my CCAvenue credentials?',
      answer:
        'Contact CCAvenue directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'CCAvenue under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept CCAvenue Payments?',
    subtitle:
      'Install the UnumPay app and start accepting CCAvenue payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'ccbill-integration-guide',
  name: 'CCBill',
  regions: ['USA'],
  logo: ccbill,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'CCBill credentials (provided by CCBill)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note:
          'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description:
        'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          {
            field: 'Client Name',
            instruction: 'Enter your Store Name',
          },
          {
            field: 'Client Description',
            instruction:
              'Enter Little Description / Tagline / Selling Good Information',
          },
          {
            field: 'Account No',
            instruction: 'Will be provided by CCBill',
          },
          {
            field: 'Sub Account No',
            instruction: 'Will be provided by CCBill',
          },
          {
            field: 'Flexform ID',
            instruction: 'Will be provided by CCBill',
          },
          {
            field: 'Salt Key',
            instruction: 'Will be provided by CCBill',
          },
          {
            field: 'Active',
            instruction: 'Toggle to enable',
            isToggle: true,
          },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated CCBill under UnumPay will appear at checkout as "Debit Credit Card".',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my CCBill credentials?',
      answer:
        'Contact CCBill directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'CCBill under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept CCBill Payments?',
    subtitle:
      'Install the UnumPay app and start accepting CCBill payments on your Shopify store in minutes.',
    buttons: [
      {
        label: 'Install on Shopify',
        href: 'https://apps.shopify.com/unum-pay',
        variant: 'primary',
      },
      {
        label: 'Contact Support',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
  },

  {
  slug: 'checkout-com-integration-guide',
  name: 'Checkout.com',
  regions: ['Global', 'UAE', 'UK', 'USA'],
  logo: checkout,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Checkout.com credentials (provided by Checkout.com)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select the Shopify store where you want to install UnumPay. Once installed, you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description:
        'Open the application directly from your Shopify admin after installation.',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote:
          'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Go to Configurations and enter the following details:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Client Description', instruction: 'Enter a short description, tagline, or information about your store' },
          { field: 'API Key', instruction: 'API Key provided by Checkout.com' },
          { field: 'Process Channel ID', instruction: 'Process Channel ID provided by Checkout.com' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'After entering all required information, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description:
        'Click "Activate UnumPay" to enable the payment gateway on your Shopify storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Checkout.com credentials?',
      answer:
        'Contact Checkout.com directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Checkout.com under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Checkout.com Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Checkout.com payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
  slug: 'citybank-of-bangladesh-integration-guide',
  name: 'CityBank of Bangladesh',
  regions: ['Bangladesh'],
  logo: citybank,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'CityBank of Bangladesh credentials (provided by CityBank of Bangladesh)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
          { field: 'Merchant ID', instruction: 'Will be provided by CityBank of Bangladesh' },
          { field: 'Username', instruction: 'Will be provided by CityBank of Bangladesh' },
          { field: 'Password', instruction: 'Will be provided by CityBank of Bangladesh' },
          { field: 'Key File Name', instruction: 'Will be provided by CityBank of Bangladesh' },
          { field: 'Certificate File Name', instruction: 'Will be provided by CityBank of Bangladesh' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my CityBank of Bangladesh credentials?',
      answer:
        'Contact CityBank of Bangladesh directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'CityBank of Bangladesh under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept CityBank of Bangladesh Payments?',
    subtitle:
      'Install the UnumPay app and start accepting CityBank of Bangladesh payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
  slug: 'dialogpay-integration-guide',
  name: 'DialogPay',
  regions: ['Global'],
  logo: dialogpay,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'DialogPay credentials (provided by DialogPay)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Will be provided by Dialog Pay' },
          { field: 'User Name', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Password', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Database Name', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Merchant ID', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Payment Provided ID', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Payment Service ID', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Public Key', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Private Key', instruction: 'Will be provided by Dialog Pay' },
          { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my DialogPay credentials?',
      answer:
        'Contact DialogPay directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'DialogPay under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept DialogPay Payments?',
    subtitle:
      'Install the UnumPay app and start accepting DialogPay payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
  slug: 'direct-pay-integration-guide',
  name: 'Direct Pay',
  regions: ['Global'],
  logo: directpay,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'Direct Pay credentials (provided by Direct Pay)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
          { field: 'Client ID', instruction: 'Will be provided by Direct Pay' },
          { field: 'Client Secret', instruction: 'Will be provided by Direct Pay' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my Direct Pay credentials?',
      answer:
        'Contact Direct Pay directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'Direct Pay under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept Direct Pay Payments?',
    subtitle:
      'Install the UnumPay app and start accepting Direct Pay payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
  slug: 'easypaisa-integration-guide',
  name: 'EasyPaisa',
  regions: ['Pakistan'],
  logo: easypaisa,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'EasyPaisa credentials (provided by EasyPaisa)',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
          { field: 'Store ID', instruction: 'Store ID provided by EasyPaisa' },
          { field: 'Hash Key', instruction: 'Hash Key provided by EasyPaisa' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my EasyPaisa credentials?',
      answer:
        'Contact EasyPaisa directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'EasyPaisa under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept EasyPaisa Payments?',
    subtitle:
      'Install the UnumPay app and start accepting EasyPaisa payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
  slug: 'fab-first-abu-dhabi-bank-integration-guide',
  name: 'FAB (First Abu Dhabi Bank)',
  regions: ['UAE'],
  logo: fab,
  setupTime: '~5 min setup',
  difficulty: 'Easy',
  beforeYouBegin: [
    'A Shopify store with admin access',
    'FAB (First Abu Dhabi Bank) credentials (provided by FAB (First Abu Dhabi Bank))',
    'Your Store Name and a short description or tagline',
  ],
  steps: [
    {
      title: 'Install the UnumPay Shopify App',
      description:
        'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
      content: {
        type: 'link',
        value: 'https://apps.shopify.com/unum-pay',
      },
    },
    {
      title: 'Select Your Shopify Store',
      description:
        'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
      content: null,
    },
    {
      title: 'Open the UnumPay App',
      description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
      content: {
        type: 'adminPath',
        path: '/admin/apps/unified-transaction',
        note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
        breadcrumb: defaultBreadcrumb,
        footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
      },
    },
    {
      title: 'Configure {name} Credentials',
      description: 'Click on Configurations and enter details on the below fields:',
      content: {
        type: 'table',
        rows: [
          { field: 'Client Name', instruction: 'Enter your Store Name' },
          { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
          { field: 'Username', instruction: 'Username provided by UBL/FAB' },
          { field: 'Password', instruction: 'Password provided by UBL/FAB' },
          { field: 'Customer Data', instruction: 'Customer Data provided by UBL/FAB' },
          { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
        ],
      },
    },
    {
      title: 'Save Your Configuration',
      description:
        'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
      content: null,
    },
    {
      title: 'Activate UnumPay',
      description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
      content: {
        type: 'activation',
        cards: [
          {
            color: '#f59e0b',
            icon: '🧪',
            title: 'Demo Credentials',
            desc: 'If you have entered demo credentials you must enable Test Mode.',
          },
          {
            color: '#16a34a',
            icon: '✅',
            title: 'Live Credentials',
            desc: 'For live transactions ensure that Test Mode is unchecked.',
          },
          {
            color: '#6a03ce',
            icon: '💳',
            title: 'Checkout Display',
            desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
          },
        ],
      },
    },
  ],
  checkoutDisplayText: 'Debit - Credit Card',
  commonQuestions: [
    {
      question: 'Where do I get my FAB (First Abu Dhabi Bank) credentials?',
      answer:
        'Contact FAB (First Abu Dhabi Bank) directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
    },
    {
      question: 'What will my customers see at checkout?',
      answer:
        'FAB (First Abu Dhabi Bank) under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
    },
    {
      question: 'Can I test before going live?',
      answer:
        'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
    },
  ],
  bottomCta: {
    layout: 'full',
    heading: 'Ready to Accept FAB (First Abu Dhabi Bank) Payments?',
    subtitle:
      'Install the UnumPay app and start accepting FAB (First Abu Dhabi Bank) payments on your Shopify store in minutes.',
    buttons: [
      { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
      { label: 'Contact Support', href: '/contact', variant: 'secondary' },
    ],
  },
  },

  {
    slug: 'flutterwave-integration-guide',
    name: 'Flutterwave',
    regions: ['Nigeria', 'Ghana', 'Kenya', 'South Africa'],
    logo: flutter,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Flutterwave credentials (provided by Flutterwave)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Secret Key', instruction: 'Will be provided by Flutterwave' },
            { field: 'Public Key', instruction: 'Will be provided by Flutterwave' },
            { field: 'Encryption Key', instruction: 'Will be provided by Flutterwave' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Flutterwave credentials?',
        answer:
          'Contact Flutterwave directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Flutterwave under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Flutterwave Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Flutterwave payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'hbl-hosted-checkout-integration-guide',
    name: 'HBL Hosted Checkout',
    regions: ['Pakistan'],
    logo: hblhosted,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'HBL Hosted Checkout credentials (provided by HBL Hosted Checkout)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Will be provided by HBL in Channel Field' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Phone', instruction: 'Default Value is 111111111' },
            { field: 'Email', instruction: 'Default Value is null@cybersource.com' },
            { field: 'User ID', instruction: 'Will be provided by HBL in Client Name Field' },
            { field: 'Password', instruction: 'Will be provided by HBL' },
            { field: 'Hide for Specific Countries', instruction: 'Enter the comma separated country code' },
            { field: 'Public Key', instruction: 'Will be provided by HBL' },
            { field: 'Private Key', instruction: 'Will be provided by HBL' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my HBL Hosted Checkout credentials?',
        answer:
          'Contact HBL Hosted Checkout directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'HBL Hosted Checkout under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept HBL Hosted Checkout Payments?',
      subtitle:
        'Install the UnumPay app and start accepting HBL Hosted Checkout payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'hbl-unified-checkout-integration-guide',
    name: 'HBL Unified Checkout',
    regions: ['Pakistan'],
    logo: hbl,
    setupTime: '~10 min setup',
    difficulty: 'Intermediate',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'HBL merchant account with Merchant ID, Key ID, and Shared Secret (provided by HBL)',
      'Your store name and a short description or tagline',
      'Decision on which Payment Types to enable: CLICKTOPAY, GOOGLEPAY, APPLEPAY',
      'Decision on which Card Networks to enable: VISA, MASTERCARD, PAYPAK, AMEX, CUP',
    ],
    steps: [
      {
        title: 'Install the UnumPay App',
        description:
          'Open the Shopify App Store and install the UnumPay app. Select the Shopify store where you want to activate {name} as a payment method.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Open the App in Shopify Admin',
        description:
          'After installation, navigate to the UnumPay app directly from your Shopify Admin or find it manually through settings.',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods, search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name}',
        description:
          'In the UnumPay app left menu select Payment Service Providers. Locate "HBL Unified Checkout" in the list and fill in the configuration fields below.',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Shopify store name (provided by Merchant)' },
            { field: 'Merchant ID', instruction: 'Your unique merchant identifier (provided by Bank / HBL)' },
            { field: 'Key ID', instruction: 'API Key ID provided by HBL (provided by Bank / HBL)' },
            { field: 'Shared Secret', instruction: 'Secret key used to sign transactions, provided by HBL (provided by Bank / HBL)' },
            { field: 'Payment Type', instruction: 'Select one or more: CLICKTOPAY, GOOGLEPAY, APPLEPAY (provided by Merchant)' },
            { field: 'Card Network', instruction: 'Select one or more: VISA, MASTERCARD, PAYPAK, AMEX, CUP (provided by Merchant)' },
            { field: 'Message (Client Description)', instruction: 'Short description or tagline about your goods or services (provided by Merchant)' },
            { field: 'Payment Provider Status', instruction: 'Toggle ON to activate', isToggle: true },
          ],
          footnote: 'Once all fields are filled, click the Save button.',
        },
      },
      {
        title: 'Activate UnumPay',
        description:
          'After saving your configuration, you will be redirected to the activation screen. Review the settings and activate UnumPay to start accepting payments.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Test Mode',
              desc: 'Using sandbox credentials from HBL? Enable Test Mode on the activation screen.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For real transactions, use live credentials and ensure Test Mode is off.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: '{name} appears as "{checkoutDisplayText}" at your Shopify checkout.',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit – Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Merchant ID, Key ID, and Shared Secret?',
        answer:
          'These credentials are issued by HBL when you sign up for their payment gateway service. Contact HBL directly through their corporate banking or merchant services team to obtain your Merchant ID, Key ID, and Shared Secret before starting the setup.',
      },
      {
        question: 'Which payment methods does HBL Unified Checkout support?',
        answer:
          'HBL Unified Checkout supports Click to Pay, Google Pay, and Apple Pay as payment types. For card networks you can enable VISA, Mastercard, PayPak, AMEX, and CUP. You can activate multiple payment types and card networks simultaneously — choose the combination that best fits your customers.',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'Yes. Enter your sandbox / demo credentials provided by HBL and enable Test Mode on the activation screen. When you are ready to accept real payments, replace the credentials with your live keys and uncheck Test Mode.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'HBL Unified Checkout under UnumPay appears at your Shopify checkout as "Debit – Credit Card". The payment types and card networks you have enabled will be presented to the customer on the HBL-hosted payment page.',
      },
    ],
    bottomCta: {
      layout: 'box',
      heading: 'Need help setting up HBL Unified Checkout?',
      subtitle: 'Our support team is available to guide you through every step of the integration.',
      buttons: [
        { label: 'Contact Support', href: '/contact', variant: 'primary' },
      ],
    },
  },

  {
    slug: 'hbl-secure-acceptance-integration-guide',
    name: 'HBL Secure Acceptance',
    regions: ['Pakistan'],
    logo: hblsecure,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'HBL Secure Acceptance credentials (provided by HBL Secure Acceptance)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Phone', instruction: 'Default Value is 111111111' },
            { field: 'Email', instruction: 'Default Value is null@cybersource.com' },
            { field: 'Profile ID', instruction: 'Profile ID provided by HBL' },
            { field: 'Access Key', instruction: 'Access Key provided by HBL' },
            { field: 'Secret Key', instruction: 'Secret Key provided by HBL' },
            { field: 'Merchant Define Data3', instruction: 'Default Value is Clothes' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description:
          'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Need to ask HBL to update/add Response URL: https://unumpay.alche.cloud/payment_app/hbl_response/',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my HBL Secure Acceptance credentials?',
        answer:
          'Contact HBL Secure Acceptance directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'HBL Secure Acceptance under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept HBL Secure Acceptance Payments?',
      subtitle:
        'Install the UnumPay app and start accepting HBL Secure Acceptance payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'jazz-cash-integration-guide',
    name: 'Jazz Cash',
    regions: ['Pakistan'],
    logo: jazzcash,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Jazz Cash credentials (provided by Jazz Cash)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Merchant ID', instruction: 'Merchant ID provided by JazzCash' },
            { field: 'Merchant Password', instruction: 'Merchant Password provided by JazzCash' },
            { field: 'Integrity Salt', instruction: 'Integrity Salt provided by JazzCash' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description:
          'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Response URL need to update by JazzCash team: https://unumpay.alche.cloud/payment_app/jazzcash_response/',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Jazz Cash credentials?',
        answer:
          'Contact Jazz Cash directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Jazz Cash under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Jazz Cash Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Jazz Cash payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'keenu-integration-guide',
    name: 'Keenu',
    regions: ['Pakistan'],
    logo: keenu,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Keenu credentials (provided by Keenu)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Merchant ID', instruction: 'Will be provided by Keenu' },
            { field: 'Merchant Key', instruction: 'Will be provided by Keenu' },
            { field: 'URL Endpoint', instruction: 'Will be provided by Keenu' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Keenu credentials?',
        answer:
          'Contact Keenu directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Keenu under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Keenu Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Keenu payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'mcb-integration-guide',
    name: 'MCB (MPGS)',
    regions: ['Pakistan'],
    logo: mcb,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'MCB (MPGS) credentials (provided by MCB (MPGS))',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Merchant ID', instruction: 'Merchant ID provided by MCB (MPGS)' },
            { field: 'API Username', instruction: 'API Username provided by MCB (MPGS)' },
            { field: 'API Password', instruction: 'API Password provided by MCB (MPGS)' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my MCB (MPGS) credentials?',
        answer:
          'Contact MCB (MPGS) directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'MCB (MPGS) under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept MCB (MPGS) Payments?',
      subtitle:
        'Install the UnumPay app and start accepting MCB (MPGS) payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'meezan-integration-guide',
    name: 'Meezan Bank',
    regions: ['Pakistan'],
    logo: meezan,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Meezan Bank credentials (provided by Meezan Bank)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Username', instruction: 'Username provided by Meezan Bank' },
            { field: 'Password', instruction: 'Password provided by Meezan Bank' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Meezan Bank credentials?',
        answer:
          'Contact Meezan Bank directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Meezan Bank under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Meezan Bank Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Meezan Bank payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'paymob-integration-guide',
    name: 'Paymob',
    regions: ['Egypt', 'Jordan', 'Lebanon', 'Pakistan', 'UAE'],
    logo: paymob,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Paymob credentials (provided by Paymob)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'API Key', instruction: 'Will be provided by Paymob' },
            { field: 'HMAC', instruction: 'Will be provided by Paymob' },
            { field: 'Integration ID', instruction: 'Will be provided by Paymob' },
            { field: 'Recurring ID', instruction: 'Will be provided by Paymob' },
            { field: 'Iframe Link', instruction: 'Will be provided by Paymob' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description:
          'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Need to ask Paymob to update/add Response/Return/Callback URL: https://unumpay.alche.cloud/payment_app/paymob_response/',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Paymob credentials?',
        answer:
          'Contact Paymob directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Paymob under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Paymob Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Paymob payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'rapyd-integration-guide',
    name: 'Rapyd',
    regions: ['Global'],
    logo: rapyd,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Rapyd credentials (provided by Rapyd)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Secret Key', instruction: 'Will be provided by Rapyd' },
            { field: 'Access Key', instruction: 'Will be provided by Rapyd' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Rapyd credentials?',
        answer:
          'Contact Rapyd directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Rapyd under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Rapyd Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Rapyd payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'stripe-integration-guide',
    name: 'Stripe',
    regions: ['Global', 'USA', 'UK'],
    logo: stripe,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'A Stripe account with API keys (Publishable Key + Secret Key)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay App',
        description:
          'Open the Shopify App Store and install the UnumPay app. Select the Shopify store where you want to activate {name} as a payment method.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'If you manage multiple stores, select the Shopify store where you want to enable Stripe payments through UnumPay. You will be redirected to your store\'s admin panel.',
        content: null,
      },
      {
        title: 'Open the App in Shopify Admin',
        description:
          'After installation navigate to the UnumPay app directly or find it manually through Shopify Admin settings.',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name}',
        description:
          'In the UnumPay app left menu select Payment Service Providers. Find Stripe in the list and fill in the configuration fields.',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Your business or store name' },
            { field: 'Client Description', instruction: 'A short description of your business' },
            { field: 'Publishable Key', instruction: 'Your Stripe Publishable Key (starts with pk_)' },
            { field: 'Secret Key', instruction: 'Your Stripe Secret Key (starts with sk_)' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
          footnote: 'Once all fields are filled click the Save button.',
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'After filling in all the fields, click "Save" to store your Stripe credentials. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'Use test keys (pk_test_ / sk_test_) and enable Test Mode to verify your integration safely.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'Switch to live keys (pk_live_ / sk_live_) and uncheck Test Mode for real transactions.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: '{name} under UnumPay will appear at checkout as "{checkoutDisplayText}".',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Stripe API keys?',
        answer:
          'Log in to your Stripe Dashboard at dashboard.stripe.com, go to Developers → API keys. You will find your Publishable Key and Secret Key there. Use test keys (pk_test_ / sk_test_) while testing, and live keys (pk_live_ / sk_live_) for production.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Stripe under UnumPay appears at your Shopify checkout as "Debit - Credit Card". Customers can pay with Visa, Mastercard, and other major card networks.',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'Yes. Enter your Stripe test keys (pk_test_ / sk_test_) and enable Test Mode in the activation screen. Switch to your live keys and uncheck Test Mode when you are ready to accept real payments.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Stripe Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Stripe payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'swich-integration-guide',
    name: 'Swich',
    regions: ['Global'],
    logo: swich,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Swich credentials (provided by Swich)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Client ID', instruction: 'Client ID provided by Swich' },
            { field: 'Secret Key', instruction: 'Secret Key provided by Swich' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description:
          'Click on "Activate UnumPay" to enable the payment gateway on your storefront. Response URL need to update by Swich team: https://unumpay.alche.cloud/payment_app/swich_response',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Swich credentials?',
        answer:
          'Contact Swich directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Swich under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Swich Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Swich payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'tap-payments-integration-guide',
    name: 'Tap Payment',
    regions: ['UAE', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Qatar'],
    logo: tap,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Tap Payment credentials (provided by Tap Payment)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Secret Key', instruction: 'Will be provided by Tap Payment' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Tap Payment credentials?',
        answer:
          'Contact Tap Payment directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Tap Payment under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Tap Payment Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Tap Payment payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'tbc-bank-integration-guide',
    name: 'TBC Bank',
    regions: ['Georgia'],
    logo: tbc,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'TBC Bank credentials (provided by TBC Bank)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'App Key', instruction: 'Will be provided by TBC Bank' },
            { field: 'Client ID', instruction: 'Will be provided by TBC Bank' },
            { field: 'Client Secret', instruction: 'Will be provided by TBC Bank' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my TBC Bank credentials?',
        answer:
          'Contact TBC Bank directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'TBC Bank under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept TBC Bank Payments?',
      subtitle:
        'Install the UnumPay app and start accepting TBC Bank payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'walee-integration-guide',
    name: 'Walee',
    regions: ['Pakistan'],
    logo: walee,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Walee credentials (provided by Walee)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Client ID', instruction: 'Client ID provided by Walee' },
            { field: 'Client Secret', instruction: 'Client Secret provided by Walee' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Walee credentials?',
        answer:
          'Contact Walee directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Walee under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Walee Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Walee payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'neem-integration-guide',
    name: 'Neem',
    regions: ['Pakistan'],
    logo: naeem,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Neem credentials (provided by Neem)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Neem Partner ID', instruction: 'Neem Partner ID provided by Neem' },
            { field: 'Authorization Token', instruction: 'Authorization Token provided by Neem' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Neem credentials?',
        answer:
          'Contact Neem directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Neem under UnumPay appears at your Shopify checkout as "Debit Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Neem Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Neem payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'moyasar-integration-guide',
    name: 'Moyasar',
    regions: ['Saudi Arabia', 'Kuwait'],
    logo: moyasar,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Moyasar credentials (provided by Moyasar)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Secret Key', instruction: 'Will be provided by Moyasar' },
            { field: 'Publishable Key', instruction: 'Will be provided by Moyasar' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Moyasar credentials?',
        answer:
          'Contact Moyasar directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Moyasar under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Moyasar Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Moyasar payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

  {
    slug: 'paystack-integration-guide',
    name: 'Paystack',
    regions: ['Nigeria', 'Ghana', 'South Africa'],
    logo: paylogo2,
    setupTime: '~5 min setup',
    difficulty: 'Easy',
    beforeYouBegin: [
      'A Shopify store with admin access',
      'Paystack credentials (provided by Paystack)',
      'Your Store Name and a short description or tagline',
    ],
    steps: [
      {
        title: 'Install the UnumPay Shopify App',
        description:
          'Visit the Shopify App Store and search for "UnumPay — Unified Transaction" or use the direct link below. Click "Add App" to begin installation.',
        content: {
          type: 'link',
          value: 'https://apps.shopify.com/unum-pay',
        },
      },
      {
        title: 'Select Your Shopify Store',
        description:
          'Select your Shopify store on which you want to install it. Once installed you will be redirected back to the app screen.',
        content: null,
      },
      {
        title: 'Open the UnumPay App',
        description: 'Open the application directly in your Shopify Store after installation. You can access it at:',
        content: {
          type: 'adminPath',
          path: '/admin/apps/unified-transaction',
          note: 'Replace [shopify-admin-domain] with your actual store domain e.g. yourstore.myshopify.com',
          breadcrumb: defaultBreadcrumb,
          footnote: 'Under payment methods search for "UnumPay" using the "Search by provider" filter.',
        },
      },
      {
        title: 'Configure {name} Credentials',
        description: 'Click on Configurations and enter details on the below fields:',
        content: {
          type: 'table',
          rows: [
            { field: 'Client Name', instruction: 'Enter your Store Name' },
            { field: 'Client Description', instruction: 'Enter Little Description / Tagline / Selling Good information' },
            { field: 'Secret Key', instruction: 'Will be provided by Paystack' },
            { field: 'Public Key', instruction: 'Will be provided by Paystack' },
            { field: 'Active', instruction: 'Toggle to enable', isToggle: true },
          ],
        },
      },
      {
        title: 'Save Your Configuration',
        description:
          'Once all the information is entered, click the "Save" button. You will be redirected to the confirmation screen.',
        content: null,
      },
      {
        title: 'Activate UnumPay',
        description: 'Click on "Activate UnumPay" to enable the payment gateway on your storefront.',
        content: {
          type: 'activation',
          cards: [
            {
              color: '#f59e0b',
              icon: '🧪',
              title: 'Demo Credentials',
              desc: 'If you have entered demo credentials you must enable Test Mode.',
            },
            {
              color: '#16a34a',
              icon: '✅',
              title: 'Live Credentials',
              desc: 'For live transactions ensure that Test Mode is unchecked.',
            },
            {
              color: '#6a03ce',
              icon: '💳',
              title: 'Checkout Display',
              desc: 'Once activated {name} under UnumPay will appear at checkout as "{checkoutDisplayText}."',
            },
          ],
        },
      },
    ],
    checkoutDisplayText: 'Debit - Credit Card',
    commonQuestions: [
      {
        question: 'Where do I get my Paystack credentials?',
        answer:
          'Contact Paystack directly through their official website or merchant dashboard to obtain your credentials before starting the setup.',
      },
      {
        question: 'What will my customers see at checkout?',
        answer:
          'Paystack under UnumPay appears at your Shopify checkout as "Debit - Credit Card".',
      },
      {
        question: 'Can I test before going live?',
        answer:
          'If you have entered demo credentials make sure to enable test mode and for live make sure that checkbox is unchecked.',
      },
    ],
    bottomCta: {
      layout: 'full',
      heading: 'Ready to Accept Paystack Payments?',
      subtitle:
        'Install the UnumPay app and start accepting Paystack payments on your Shopify store in minutes.',
      buttons: [
        { label: 'Install on Shopify', href: 'https://apps.shopify.com/unum-pay', variant: 'primary' },
        { label: 'Contact Support', href: '/contact', variant: 'secondary' },
      ],
    },
  },

]