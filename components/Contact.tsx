'use client'

import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className="section-rule" style={{ margin: '0 auto 16px' }} />
        <div className="section-label" style={{ textAlign: 'center' }}>Get in Touch</div>

        <motion.h2 className={`${styles.heading} serif`} {...fadeUp(0)}>
          Reserve Your Place<br />in Malel
        </motion.h2>

        <motion.p className={styles.sub} {...fadeUp(0.1)}>
          Limited availability across both phases. Call or email us to schedule a private
          estate tour or request detailed pricing and payment plans.
        </motion.p>

        <motion.div className={styles.btns} {...fadeUp(0.2)}>
          <a href="tel:+254718277777" className="btn-gold">Call +254 718 277 777</a>
          <a href="mailto:info@gadrisepropertieslimited.com" className="btn-outline">Email Us</a>
        </motion.div>

        <motion.div className={styles.details} {...fadeUp(0.3)}>
          <div className={styles.detail}>
            <div className={styles.detailLabel}>Phone</div>
            <a href="tel:+254718277777" className={styles.detailVal}>+254 718 277 777</a>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailLabel}>Email</div>
            <a href="mailto:info@gadrisepropertieslimited.com" className={`${styles.detailVal} ${styles.detailValSm}`}>
              info@gadrisepropertieslimited.com
            </a>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailLabel}>Location</div>
            <div className={`${styles.detailVal} ${styles.detailValSm}`}>Elgon View, Eldoret, Kenya</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
