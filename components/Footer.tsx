'use client'

import Image from 'next/image'
import styles from './Footer.module.css'

const devLinks = [
  { label: 'Malel Heights (Phase 1)', href: '#phase1' },
  { label: 'Malel Residence (Phase 2)', href: '#phase2' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

const contactLinks = [
  { label: '+254 718 277 777', href: 'tel:+254718277777' },
  { label: 'info@gadrisepropertieslimited.com', href: 'mailto:info@gadrisepropertieslimited.com' },
  { label: 'Elgon View, Eldoret, Kenya', href: '#location' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image
              src="/gadrise-logo.svg"
              alt="Gadrise Properties Limited"
              width={64}
              height={64}
              className={styles.logo}
            />
          </div>
          <div className={styles.brandSub}>Malel Heights &middot; Malel Residence</div>
          <div className={styles.brandLoc}>Eldoret, Uasin Gishu, Kenya</div>
          <div className={styles.copy}>&copy; 2026 Gadrise Properties Limited. All rights reserved.</div>
        </div>

        <div>
          <div className={styles.colTitle}>Developments</div>
          <div className={styles.links}>
            {devLinks.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.links}>
            {contactLinks.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Brochures</div>
          <div className={styles.links}>
            <a href="/brochures/malel-heights-phase1.pdf" download>
              Phase 1 Brochure &darr;
            </a>
            <a href="/brochures/malel-residence-phase2.pdf" download>
              Phase 2 Brochure &darr;
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.tagline} serif`}>Where Heritage Meets Tomorrow</div>
        <div className={styles.bottomCopy}>
          &copy; 2026 Gadrise Properties Limited &mdash; Built by Gadrise Digital
        </div>
      </div>
    </footer>
  )
}
