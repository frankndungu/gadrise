'use client'

import { motion } from 'framer-motion'
import styles from './Phase1.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const features = [
  { label: 'Security', title: '24/7 Controlled Access', desc: 'Permanent perimeter wall and professional gatehouse security protecting your family and investment around the clock.' },
  { label: 'Infrastructure', title: 'Resort-Grade Roads', desc: 'All-weather internal road network with underground utility corridors and estate-wide powered lighting.' },
  { label: 'Services', title: 'Full Utilities', desc: 'Water and electricity reticulation plus ELDOWAS public sewage connection serving all 56 plots seamlessly.' },
  { label: 'Community', title: 'Approved Residents Only', desc: 'Every homeowner vetted. Every design approved. Standards that preserve collective value for generations.' },
]

export default function Phase1() {
  return (
    <section className={styles.section} id="phase1">
      <div className={styles.header}>
        <div className="section-rule" />
        <div className="section-label">Phase 1 &mdash; Malel Heights</div>
      </div>

      <div className={styles.banner}>
        <span>Aerial overview render — 56 quarter-acre estates, internal road network, gated entrance</span>
        <div className={styles.bannerOverlay}>
          <h3 className="serif">Malel Heights</h3>
          <p>56 Exclusive Quarter-Acre Estates &middot; Eldoret, Kenya</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className="section-rule" />
        <motion.h2 className={`${styles.heading} serif`} {...fadeUp(0)}>
          Quarter-Acre Estates in Eldoret&apos;s<br />Most Prestigious Address
        </motion.h2>

        <motion.div className={styles.twoCol} {...fadeUp(0.1)}>
          <p>Malel Heights is a controlled gated community of 56 serviced quarter-acre plots — intentionally limited to ensure privacy, prestige, and a carefully curated community of distinguished residents. This is not land speculation. This is sophisticated infrastructure, rigorous design controls, and protected long-term value.</p>
          <p>Phase 1A infrastructure development is now underway. Early buyers secure prime plot selection and founding resident status. Complete turnkey maisonette packages are available starting from KES 45 million — curated finishes, approved designs, move-in ready.</p>
        </motion.div>

        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <motion.div key={f.label} className={styles.featCard} {...fadeUp(i * 0.1)}>
              <div className={styles.featLabel}>{f.label}</div>
              <div className={`${styles.featTitle} serif`}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className={styles.split}>
          <motion.div className={styles.splitCol} {...fadeUp(0)}>
            <div className={styles.splitType}>Serviced Plots</div>
            <div className={`${styles.splitTitle} serif`}>Build Your Vision</div>
            <p className={styles.splitDesc}>Purchase a serviced plot and design your maisonette to your personal specifications — interior freedom within protected exterior architectural standards.</p>
            <a href="#contact" className="btn-outline btn-sm">Enquire About Plots &rarr;</a>
          </motion.div>
          <motion.div className={styles.splitCol} {...fadeUp(0.2)}>
            <div className={styles.splitType}>Turnkey Package</div>
            <div className={`${styles.splitTitle} serif`}>Move-In Ready</div>
            <p className={styles.splitDesc}>Complete maisonette and land packages from KES 45 million. Curated finishes, approved architectural designs, ready for immediate occupation.</p>
            <a href="#contact" className="btn-gold btn-sm">Explore Turnkey &rarr;</a>
          </motion.div>
        </div>

        <motion.div className={styles.brochureBar} {...fadeUp(0.1)}>
          <span>Download the full Phase 1 brochure for detailed specifications and plot layout</span>
          <a href="/brochures/malel-heights-phase1.pdf" download className="btn-outline btn-sm">
            Download Brochure &darr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
