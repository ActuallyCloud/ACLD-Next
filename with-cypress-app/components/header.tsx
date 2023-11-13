import Link from 'next/link'
import React from 'react'
import styles from '../styles/HF.module.css'
import { motion } from 'framer-motion';

export default function HeaderComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      exit={{ opacity: 0, transform: "translateY(-10px)" }}
      transition={{ ease: "easeOut", duration: 0.5 }} >
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.navitem}><a href="/">Home</a></li>
          <li className={styles.navitem}><a href="/contact">Contact</a></li>
          <li className={styles.navitem}><a href="/gallery">Gallery</a></li>
          <li className={styles.navitem}><a href="/wellness">Wellness</a></li>
          <li className={[styles.navitem, styles.outage].join(' ')}><a href="/ext/status">Outage?</a></li>
          
        </ul>
      </nav>
    </motion.div>
  )
}
