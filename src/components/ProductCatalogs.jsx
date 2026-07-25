import React from 'react'
import { motion } from 'framer-motion'
import {
  HiDownload, HiDocumentText, HiClock,
} from 'react-icons/hi'
import { GiWatch, GiSofa, GiMirrorMirror, GiStonePath } from 'react-icons/gi'
import { MdOutlineKitchen } from 'react-icons/md'
import SectionBanner from './SectionBanner'
import { VP } from './AnimationUtils'
import './ProductCatalogs.css'

const CATALOGS = [
  {
    id: 'watches',
    Icon: GiWatch,
    title: 'Watches',
    description: 'Explore our complete collection of analog and luxury timepieces. Premium brands, bulk orders, and retail export worldwide.',
    pdfFile: '/Watch.pdf',
    pdfSize: '2.4 MB',
    color: '#f97316',
    available: true,
  },
  {
    id: 'furniture',
    Icon: GiSofa,
    title: 'Furniture',
    description: 'Handcrafted living room, office, and custom wooden furniture. Modern designs and traditional craftsmanship for global markets.',
    pdfFile: '/Furniture.pdf',
    pdfSize: '3.1 MB',
    color: '#a855f7',
    available: true,
  },
  {
    id: 'sinks',
    Icon: MdOutlineKitchen,
    title: 'Sinks',
    description: 'Premium quartz and stainless steel kitchen sinks — available in branded (Quartz) and non-branded variants for wholesale and OEM buyers.',
    pdfFile: '/Quartz Sink Catalogue without logo.pdf',
    pdfSize: null,
    color: '#06b6d4',
    available: true,
  },
  {
    id: 'mirrors',
    Icon: GiMirrorMirror,
    title: 'Mirrors',
    description: 'Fancy, decorative and frameless mirrors for residential and commercial projects. Premium finishes for luxury interiors.',
    pdfFile: '/Mirror.pdf',
    pdfSize: null,
    color: '#22c55e',
    available: true,
  },
  {
    id: 'marble-granite',
    Icon: GiStonePath,
    title: 'Marble & Granite',
    description: 'Premium natural marble and granite slabs, tiles and cut-to-size pieces sourced from top quarries for global export.',
    pdfFile: '/Marble.pdf',
    pdfSize: null,
    color: '#be9b6e',
    available: true,
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function ProductCatalogs() {
  const handleDownload = (pdfFile, catalogTitle) => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = pdfFile
    link.download = `TREEN_${catalogTitle}_Catalog.pdf`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="catalogs" className="catalogs-section">
      <SectionBanner
        tag="Product Catalogs"
        title={
          <>
            Download Our <em>Export Catalogs</em>
          </>
        }
        subtitle="Browse detailed product specifications, pricing, and export information. Available in PDF format for offline reference."
        theme="orange"
        align="center"
        breadcrumb={[{ label: 'Catalogs' }]}
      />

      <div className="section catalogs-body">
        <div className="container">
          {/* Info strip */}
          <motion.div
            className="catalogs-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <HiDocumentText size={20} className="catalogs-info__icon" />
            <span>
              All catalogs include product images, specifications, export
              pricing, and bulk order information.
            </span>
          </motion.div>

          {/* Catalog cards grid */}
          <div className="catalogs-grid">
            {CATALOGS.map((catalog, i) => (
              <motion.div
                key={catalog.id}
                className={`catalog-card${!catalog.available ? ' catalog-card--unavailable' : ''}`}
                style={{ '--catalog-color': catalog.color }}
                variants={cardVariant}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                whileHover={
                  catalog.available
                    ? { y: -8, transition: { duration: 0.25 } }
                    : {}
                }
              >
                {/* Top accent bar */}
                <div className="catalog-card__bar" />

                {/* Icon */}
                <div className="catalog-card__icon-wrap">
                  <catalog.Icon size={36} className="catalog-card__icon" />
                </div>

                {/* Content */}
                <h3 className="catalog-card__title">{catalog.title}</h3>
                <p className="catalog-card__desc">{catalog.description}</p>

                {/* Footer */}
                {catalog.available ? (
                  <div className="catalog-card__footer">
                    <div className="catalog-card__meta">
                      <HiDocumentText size={14} />
                      <span>PDF · {catalog.pdfSize}</span>
                    </div>
                    <motion.button
                      className="catalog-card__btn"
                      onClick={() =>
                        handleDownload(catalog.pdfFile, catalog.title)
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiDownload size={16} />
                      View Products
                    </motion.button>
                  </div>
                ) : (
                  <div className="catalog-card__footer catalog-card__footer--soon">
                    <div className="catalog-card__soon">
                      <HiClock size={16} />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="catalogs-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="catalogs-cta__icon-wrap">
              <HiDocumentText size={28} />
            </div>
            <div className="catalogs-cta__text">
              <h3 className="catalogs-cta__title">
                Need a Custom Catalog or Export Quote?
              </h3>
              <p className="catalogs-cta__sub">
                Our export team can prepare custom product catalogs tailored to
                your requirements, market, and order volume.
              </p>
            </div>
            <a
              href="mailto:info@treenindustries.com"
              className="catalogs-cta__btn"
            >
              Request Custom Catalog
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
