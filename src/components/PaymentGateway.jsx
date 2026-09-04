import React, { useState } from 'react'
import assanPay from '../assets/paymentlogo/assan-pay.webp'
import blinq from '../assets/paymentlogo/blinq.webp'
import bop from '../assets/paymentlogo/bop.webp'
import ccavenue from '../assets/paymentlogo/ccavenue.webp'
import checkout from '../assets/paymentlogo/checkout.webp'
import easypaisa from '../assets/paymentlogo/easypaisa.webp'
import flouci from '../assets/paymentlogo/flouci.webp'
import hbl from '../assets/paymentlogo/hbl.webp'
import jazzcash from '../assets/paymentlogo/jazzcash.webp'
import payfast from '../assets/paymentlogo/payfast.webp'
import payfast2 from '../assets/paymentlogo/payfast.webp'
import payLogo from '../assets/paymentlogo/paylogo.webp'
import payLogo1 from '../assets/paymentlogo/paylogo1.webp'
import payLogo2 from '../assets/paymentlogo/paylogo2.webp'
import paymob from '../assets/paymentlogo/paymob.webp'
import payLogo3 from '../assets/paymentlogo/paylogo3.webp'
import rapyd from '../assets/paymentlogo/rapyd.webp'
import stripe from '../assets/paymentlogo/stripe.webp'
import swich from '../assets/paymentlogo/swich.webp'
import tap from '../assets/paymentlogo/tap.webp'
import tbc from '../assets/paymentlogo/tbc.webp'
import walee from '../assets/paymentlogo/walee.webp'

// Each logo carries the provider it depicts so the alt text names the actual
// brand in the image, rather than repeating "Payment partner logo" 96 times.
const row1 = [
  { img: assanPay, name: 'Assan Pay' },
  { img: blinq, name: 'Blinq' },
  { img: bop, name: 'Bank of Punjab' },
  { img: ccavenue, name: 'CCAvenue' },
  { img: checkout, name: 'Checkout.com' },
  { img: easypaisa, name: 'Easypaisa' },
  { img: flouci, name: 'Flouci' },
  { img: hbl, name: 'HBL' },
]
const row2 = [
  { img: jazzcash, name: 'JazzCash' },
  { img: payfast, name: 'PayFast' },
  { img: payLogo, name: 'Bank Alfalah' },
  { img: payLogo1, name: 'HBL Visa and Mastercard' },
  { img: payLogo2, name: 'Paystack' },
  { img: paymob, name: 'Paymob' },
  { img: payLogo3, name: 'CC Bill Pay' },
  { img: rapyd, name: 'Rapyd' },
]
const row3 = [
  { img: stripe, name: 'Stripe' },
  { img: swich, name: 'Swich' },
  { img: tap, name: 'Tap' },
  { img: tbc, name: 'TBC Bank' },
  { img: walee, name: 'Walee' },
  { img: payfast2, name: 'PayFast' },
  { img: assanPay, name: 'Assan Pay' },
  { img: blinq, name: 'Blinq' },
]

const PaymentGateway = () => {
  const [isStopped, setIsStopped] = useState(false)

  const handleLogoClick = () => {
    setIsStopped((prev) => !prev)
  }

  const renderRow = (logos, direction) => (
    <div className="pg-marquee-wrapper">
      <div
        className={`pg-marquee-track ${direction === 'reverse' ? 'pg-marquee-reverse' : ''} ${
          isStopped ? 'pg-marquee-paused' : ''
        }`}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => {
          // The row is repeated four times only so the marquee can loop
          // seamlessly. Announcing every provider four times is noise, so the
          // copies after the first pass are hidden from assistive tech.
          const isRepeat = index >= logos.length
          return (
          <button
            key={index}
            className="pg-logo-box"
            onClick={handleLogoClick}
            type="button"
            aria-hidden={isRepeat || undefined}
            tabIndex={isRepeat ? -1 : undefined}
          >
            <img
              src={logo.img?.src ?? logo.img ?? logo}
              width={logo.img?.width}
              height={logo.img?.height}
              alt={isRepeat ? '' : `${logo.name} payment gateway logo`}
              className="pg-logo-img"
              loading="lazy"
            />
          </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <section className="work-section bg-white stats-section" id="payment-gateways">
      <div className='max-w-300 mx-auto px-6 md:px-10 lg:px-12 xl:px-12'>
        <span className="work-eyebrow">PAYMENT PARTNERS</span>
        <h2 className="work-heading">40+ Payment Gateways. One Integration.</h2>
        <p className="work-subtitle">
          Connect your Shopify store to every major local and global payment provider in minutes.
        </p>

        <div className="pg-rows-container">
          {renderRow(row1, 'normal')}
          {renderRow(row2, 'reverse')}
          {renderRow(row3, 'normal')}
        </div>

        <div className="pg-cta-wrapper">
          <a href="/become-a-partner/" className="pg-cta-btn">
            View All Payment Partners <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PaymentGateway