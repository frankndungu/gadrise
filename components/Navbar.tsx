'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} aria-label="Malel Heights home">
          <Image
            src="/gadrise-logo.svg"
            alt="Gadrise Properties Limited"
            width={48}
            height={48}
            priority
          />
        </a>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#phase1">Phase 1</a>
          <a href="#phase2">Phase 2</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className={styles.cta}>Schedule a Viewing</a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={close} aria-label="Close menu">
          &times;
        </button>
        {['#about', '#phase1', '#phase2', '#location', '#contact'].map((href, i) => (
          <a
            key={href}
            href={href}
            onClick={close}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
          </a>
        ))}
        <a href="#contact" className={styles.mobileCta} onClick={close}>
          Schedule a Viewing
        </a>
      </div>
    </>
  )
}
