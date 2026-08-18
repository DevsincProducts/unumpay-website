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

const row1 = [assanPay, blinq, bop, ccavenue, checkout, easypaisa, flouci, hbl]
const row2 = [jazzcash, payfast, payLogo, payLogo1, payLogo2, paymob, payLogo3, rapyd]
const row3 = [stripe, swich, tap, tbc, walee, payfast2, assanPay, blinq]

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
        {[...logos, ...logos].map((logo, index) => (
          <button
            key={index}
            className="pg-logo-box"
            onClick={handleLogoClick}
            type="button"
          >
            <img src={logo.src ?? logo} alt="Payment partner logo" className="pg-logo-img" />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <section className="work-section bg-white stats-section">
      <div className='max-w-300 mx-auto px-6 md:px-10 lg:px-12 xl:px-12'>
        <span className="work-eyebrow">PAYMENT PARTNERS</span>
        <h2 className="work-heading">40+ Payment Gateways. One Integration.</h2>
        <p className="work-subtitle">
          Connect your Shopify store to every major local and global payment provider in minutes.
        </p>
      </div>

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
    </section>
  )
}

export default PaymentGateway