import React, { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { FadeIn, FadeInUp } from './Animations'

const mainFeatures = [
  'All your payment providers managed from one Shopify app',
  'Every transaction visible in a single dashboard. No switching between portals.',
  'Accept TND from local Tunisian buyers and EUR or USD from international customers',
  'Collect advance payments and deposits directly from your Shopify admin',
  'Free to install. No monthly fee. 0.85% per successful transaction only',
]

const flouciFeatures = [
  'TND (Tunisian Dinar) transactions',
  'Mobile wallet payments at Shopify checkout',
  'Online purchases for Tunisian customers. No bank card required.',
  'Access to Tunisian customers who pay via D17, ClicToPay, and e-Dinar through the Flouci network',
]

const connectSteps = [
  'Install UnumPay from the Shopify App Store',
  'Open your UnumPay dashboard and go to Payment Providers',
  'Select Flouci and complete the activation steps',
  'Flouci will appear as a payment option at your Shopify checkout',
]

const tunisiaFaqs = [
  {
    question: 'How do I accept payments on Shopify in Tunisia?',
    answer: 'Install UnumPay from the Shopify App Store and connect Flouci or any other supported Tunisian payment provider from a single dashboard. No custom code or developer required.',
  },
  {
    question: 'How do I integrate Flouci with Shopify?',
    answer: 'Install UnumPay, open your dashboard, go to Payment Providers, select Flouci, and complete the activation steps. Flouci will then appear as a payment option at your Shopify checkout.',
  },
  {
    question: 'Can I use Stripe in Tunisia?',
    answer: 'Stripe is not natively available in Tunisia. However, you can connect Stripe alongside Flouci through UnumPay to serve international customers while Flouci handles local TND transactions.',
  },
  {
    question: 'Does PayPal work for Tunisian Shopify merchants?',
    answer: 'PayPal has limited availability for Tunisian merchants. UnumPay lets you combine multiple providers so you are not dependent on a single gateway for international payments.',
  },
  {
    question: 'What payment methods do Tunisian customers use online?',
    answer: 'Tunisian customers commonly use Flouci, D17, ClicToPay, and e-Dinar for online purchases. UnumPay connects your Shopify store to all of these through the Flouci network.',
  },
  {
    question: 'How do I accept EUR payments from customers in France and Europe?',
    answer: 'Add an international payment provider alongside Flouci through UnumPay. This ensures diaspora and European customers can pay in EUR while local Tunisian buyers continue paying in TND.',
  },
  {
    question: 'Is there a monthly fee to use UnumPay?',
    answer: 'No. UnumPay is free to install with no monthly fees. You only pay 0.85% per successful transaction processed through your connected gateways.',
  },
]

const Tunisia = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div>

      <section className="tun-hero-section bg-[#1a0028] relative overflow-hidden">
        <div className="max-w-215 mx-auto px-4 sm:px-6 md:px-8 xl:px-0 relative z-10">
         <p className="tun-breadcrumb flex items-center gap-2">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/coverage/">Coverage</a>
          <span>/</span>
          <span className='span-tg'>Tunisia</span>
        </p>

          <h2 className="tun-hero-title">Shopify Payment Gateway Tunisia</h2>

          <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#C9B8E8] max-w-2xl mb-6">
            Connect Flouci to your Shopify store and start accepting local payments in Tunisia today. Free to install. No monthly fees.
          </p>

          <div>
            <a href="https://apps.shopify.com/unum-pay" target='_blank' className="tun-hero-cta">
              Install on Shopify Free <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-215 mx-auto px-4 sm:px-6 md:px-8 xl:px-0 py-14 md:py-20">

          <div className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#171721] mb-5">
              One App. Every Local Tunisia Payment Method. Full Control.
            </h2>

            <p className="text-[16px] leading-[1.8] text-[#4B4B5C] mb-6">
              UnumPay is a payment mediation platform built for Shopify. Install it once from the Shopify App Store and connect Flouci and other supported Tunisian payment providers from a single dashboard. No custom code. No separate developer work for each provider.
            </p>

            <h3 className="text-[15px] font-semibold text-[#171721] mb-3">What you get:</h3>

            <ul className="flex flex-col gap-3 mb-6">
              {mainFeatures.map((feature) => (
                <li className="flex items-start gap-3" key={feature}>
                  <span className="tun-checklist__check mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center">
                    <Check size={12} strokeWidth={3} color='#fff' />
                  </span>
                  <span className='text-[15px] leading-[1.7] text-[#4B4B5C]'>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-[15px] leading-[1.7] text-[#4B4B5C]">
              UnumPay is a Shopify-approved app. It does not replace your payment providers. It connects and manages them.
            </p>
          </div>

          <div className="tun-featured-card mb-16 rounded-2xl p-7 sm:p-9">
            <span className="tun-featured-badge inline-block mb-4 text-[12px] font-semibold px-3 py-1 rounded-full">Featured Integration</span>

            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#171721] mb-4">
              Flouci on Shopify, Tunisia's Local Payment Method, Connected
            </h2>

            <p className="text-[15.5px] leading-[1.8] text-[#4B4B5C] mb-6">
              Flouci is a Tunisian mobile payment solution that allows customers to pay using their Flouci wallet at checkout. It is widely used for online purchases within Tunisia and is the verified local integration available for Tunisian Shopify merchants through UnumPay.
            </p>

            <h3 className="text-[14.5px] font-semibold text-[#171721] mb-3">What Flouci enables:</h3>

            <ul className="flex flex-col gap-2.5 mb-7">
              {flouciFeatures.map((feature) => (
                <li className="flex items-start gap-3" key={feature}>
                  <span className="tun-checklist__check mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center">
                    <Check size={12} strokeWidth={3} color='#fff' />
                  </span>
                  <span className='text-[14.5px] leading-[1.7] text-[#4B4B5C]'>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-[14.5px] font-semibold text-[#171721] mb-4">How to connect Flouci to your Shopify store:</h3>

            <ol className="flex flex-col gap-3 mb-6">
              {connectSteps.map((step, index) => (
                <li className="flex items-start gap-3" key={step}>
                  <span className="tun-steps-list__number shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[12px] font-bold">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="text-[14.5px] leading-[1.7] text-[#6B7280] mb-5">
              No custom code required. No developer needed.
            </p>

            <a href="/flouci-integration-guide/" className="inline-flex items-center gap-2 text-[#6A03CE] font-semibold hover:text-[#C812D5] transition-colors text-[14.5px]">
              Read the Flouci integration guide <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mb-16">
            <h2 className='text-[26px] sm:text-[32px] font-bold text-[#171721] mb-4'>
            Local Payment Methods Available Through Flouci
            </h2>

            <p className='text-[15.5px] leading-[1.8] text-[#4B4B5C] mb-6'>
              Flouci connects your Shopify store to the wider Tunisian payment ecosystem. The following local payment methods are accessible to your customers through the Flouci network, without any additional integrations on your side.
            </p>

            <div className='flex flex-col gap-5'>
              <div className='rounded-xl border border-[#ECE7F5] p-6' style={{ background : 'rgb(252, 251, 254)'}}>
                <h3 className='text-[17px] font-bold text-[#171721] mb-2'>D17</h3>
                <p className='text-[15px] leading-[1.75] text-[#6B7280]'>
                  Tunisian shoppers with a D17 wallet can complete purchases through the Flouci checkout flow.
                </p>
              </div>
              <div className='rounded-xl border border-[#ECE7F5] p-6' style={{ background : 'rgb(252, 251, 254)'}}>
                <h3 className='text-[17px] font-bold text-[#171721] mb-2'>ClicToPay</h3>
                <p className='text-[15px] leading-[1.75] text-[#6B7280]'>
                  Customers using ClicToPay-linked bank cards can pay through the Flouci-enabled checkout on your Shopify store.
                </p>
              </div>
              <div className='rounded-xl border border-[#ECE7F5] p-6' style={{ background : 'rgb(252, 251, 254)'}}>
                <h3 className='text-[17px] font-bold text-[#171721] mb-2'>e-Dinar</h3>
                <p className='text-[15px] leading-[1.75] text-[#6B7280]'>
                  Customers who hold postal accounts and pay via e-Dinar can transact through the Flouci network at your Shopify checkout.
                </p>
              </div>
            </div>

          </div>

          <div className="mb-16">
            <h2 className='text-[26px] sm:text-[32px] font-bold text-[#171721] mb-5'>
              Accept TND Locally and EUR from International Customers
            </h2>
            <p className='text-[16px] leading-[1.8] text-[#4B4B5C] mb-4'>
              Tunisian merchants often serve two customer groups: local buyers in Tunisia paying in TND, and international or diaspora customers, primarily in France, Italy, Germany, and other European countries, who pay in EUR.
            </p>
            <p className='text-[16px] leading-[1.8] text-[#4B4B5C] mb-4'>
              Local providers like Flouci handle TND transactions for Tunisian buyers. Adding an international payment option alongside Flouci ensures overseas and diaspora customers can also complete purchases without issues.
            </p>
            <p className='text-[16px] leading-[1.8] text-[#4B4B5C]'>
              A multi-provider setup means no customer reaches your checkout and finds no working payment option.
            </p>
          </div>

          <div className="mb-16">
            <h2 className='text-[26px] sm:text-[32px] font-bold text-[#171721] mb-6'>Frequently Asked Questions</h2>
            <div className='flex flex-col gap-3'>
              {tunisiaFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index

                return (
                  <div
                    key={faq.question}
                    className='rounded-xl border border-[#ECE7F5] overflow-hidden'
                    style={{ background: 'rgb(252, 251, 254)' }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className='w-full flex items-center justify-between gap-4 text-left px-5 py-4'
                      aria-expanded={isOpen}
                    >
                      <h3 className='text-[15px] font-semibold text-[#171721]'>{faq.question}</h3>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#6A03CE] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4">
                        <p className="text-[14px] leading-[1.7] text-[#6B7280]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className='rounded-2xl p-8 sm:p-10 text-center tum-ls'>
            <h2 className='text-[24px] sm:text-[30px] font-bold text-white mb-3'>
              Start Accepting Payments in Tunisia Today
            </h2>
            <p className='text-[15.5px] leading-[1.7] text-[#C9B8E8] max-w-xl mx-auto mb-2'>
              UnumPay is free to install. No monthly fee. No setup cost. Pay only when a sale is made. 0.60% per successful transaction.
            </p>
            <p className='text-[15px] text-[#C9B8E8] mb-7'>Connect Flouci and go live the same day.</p>
            <div className='flex flex-wrap items-center justify-center gap-3 mb-5'>
              <a href="https://apps.shopify.com/unum-pay" target='_blank' className='tum-btn inline-flex items-center gap-2 text-white font-semibold py-3.5 px-8 rounded-lg transition-all hover:opacity-90 text-[15.5px]'>
              Install UnumPay Free <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className='text-[13px] text-[#9CA3AF]'>Shopify-approved app. Used by 2,500+ merchants across 45+ countries.</p>
          </div>

          <div className='mt-10 pt-8 border-t border-[#ECE7F5] flex flex-wrap gap-5'>
            <a href="/flouci-integration-guide/" className='text-[14px] text-[#6A03CE] font-medium hover:text-[#C812D5] transition-colors flex items-center gap-1.5'>
              Flouci integration guide <span aria-hidden="true">→</span>
            </a>
             <a href="/coverage/" className='text-[14px] text-[#6A03CE] font-medium hover:text-[#C812D5] transition-colors flex items-center gap-1.5'>
              All supported gateways  <span aria-hidden="true">→</span>
            </a>
            <a href="/pricing/" className='text-[14px] text-[#6A03CE] font-medium hover:text-[#C812D5] transition-colors flex items-center gap-1.5'>
              Pricing <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>


    </div>
  )
}

export default Tunisia