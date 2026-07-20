import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  HiPhone, HiMail, HiLocationMarker, HiClock,
  HiCheckCircle, HiExclamationCircle,
} from 'react-icons/hi'
import { MdWhatsapp } from 'react-icons/md'
import SectionBanner from './SectionBanner'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: <HiPhone size={20} />,
    label: 'Phone / WhatsApp',
    value: '+91 76656 56574',
    href: 'tel:+917665656574',
    color: '#22c55e',
  },
  {
    icon: <HiMail size={20} />,
    label: 'Email',
    value: 'treenindustries@gmail.com',
    href: 'mailto:treenindustries@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <HiLocationMarker size={20} />,
    label: 'Address',
    value: '8-A National Highway, Nr. Timbadi Patiya, Morbi (Guj.) India',
    href: 'https://maps.google.com/?q=Morbi,Gujarat',
    color: '#f59e0b',
  },
  {
    icon: <HiClock size={20} />,
    label: 'Website',
    value: 'www.treenindustries.com',
    href: 'https://www.treenindustries.com',
    color: '#a855f7',
  },
]

const PRODUCT_OPTIONS = [
  'COPPER Tile Adhesive',
  'PREMIER Tile Adhesive',
  'CLASSIC Tile Adhesive',
  'CLASSIC WHITE Tile Adhesive',
  'CLASSIC PLUS WHITE Adhesive',
  'ULTRA GREY Stone Adhesive',
  'Polymer Based Grout',
  'Grout TRE-MIX Latex Admix',
  'TP 100 Epoxy Grout',
  'TP 200 Epoxy Grout',
  'Waterproofing System',
  'Tile Cleaner',
  'Tile Accessories',
  'Other / Not Sure',
]

const BANNER_ACCENT = (
  <div className="contact-banner-cards">
    <div className="contact-banner-card">
      <span className="contact-banner-card__icon">⏱️</span>
      <div>
        <div className="contact-banner-card__val">24 Hours</div>
        <div className="contact-banner-card__lbl">Response Time</div>
      </div>
    </div>
    <div className="contact-banner-card contact-banner-card--accent">
      <span className="contact-banner-card__icon">💬</span>
      <div>
        <div className="contact-banner-card__val">Free Quote</div>
        <div className="contact-banner-card__lbl">No Obligation</div>
      </div>
    </div>
  </div>
)

export default function Contact() {
  const [submitState, setSubmitState] = useState('idle')

  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1200))
    try {
      console.log('Form submission:', data)
      setSubmitState('success')
      reset()
      setTimeout(() => setSubmitState('idle'), 6000)
    } catch {
      setSubmitState('error')
      setTimeout(() => setSubmitState('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="contact-section">

      {/* ── Section Banner ── */}
      <SectionBanner
        tag="Contact Us"
        title={<>Request a Quote <em>or Enquiry</em></>}
        subtitle="Fill in the form and our team will respond within 24 hours. We welcome bulk orders, project-specific enquiries, and custom sourcing requests."
        theme="teal"
        align="left"
        accent={BANNER_ACCENT}
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* ── Body ── */}
      <div className="section section--gray contact-body">
        <div className="container">
          <div className="contact__layout">

            {/* ── Left: info panel ── */}
            <div className="contact__info-panel">

              <h3 className="contact__panel-heading">Get in Touch</h3>
              <p className="contact__panel-sub">
                Choose the most convenient way to reach us. We're here Monday to Saturday, 9 AM–6 PM.
              </p>

              <div className="contact__info-list">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="contact__info-item">
                    <div
                      className="contact__info-icon"
                      style={{ background: `${item.color}18`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="contact__info-content">
                      <div className="contact__info-label">{item.label}</div>
                      {item.href ? (
                        <a
                          className="contact__info-value contact__info-link"
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="contact__info-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917665656574?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20TREEN%20products."
                target="_blank"
                rel="noreferrer"
                className="contact__wa-btn"
              >
                <MdWhatsapp size={24} />
                <div>
                  <div className="contact__wa-title">Chat on WhatsApp</div>
                  <div className="contact__wa-sub">+91 76656 56574</div>
                </div>
                <span className="contact__wa-arrow">→</span>
              </a>

              {/* Map tile */}
              <div className="contact__map-tile">
                <div className="contact__map-tile-bg" />
                <div className="contact__map-tile-glow" />
                <div className="contact__map-tile-content">
                  <span className="contact__map-pin">📍</span>
                  <div>
                    <div className="contact__map-city">Morbi, Gujarat</div>
                    <div className="contact__map-state">8-A National Highway, Nr. Timbadi Patiya</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Morbi,Gujarat"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__map-link"
                  >
                    Open Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="contact__form-panel">

              {/* Form header */}
              <div className="contact__form-header">
                <div className="contact__form-header-icon">📝</div>
                <div>
                  <h4 className="contact__form-header-title">Bulk Enquiry Form</h4>
                  <p className="contact__form-header-sub">
                    Fill in the details below and we'll get back to you promptly.
                  </p>
                </div>
              </div>

              {/* Alerts */}
              {submitState === 'success' && (
                <div className="contact__alert contact__alert--success">
                  <HiCheckCircle size={22} />
                  <div>
                    <strong>Enquiry Received!</strong>
                    <p>Thank you — our team will contact you within 24 hours.</p>
                  </div>
                </div>
              )}
              {submitState === 'error' && (
                <div className="contact__alert contact__alert--error">
                  <HiExclamationCircle size={22} />
                  <div>
                    <strong>Something went wrong.</strong>
                    <p>Please try again or contact us directly by phone.</p>
                  </div>
                </div>
              )}

              <form className="contact__form" onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName" type="text"
                      className={`form-input${errors.fullName ? ' form-input--error' : ''}`}
                      placeholder="Your full name"
                      {...register('fullName', { required: 'Name is required' })}
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName.message}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company / Organisation</label>
                    <input
                      id="company" type="text"
                      className="form-input"
                      placeholder="Your company name"
                      {...register('company')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" type="tel"
                      className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                      placeholder="+91 XXXXX XXXXX"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[+]?[\d\s\-()]{7,15}$/, message: 'Enter a valid number' },
                      })}
                    />
                    {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email" type="email"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      placeholder="you@company.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                      })}
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="product">Product of Interest</label>
                  <select id="product" className="form-input form-select" {...register('product')}>
                    <option value="">Select a product category</option>
                    {PRODUCT_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="quantity">Approximate Quantity</label>
                    <input
                      id="quantity" type="text"
                      className="form-input"
                      placeholder="e.g. 500 kg, 200 litres"
                      {...register('quantity')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">City / State</label>
                    <input
                      id="city" type="text"
                      className="form-input"
                      placeholder="Delivery location"
                      {...register('city')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message" rows={4}
                    className="form-input form-textarea"
                    placeholder="Describe your project, application area, or any specific requirements..."
                    {...register('message')}
                  />
                </div>

                <button
                  type="submit"
                  className="contact__submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><span className="contact__spinner" /> Sending...</>
                  ) : (
                    '🚀 Submit Enquiry'
                  )}
                </button>

                <p className="contact__form-note">
                  🔒 We never share your information with third parties.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
