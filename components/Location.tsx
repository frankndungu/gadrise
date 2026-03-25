'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import styles from './Location.module.css'

const MapEmbed = dynamic(() => import('./MapEmbed'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map...</div>,
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const proximity = [
  { val: '5 Minutes', label: 'To Eldoret International Airport' },
  { val: '3 Minutes', label: 'To Major Highway Access' },
  { val: 'Minutes Away', label: 'To International Schools and Hospitals' },
  { val: 'Elgon View', label: "Eldoret's Most Prestigious Residential Area" },
]

export default function Location() {
  return (
    <section className={styles.section} id="location">
      <div className={styles.inner}>
        <motion.div {...fadeUp(0)}>
          <div className="section-rule" />
          <div className="section-label">Location</div>
          <h2 className={`${styles.heading} serif`}>
            Eldoret &mdash;<br />The City of Champions
          </h2>
          <p className={styles.sub}>
            Strategic connectivity to major highways, leading schools, quality healthcare,
            and thriving commercial centers. Proximity without congestion.
            Connectivity without compromise.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div {...fadeUp(0)}>
            <MapEmbed />
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            {proximity.map(p => (
              <div key={p.val} className={styles.proxItem}>
                <div className={styles.proxVal}>{p.val}</div>
                <div className={styles.proxLabel}>{p.label}</div>
              </div>
            ))}
            <blockquote className={styles.quote}>
              &ldquo;Eldoret is where Nairobi was 20 years ago &mdash; explosive growth, still affordable.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
