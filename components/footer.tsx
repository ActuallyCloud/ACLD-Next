import Link from 'next/link'
import React from 'react'
import styles from '../styles/hf.module.css'
import { motion } from 'framer-motion';

export default function FooterComponent() {
  return (
    <motion.div
      className={styles.footerdiv}
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      exit={{ opacity: 0, transform: "translateY(10px)" }}
      transition={{ ease: "easeOut", duration: 0.5 }} >
      <p>Usage of my website or services is governed by my <a href="/tos">Terms Of Service and Privacy Policy</a>. For more info, <a href="/contact">contact me</a>.<br></br>
      Website designed and hosted by me using Next.js, a framework for React. For service status, <a href={process.env.status}>visit the ACLD Instatus page</a>. Thanks for visiting!</p>
    </motion.div>
  )
}
