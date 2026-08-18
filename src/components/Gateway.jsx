import { Building2, CreditCard, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'

import abhipay from '../assets/paymentlogo/abhipay.webp'
import alliedbank from '../assets/paymentlogo/alliedbank.webp'
import assan from '../assets/paymentlogo/assan.webp'
import assanPay from '../assets/paymentlogo/assan-pay.webp'
import authorizenet from '../assets/paymentlogo/authorizenet.webp'
import bankislami from '../assets/paymentlogo/bankislami.webp'
import bankofpunjab from '../assets/paymentlogo/bankofpunjab.webp'
import blinq from '../assets/paymentlogo/blinq.webp'
import paylogo2 from '../assets/paymentlogo/paylogo2.webp'
import ccavenue from '../assets/paymentlogo/ccavenue.webp'
import ccbill from '../assets/paymentlogo/ccbill.webp'
import checkout from '../assets/paymentlogo/checkout.webp'
import citybank from '../assets/paymentlogo/citybank.webp'
import dialogpay from '../assets/paymentlogo/dialogpay.webp'
import directpay from '../assets/paymentlogo/directpay.webp'
import easypaisa from '../assets/paymentlogo/easypaisa.webp'
import flouci from '../assets/paymentlogo/flouci.webp'
import hbl from '../assets/paymentlogo/hbl.webp'
import jazzcash from '../assets/paymentlogo/jazzcash.webp'
import payfast from '../assets/paymentlogo/payfast.webp'
import paylogo from '../assets/paymentlogo/paylogo.webp'
import fab from '../assets/paymentlogo/fab.webp'
import moyasar from '../assets/paymentlogo/moyasar.webp'
import meezan from '../assets/paymentlogo/meezan.webp'
import paymob from '../assets/paymentlogo/paymob.webp'
import keenu from '../assets/paymentlogo/keenu.webp'
import rapyd from '../assets/paymentlogo/rapyd.webp'
import stripe from '../assets/paymentlogo/stripe.webp'
import swich from '../assets/paymentlogo/swich.webp'
import tap from '../assets/paymentlogo/tap.webp'
import tbc from '../assets/paymentlogo/tbc.webp'
import walee from '../assets/paymentlogo/walee.webp'
import flutter from '../assets/paymentlogo/flutterwave.webp'
import mcb from '../assets/paymentlogo/mcb.webp'
import hblhosted from '../assets/paymentlogo/hbl-hosted.webp'
import hblsecure from '../assets/paymentlogo/hblsecure.webp'
import naeem from '../assets/paymentlogo/neem.webp'
import { FadeIn, FadeInLeft, FadeInRight, FadeInUp } from './Animations'
import GlobalBackground from './GlobalBackground'


const nodes = [
  { id: 'n1', x: 220, y: 140 },
  { id: 'n2', x: 480, y: 90 },
  { id: 'n3', x: 720, y: 200 },
  { id: 'n4', x: 340, y: 320 },
  { id: 'n5', x: 620, y: 380 },
  { id: 'n6', x: 900, y: 260 },
  { id: 'n7', x: 1080, y: 150 },
  { id: 'n8', x: 1180, y: 350 },
  { id: 'n9', x: 150, y: 420 },
  { id: 'n10', x: 880, y: 450 },
]

const links = [
  { id: 'link-1', from: nodes[0], to: nodes[1] },
  { id: 'link-2', from: nodes[1], to: nodes[2] },
  { id: 'link-3', from: nodes[0], to: nodes[3] },
  { id: 'link-4', from: nodes[3], to: nodes[4] },
  { id: 'link-5', from: nodes[2], to: nodes[5] },
  { id: 'link-6', from: nodes[5], to: nodes[6] },
  { id: 'link-7', from: nodes[6], to: nodes[7] },
  { id: 'link-8', from: nodes[5], to: nodes[9] },
  { id: 'link-9', from: nodes[3], to: nodes[8] },
  { id: 'link-10', from: nodes[4], to: nodes[9] },
]

const pathD = (link) => `M ${link.from.x} ${link.from.y} L ${link.to.x} ${link.to.y}`


const countries = [
  'All Countries', 'Pakistan', 'UAE', 'USA', 'UK', 'Turkey', 'India',
  'Bangladesh', 'Sri Lanka', 'Thailand', 'Tunisia', 'South Africa',
  'Egypt', 'Georgia', 'Global',
]

const gateways = [
  { logo: abhipay, name: 'Abhi Pay', country: 'Pakistan', slug: 'abhi-pay-integration-guide' },
  { logo: bankislami, name: 'Aik by BankIslami', country: 'Pakistan', slug: 'aik-by-bankislami-integration-guide' },
  { logo: alliedbank, name: 'Allied Bank', country: 'Pakistan', slug: 'allied-bank-integration-guide' },
  { logo: assan, name: 'Assan Pay', country: 'Turkey', slug: 'assan-pay-integration-guide' },
  { logo: authorizenet, name: 'Authorize.net', country: 'USA', slug: 'authorize-net-integration-guide' },
  { logo: paylogo, name: 'Bank Alfalah MPOS', country: 'Pakistan', slug: 'bank-alfalah-mpos-integration-guide' },
  { logo: blinq, name: 'Blinq', country: 'UAE', slug: 'blinq-integration-guide' },
  { logo: bankofpunjab, name: 'Bank of Punjab', country: 'Pakistan', slug: 'bank-of-punjab-integration-guide' },
  { logo: ccavenue, name: 'CCAvenue', country: 'India', slug: 'ccavenue-integration-guide' },
  { logo: ccbill, name: 'CCBill', country: 'USA', slug: 'ccbill-integration-guide' },
  { logo: checkout, name: 'Checkout.com', country: 'UK', slug: 'checkout-com-integration-guide' },
  { logo: citybank, name: 'CityBank of Bangladesh', country: 'Bangladesh', slug: 'citybank-of-bangladesh-integration-guide' },
  { logo: dialogpay, name: 'DialogPay', country: 'Sri Lanka', slug: 'dialogpay-integration-guide' },
  { logo: directpay, name: 'Direct Pay', country: 'Thailand', slug: 'direct-pay-integration-guide' },
  { logo: easypaisa, name: 'EasyPaisa', country: 'Pakistan', slug: 'easypaisa-integration-guide' },
  { logo: fab, name: 'FAB (First Abu Dhabi Bank)', country: 'UAE', slug: 'fab-first-abu-dhabi-bank-integration-guide' },
  { logo: flouci, name: 'Flouci', country: 'Tunisia', slug: 'flouci-integration-guide' },
  { logo: flutter, name: 'Flutterwave', country: 'Global', slug: 'flutterwave-integration-guide' },
  { logo: hblhosted, name: 'HBL Hosted Checkout', country: 'Pakistan', slug: 'hbl-hosted-checkout-integration-guide' },
  { logo: hbl, name: 'HBL Unified Checkout', country: 'Pakistan', slug: 'hbl-unified-checkout-integration-guide' },
  { logo: hblsecure, name: 'HBL Secure Acceptance', country: 'Pakistan', slug: 'hbl-secure-acceptance-integration-guide' },
  { logo: jazzcash, name: 'Jazz Cash', country: 'Pakistan', slug: 'jazz-cash-integration-guide' },
  { logo: keenu, name: 'Keenu', country: 'Pakistan', slug: 'keenu-integration-guide' },
  { logo: mcb, name: 'MCB', country: 'Pakistan', slug: 'mcb-integration-guide' },
  { logo: meezan, name: 'Meezan', country: 'Pakistan', slug: 'meezan-integration-guide' },
  { logo: paymob, name: 'Paymob', country: 'Egypt', slug: 'paymob-integration-guide' },
  { logo: rapyd, name: 'Rapyd', country: 'Global', slug: 'rapyd-integration-guide' },
  { logo: stripe, name: 'Stripe', country: 'Global', slug: 'stripe-integration-guide' },
  { logo: swich, name: 'Swich', country: 'Pakistan', slug: 'swich-integration-guide' },
  { logo: tap, name: 'Tap Payments', country: 'UAE', slug: 'tap-payments-integration-guide' },
  { logo: tbc, name: 'TBC Bank', country: 'Georgia', slug: 'tbc-bank-integration-guide' },
  { logo: walee, name: 'Walee', country: 'Pakistan', slug: 'walee-integration-guide' },
  { logo: naeem, name: 'Neem', country: 'Pakistan', slug: 'neem-integration-guide' },
  { logo: moyasar, name: 'Moyasar', country: 'Saudi Arabia', slug: 'moyasar-integration-guide' },
  { logo: paylogo2, name: 'Paystack', country: 'Pakistan', slug: 'paystack-integration-guide' },
];

const faqs = [
    {
        question: 'Which countries does UnumPay support?',
        answer: 'UnumPay currently supports merchants in 45+ countries including Pakistan, UAE, Saudi Arabia, Kuwait, Oman, Bahrain, Egypt, Jordan, Lebanon, Qatar, UK, USA, Bangladesh, Nigeria, Ghana, Kenya, South Africa, Tunisia, Georgia and more. We add new markets every month.',
    },
    {
        question: 'Can I connect multiple payment gateways at the same time?',
        answer: 'Yes. UnumPay allows you to connect and run multiple gateways simultaneously from one Shopify integration. If one gateway experiences an issue, another takes over instantly so your checkout never goes down.',
    },
    {
        question: 'How long does it take to integrate a payment gateway?',
        answer: 'Most integrations take under 5 minutes. Install UnumPay from the Shopify App Store, select your gateway, enter your credentials and go live. No developer or coding required.',
    },
    {
        question: 'What is an Integration Guide?',
        answer: 'Each gateway has a step-by-step Integration Guide that walks you through connecting that specific payment provider to your Shopify store through UnumPay. Click the Integration Guide link on any gateway card to view the full guide.',
    },
    {
        question: 'Is UnumPay available where Shopify Payments is not supported?',
        answer: 'Yes. UnumPay was specifically built for merchants in regions where Shopify Payments is not available. It works as a fully approved native payment solution for every region Shopify Payments does not cover.',
    },
    {
        question: 'Can I request a gateway that is not currently listed?',
        answer: 'Absolutely. Contact us at unumpay@devsinc.com or use the Partnership form below. We prioritize new gateway additions based on merchant demand and typically onboard new gateways within 4 to 6 weeks.',
    },
    {
        question: 'Do all gateways support multi-currency?',
        answer: 'Most gateways on UnumPay support multi-currency transactions. The specific currencies supported depend on each gateway provider. Check the Integration Guide for each gateway to see supported currencies.',
    },
]

const partnerOptions = [
  {
    icon: <CreditCard size={22} />,
    title: 'Payment Service Provider (PSP)',
    desc: 'List your gateway on UnumPay and instantly reach thousands of Shopify merchants looking for your payment solution in your market.',
    linkText: 'Apply as PSP Partner',
    href: '/become-a-partner/',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Bank or Financial Institution',
    desc: 'Partner with UnumPay to bring your banking infrastructure to Shopify merchants. Expand your merchant acquiring business through our platform.',
    linkText: 'Apply as Bank Partner',
    href: '/become-a-partner/',
  },
]

const Gateway = () => {
    const [openIndex, setOpenIndex] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('All Countries')

    
    const toggleFaq = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }

    const filteredGateways = gateways.filter((gw) => {
    const matchesSearch = gw.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === 'All Countries' || gw.country === selectedCountry
    return matchesSearch && matchesCountry
  })

  return (
    <div>

    <section
      className="relative flex items-center justify-center overflow-hidden pt-30!"
      style={{ minHeight: '55vh', paddingTop: '48px', paddingBottom: '48px' }}
    >
      
      <GlobalBackground />

      {/* Content */}
      <div className="relative text-center px-6" style={{ zIndex: 2, maxWidth: '760px', margin: '0px auto' }}>
        <div
          className="inline-flex items-center gap-2 mb-4"
          style={{
            background: 'rgba(200, 18, 213, 0.15)',
            border: '1px solid rgba(200, 18, 213, 0.4)',
            borderRadius: '999px',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.02em',
          }}
        >
          ✦ Shopify Approved · 45+ Countries
        </div>

        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          One App. Every Market. Every Gateway.
        </h1>

        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '580px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}
        >
          UnumPay connects your Shopify store to 40+ payment gateways across 45+ countries. Find your market below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
         <a 
            href="https://apps.shopify.com/unum-pay"
            target="_blank"
            rel="noopener noreferrer"
            className="coverage-btn-primary"
          >
            Install on Shopify →
          </a>
          <a href="#gateways" className="coverage-btn-ghost">
            View All Gateways ↓
          </a>
        </div>
      </div>
    </section>

    <section className="pay-gtw-section" id='how-it-works'>
        <div className='max-w-300 mx-auto px-6 md:px-10 lg:px-12] xl:px-12'>
          <span className="work-eyebrow">SUPPORTED PAYMENT GATEWAYS</span>
          <h2 className="cov-heading">Find Your Payment Gateway</h2>
          <p className="cov-subtitle">
            Search by country or gateway name to find the payment providers available for your Shopify store.
          </p>

          <div className="gtw-search-bar">
            <div className="coverage-filter-select-wrap">
                <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="gtw-select"
                    >
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <svg className="coverage-filter-chevron" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>

            <div className="coverage-filter-select-wrap">
              <Search size={18} className="gtw-search-icon" />
              <input
                type="text"
                placeholder="Search gateway name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="gtw-search-input"
              />
            </div>
          </div>

          <div className="gtw-grid">
            {filteredGateways.map((gw) => (
              <div className="gtw-card" key={gw.name}>
                <div className="gtw-card__logo">
                  <img src={gw.logo.src ?? gw.logo} alt={gw.name} />
                </div>
                <h1 className="gtw-card__name">{gw.name}</h1>
                <a href={`/${gw.slug}/`} className="gtw-card__link">
                  Integration Guide <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}

            {filteredGateways.length === 0 && (
              <p className="gtw-empty">No gateways found matching your search.</p>
            )}
          </div>

        </div>
    </section>

    <section className="faq-section">
      <div className="faq-container">
        <span className="work-eyebrow">FAQ</span>
        <h2 className="coverage-heading">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div className="faq-item" key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? "open" : ""}`}>
                    <Plus size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="all-gateway-section">
        <div className='cta-section__glow' aria-label='hidden'></div>
        <div className="gta--content">
            <span className="all-gateway-badge">Partner with Us</span>

            <h2 className="all-gateway-heading">
            Are You a Payment Provider?
            </h2>

            <p className="all-gateway-subtitle">
                Join the UnumPay network and get your gateway in front of thousands of Shopify merchants across 45+ countries.
            </p>

           <div className="partner-cards-grid">
              {partnerOptions.map((item, index) => {
                  const Wrapper = index % 2 === 0 ? FadeInLeft : FadeInRight
                  return (
                      <Wrapper className="partner-card" key={item.title}>
                          <div className="partner-card__icon">{item.icon}</div>
                          <h3 className="partner-card__title">{item.title}</h3>
                          <p className="partner-card__desc">{item.desc}</p>
                          <a href={item.href} className="partner-card__link">
                              {item.linkText} <span aria-hidden="true">→</span>
                          </a>
                      </Wrapper>
                  )
              })}
          </div>

            <a href="/become-a-partner/" className="gta-section__btn-primary">
                Submit Partnership Inquiry <span aria-hidden="true">→</span>
            </a>

        </div>
    </section>

    <section className="gate-way-last-section">
        <div className="pri-content">

            <h2 className="gate-way-sec-heading">
                Your Market Is Out There. UnumPay Gets You There.
            </h2>

            <p className="gate-way-sec-subtitle">
                Don't let payment limitations hold your Shopify store back. UnumPay connects you to the gateways your customers trust.
            </p>

            <div className="cta-actions">
                <a href="https://apps.shopify.com/unum-pay" target='_blank' className="gta__btn-primary">
                    Install on Shopify <span aria-hidden="true">→</span>
                </a>
                <a href="/contact" className="gta-section__btn-secondary">
                    Contact Our Team <span aria-hidden="true">→</span>
                </a>
            </div>

        </div>
    </section>
      
    </div>
  )
}

export default Gateway
