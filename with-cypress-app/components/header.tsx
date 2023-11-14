import Link from 'next/link'
import React from 'react'
import styles from '../styles/hf.module.css'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HeaderComponent(page) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const renderHome = () => {
    if (page.page == "H") {
      return <p>Home</p>;
    } else {
      return <a href="/">Home</a>;
    }
  }

  const renderContact = () => {
    if (page.page == "C") {
      return <p>Contact</p>;
    } else {
      return <a href="/contact">Contact</a>;
    }
  }

  const renderGallery = () => {
    if (page.page == "G") {
      return <p>Gallery</p>;
    } else {
      return <a href="/gallery">Gallery</a>;
    }
  }

  const renderWellness = () => {
    if (page.page == "W") {
      return <p>Wellness</p>;
    } else {
      return <a href="/wellness">Wellness</a>;
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (<motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ ease: "easeOut", duration: 0.4 }} >
        <nav className={styles.navbar} onClick = { toggleVisibility } >
        <ul>
          <li className={styles.navitem}>{renderHome()}</li>
          <li className={styles.navitem}>{renderContact()}</li>
          <li className={styles.navitem}>{renderGallery()}</li>
          <li className={styles.navitem}>{renderWellness()}</li>
          <li className={styles.navitem}><a href="/ext/status">Outage?</a></li>
        </ul>
      </nav>
      </motion.div>)}
    </AnimatePresence>
  )
}
