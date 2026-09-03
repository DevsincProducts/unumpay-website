import { Search } from 'lucide-react'
import React, { useState } from 'react'

import abhipay from '../assets/paymentlogo/abhipay.webp'
import aikbankislami from '../assets/paymentlogo/aik-by-bankislami.webp'
import alliedbank from '../assets/paymentlogo/alliedbank.webp'
import assan from '../assets/paymentlogo/assan.webp'
import authorizenet from '../assets/paymentlogo/authorizenet.webp'
import bankalfalah from '../assets/paymentlogo/bank-alfalah-mpgs.webp'
import bankalfalahapg from '../assets/paymentlogo/bank-alfalah-apg.webp'
import bankofpunjab from '../assets/paymentlogo/bankofpunjab.webp'
import blinq from '../assets/paymentlogo/blinq.webp'
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
import mypay from '../assets/paymentlogo/mypay.webp'
import networkinternational from '../assets/paymentlogo/network-international.webp'
import nift from '../assets/paymentlogo/nift.webp'
import pay2m from '../assets/paymentlogo/pay2m.webp'
import paypro from '../assets/paymentlogo/paypro.webp'
import paystack from '../assets/paymentlogo/paystack.webp'
import paytab from '../assets/paymentlogo/paytab.webp'
import safepay from '../assets/paymentlogo/safepay.webp'
import ubl from '../assets/paymentlogo/ubl.webp'
import zerocash from '../assets/paymentlogo/zerocash.webp'

export const countries = [
  'All Countries', 'Bahrain', 'Bangladesh', 'Egypt', 'Georgia', 'Ghana',
  'Global', 'Jordan', 'Kenya', 'Kuwait', 'Lebanon', 'Nigeria', 'Oman',
  'Pakistan', 'Qatar', 'Saudi Arabia', 'South Africa', 'Tunisia', 'UAE',
  'UK', 'USA',
]

// Order, names, slugs and country coverage all mirror the live
// unumpay.com/coverage/ page exactly — a gateway can belong to more than
// one country, so `countries` is an array checked with .includes().
const gateways = [
  { logo: abhipay, name: 'Abhi Pay', countries: ['Pakistan'], slug: 'abhi-pay-integration-guide' },
  { logo: aikbankislami, name: 'Aik by BankIslami', countries: ['Pakistan'], slug: 'aik-by-bankislami-integration-guide' },
  { logo: alliedbank, name: 'Allied Bank', countries: ['Pakistan'], slug: 'allied-bank-integration-guide' },
  { logo: assan, name: 'Assan Pay', countries: ['Pakistan'], slug: 'assan-pay-integration-guide' },
  { logo: authorizenet, name: 'Authorize.net', countries: ['Global', 'USA'], slug: 'authorize-net-integration-guide' },
  { logo: bankalfalahapg, name: 'Bank Alfalah APG', countries: ['Pakistan'], slug: 'bank-alfalah-apg-integration-guide' },
  { logo: bankalfalah, name: 'Bank Alfalah MPGS', countries: ['Pakistan'], slug: 'bank-alfalah-mpgs-integration-guide' },
  { logo: blinq, name: 'Blinq', countries: ['Pakistan'], slug: 'blinq-integration-guide' },
  { logo: bankofpunjab, name: 'Bank of Punjab', countries: ['Pakistan'], slug: 'bop-integration-guide' },
  { logo: ccavenue, name: 'CCAvenue', countries: ['UAE'], slug: 'ccavenue-integration-guide' },
  { logo: ccbill, name: 'CCBill', countries: ['USA'], slug: 'ccbill-integration-guide' },
  { logo: checkout, name: 'Checkout.com', countries: ['Global', 'UAE', 'UK', 'USA'], slug: 'checkout-com-integration-guide' },
  { logo: citybank, name: 'CityBank of Bangladesh', countries: ['Bangladesh'], slug: 'citybank-of-bangladesh-integration-guide' },
  { logo: dialogpay, name: 'DialogPay', countries: ['Global'], slug: 'dialogpay-integration-guide' },
  { logo: directpay, name: 'Direct Pay', countries: ['Global'], slug: 'direct-pay-integration-guide' },
  { logo: easypaisa, name: 'EasyPaisa', countries: ['Pakistan'], slug: 'easypaisa-integration-guide' },
  { logo: fab, name: 'FAB (First Abu Dhabi Bank)', countries: ['UAE'], slug: 'fab-integration-guide' },
  { logo: flouci, name: 'Flouci', countries: ['Tunisia'], slug: 'flouci-integration-guide' },
  { logo: flutter, name: 'Flutterwave', countries: ['Ghana', 'Kenya', 'Nigeria', 'South Africa'], slug: 'flutterwave-integration-guide' },
  { logo: hblhosted, name: 'HBL Hosted Checkout', countries: ['Pakistan'], slug: 'hbl-hosted-checkout-integration-guide' },
  { logo: hbl, name: 'HBL Unified Checkout', countries: ['Pakistan'], slug: 'hbl-unified-checkout-integration-guide' },
  { logo: hblsecure, name: 'HBL Secure Acceptance', countries: ['Pakistan'], slug: 'hbl-integration-guide' },
  { logo: jazzcash, name: 'Jazz Cash', countries: ['Pakistan'], slug: 'jazz-cash-integration-guide' },
  { logo: keenu, name: 'Keenu', countries: ['Pakistan'], slug: 'keenu-integration-guide' },
  { logo: mcb, name: 'MCB', countries: ['Pakistan'], slug: 'mcb-integration-guide' },
  { logo: meezan, name: 'Meezan', countries: ['Pakistan'], slug: 'meezan-integration-guide' },
  { logo: moyasar, name: 'Moyasar', countries: ['Kuwait', 'Saudi Arabia'], slug: 'moyasar-integration-guide' },
  { logo: mypay, name: 'MyPay', countries: ['Global'], slug: 'mypay-integration-guide' },
  { logo: naeem, name: 'Neem', countries: ['Pakistan'], slug: 'neem-integration-guide' },
  { logo: networkinternational, name: 'Network International', countries: ['UAE', 'UK', 'USA'], slug: 'network-international-integration-guide' },
  { logo: nift, name: 'Nift', countries: ['Pakistan'], slug: 'nift-integration-guide' },
  { logo: pay2m, name: 'Pay2M', countries: ['Global'], slug: 'pay2m-integration-guide' },
  { logo: payfast, name: 'PayFast', countries: ['Pakistan', 'South Africa'], slug: 'payfast-integration-guide' },
  { logo: paymob, name: 'Paymob', countries: ['Egypt', 'Jordan', 'Lebanon', 'Pakistan', 'UAE'], slug: 'paymob-integration-guide' },
  { logo: paypro, name: 'PayPro', countries: ['Pakistan'], slug: 'paypro-integration-guide' },
  { logo: paystack, name: 'Paystack', countries: ['Ghana', 'Nigeria', 'South Africa'], slug: 'paystack-integration-guide' },
  { logo: paytab, name: 'Paytab', countries: ['Kuwait', 'Oman', 'Saudi Arabia', 'UAE'], slug: 'paytab-integration-guide' },
  { logo: rapyd, name: 'Rapyd', countries: ['Global'], slug: 'rapyd-integration-guide' },
  { logo: safepay, name: 'SafePay', countries: ['Pakistan'], slug: 'safepay-integration-guide' },
  { logo: stripe, name: 'Stripe', countries: ['Global', 'UK', 'USA'], slug: 'stripe-integration-guide' },
  { logo: swich, name: 'Swich', countries: ['Global', 'Pakistan'], slug: 'swich-integration-guide' },
  { logo: tap, name: 'Tap Payment', countries: ['Bahrain', 'Kuwait', 'Qatar', 'Saudi Arabia', 'UAE'], slug: 'tap-payment-integration-guide' },
  { logo: tbc, name: 'TBC Bank', countries: ['Georgia'], slug: 'tbc-bank-integration-guide' },
  { logo: ubl, name: 'UBL', countries: ['Pakistan'], slug: 'ubl-integration-guide' },
  { logo: walee, name: 'Walee', countries: ['Pakistan'], slug: 'walee-integration-guide' },
  { logo: zerocash, name: 'Zerocash', countries: ['Global', 'Pakistan'], slug: 'zerocash-integration-guide' },
]

// Just the interactive search/filter/grid — the only part of the Coverage
// page that actually needs to be a React island. Everything else (hero,
// FAQ, CTA sections) is plain Astro markup so it doesn't add to this
// island's server-render cost.
const GatewaySearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('All Countries')

  const filteredGateways = gateways.filter((gw) => {
    const matchesSearch = gw.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === 'All Countries' || gw.countries.includes(selectedCountry)
    return matchesSearch && matchesCountry
  })

  return (
    <>
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
              <img src={gw.logo.src ?? gw.logo} alt={gw.name} loading="lazy" />
            </div>
            <h3 className="gtw-card__name">{gw.name}</h3>
            <a href={`/${gw.slug}/`} className="gtw-card__link">
              Integration Guide <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}

        {filteredGateways.length === 0 && (
          <p className="gtw-empty">No gateways found matching your search.</p>
        )}
      </div>
    </>
  )
}

export default GatewaySearch
