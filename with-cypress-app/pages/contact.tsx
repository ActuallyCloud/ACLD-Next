import Head from 'next/head'
import styles from '../styles/contact.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import Redirect from '../components/redirect'
import { motion } from 'framer-motion'
import Link from 'next/link'
import '../links/links.js'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Me - ACLD</title>
        <meta name="description" content="Contact me easily, through multiple platforms." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className={styles.main_color_section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }} >
        <HeaderComponent page={"C"} />
        <div className={styles.contactflexdiv}>
          <div className={styles.contactflexitem}>
            <a href={github} target="_blank">
              <img src="/imgs/github.png" className={styles.fleximg}></img>
            </a>
          </div>
          <div className={styles.contactflexitem}>
            <a href="/ext/discord" target="_blank">
              <img src="/imgs/discord.png" className={styles.fleximg}></img>
            </a>
          </div>
          <div className={styles.contactflexitem}>
            <a href="/ext/email">
              <img src="/imgs/email.png" className={styles.fleximg}></img>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
