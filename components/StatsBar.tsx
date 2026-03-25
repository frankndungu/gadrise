'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './StatsBar.module.css'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let current = 0
        const step = Math.ceil(target / 40)
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          setCount(current)
          if (current >= target) clearInterval(timer)
        }, 28)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

type Stat =
  | { target: number; value?: never; label: string }
  | { value: string; target?: never; label: string }

const stats: Stat[] = [
  { target: 56, label: 'Exclusive Estates — Phase 1' },
  { target: 49, label: 'Premium Maisonettes — Phase 2' },
  { value: '24/7', label: 'Gated Security' },
  { value: 'KES 25M', label: 'Starting Price' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {stats.map((s, i) => (
        <div key={s.label} className={styles.row}>
          <motion.div
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className={`${styles.num} serif`}>
              {s.target !== undefined ? <Counter target={s.target} /> : s.value}
            </div>
            <div className={styles.label}>{s.label}</div>
          </motion.div>
          {i < stats.length - 1 && <div className={styles.divider} />}
        </div>
      ))}
    </div>
  )
}
