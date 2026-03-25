'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const anim = (delay: number = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} />
      <div className={styles.rightPanel}>
        <span>Aerial render — Malel Heights gated community at golden hour</span>
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div className={styles.eyebrow} {...anim(0.1)}>
          <div className={styles.rule} />
          <span className={styles.tag}>Eldoret, Kenya &middot; Uasin Gishu</span>
        </motion.div>

        <motion.h1 className={`${styles.headline} serif`} {...anim(0.25)}>
          Where<br />Heritage<br />Meets<br />Tomorrow
        </motion.h1>

        <motion.p className={styles.sub} {...anim(0.4)}>
          Gadrise Properties Limited presents two landmark developments in
          Eldoret&apos;s premier growth corridor — built for discerning homeowners
          and sophisticated investors.
        </motion.p>

        <motion.div className={styles.btns} {...anim(0.55)}>
          <a href="#phase1" className="btn-gold">Malel Heights &mdash; Phase 1</a>
          <a href="#phase2" className="btn-outline">Malel Residence &mdash; Phase 2</a>
        </motion.div>

        <motion.div className={styles.stats} {...anim(0.7)}>
          <div className={styles.stat}>
            <div className={`${styles.statVal} serif`}>56</div>
            <div className={styles.statLabel}>Exclusive Estates</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={`${styles.statVal} serif`}>49</div>
            <div className={styles.statLabel}>Premium Maisonettes</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={`${styles.statVal} serif`}>KES 25M</div>
            <div className={styles.statLabel}>Starting Price</div>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollLine} />
    </section>
  )
}
