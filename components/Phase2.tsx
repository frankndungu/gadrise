'use client'

import { motion } from 'framer-motion'
import styles from './Phase2.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const specs = [
  'Four bedrooms, master en-suite',
  '1/8-acre individual plot',
  'Champion-grade sports courts',
  'Residents-only gymnasium',
  'Premium co-working spaces',
  "Children's playground",
  '24/7 gated security',
  'Professional property management',
]

const streams = [
  { num: '01', title: 'Capital Appreciation', desc: "Eldoret is Kenya's fastest-growing city. Early buyers enter before values compound — positioned in the growth corridor, before prices triple." },
  { num: '02', title: 'Rental Income', desc: 'Our management program places vetted tenants, collects rent, and deposits income directly to you — whether you are in Eldoret or abroad.' },
  { num: '03', title: 'Amenity Revenue', desc: 'Franchised commercial spaces within the estate generate revenue that actively reduces your monthly service charges.' },
]

export default function Phase2() {
  return (
    <section className={styles.section} id="phase2">
      <div className={styles.header}>
        <div className="section-rule" style={{ background: 'var(--gold-dark)' }} />
        <div className="section-label" style={{ color: 'var(--gold-dark)' }}>
          Phase 2 &mdash; Malel Residence
        </div>
      </div>

      <div className={styles.banner}>
        <span>Street-level render — Malel Residence, contemporary maisonettes, palm-lined road</span>
      </div>

      <div className={styles.content}>
        <motion.div className={styles.left} {...fadeUp(0)}>
          <div className="section-rule" style={{ background: 'var(--gold-dark)' }} />
          <h2 className={`${styles.heading} serif`}>
            49 Four-Bedroom<br />Maisonettes. Resort<br />Living That Earns.
          </h2>
          <p className={styles.body}>
            Malel Residence is a master-planned gated community of 49 premium four-bedroom
            maisonettes on 1/8-acre plots — combining the security of a gated estate with
            resort-style amenities and a professional property management program.
          </p>
          <p className={styles.body}>
            Priced from KES 25 million. Mortgage-friendly with flexible payment plans.
            Only 49 units — no phase three, no expansion.
          </p>
          <ul className={styles.specs}>
            {specs.map(s => <li key={s}>{s}</li>)}
          </ul>
          <div className={styles.ctaRow}>
            <a href="#contact" className="btn-gold btn-sm" style={{ background: 'var(--gold-dark)', color: 'var(--white)' }}>
              Reserve Your Maisonette &rarr;
            </a>
            <a href="/brochures/malel-residence-phase2.pdf" download className="btn-outline btn-sm">
              Download Brochure &darr;
            </a>
          </div>
        </motion.div>

        <motion.div className={styles.imgs} {...fadeUp(0.2)}>
          <div className={`${styles.imgBox} ${styles.imgBoxLarge}`}>
            <span>Exterior render — contemporary architecture, stone cladding</span>
          </div>
          <div className={styles.imgBox}>
            <span>Interior render — open plan living room, premium finishes</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.incomeBand}>
        <motion.div className={styles.incomeHead} {...fadeUp(0)}>
          <div className="section-rule" style={{ margin: '0 auto 16px' }} />
          <div className="section-label">The Investment Case</div>
          <h2 className={`${styles.incomeHeading} serif`}>
            Three Revenue Streams.<br />One Decision.
          </h2>
        </motion.div>

        <div className={styles.incomeCols}>
          {streams.map((s, i) => (
            <motion.div key={s.num} className={styles.incomeCol} {...fadeUp(i * 0.1)}>
              <div className={`${styles.incomeNum} serif`}>{s.num}</div>
              <div className={`${styles.incomeTitle} serif`}>{s.title}</div>
              <p className={styles.incomeDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.diasporaCard} {...fadeUp(0)}>
          <div className={styles.diasporaLeft}>
            <div className="section-label" style={{ marginBottom: 16 }}>For the Diaspora</div>
            <h3 className={`${styles.diasporaTitle} serif`}>
              Your Home Works When You&apos;re Here — and When You&apos;re Away.
            </h3>
            <p className={styles.diasporaBody}>
              December: your family gathers at Malel. January: you return abroad — our management
              places vetted tenants, rental income deposits directly to you. When you return,
              it is yours again, immediately.
            </p>
          </div>
          <div className={styles.diasporaRight}>
            <div className={styles.priceLabel}>Starting From</div>
            <div className={`${styles.price} serif`}>KES 25 Million</div>
            <p className={styles.diasporaBody}>
              Four-bedroom maisonette on 1/8-acre in a master-planned resort community.
              Mortgage-friendly. Flexible payment plans.
            </p>
            <a href="#contact" className="btn-outline btn-sm" style={{ marginTop: 8, display: 'inline-block' }}>
              Contact Us &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
