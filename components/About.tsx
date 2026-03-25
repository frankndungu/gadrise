'use client'

import { motion } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <motion.div className={styles.content} {...fadeUp(0)}>
          <div className="section-rule" />
          <div className="section-label">The Developer</div>
          <h2 className={`${styles.heading} serif`}>
            Built on Integrity.<br />Designed for Legacy.
          </h2>
          <p className={styles.body}>
            Gadrise Properties Limited is Eldoret&apos;s foremost premium residential
            developer — delivering gated communities defined by masterful planning,
            rigorous design standards, and protected long-term value.
          </p>
          <p className={styles.body}>
            From serviced land to complete turnkey homes, every Gadrise development
            is a considered investment in architecture, community, and the future of
            Kenya&apos;s fastest-growing city.
          </p>
          <div className={styles.trustRow}>
            {[
              { val: '56', sub: 'Malel Heights\nPlots' },
              { val: '49', sub: 'Malel Residence\nHomes' },
              { val: 'Eldoret', sub: 'City of\nChampions', small: true },
            ].map((t, i) => (
              <div key={i} className={styles.trustItem}>
                <div className={`${styles.trustNum} ${t.small ? styles.small : ''} serif`}>{t.val}</div>
                <div className={styles.trustSub}>{t.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.imgBox} {...fadeUp(0.2)}>
          <span>Developer brand image —<br />site progress or team photography</span>
        </motion.div>
      </div>
    </section>
  )
}
