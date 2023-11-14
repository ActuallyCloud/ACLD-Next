import Head from 'next/head'
import styles from '../styles/contact.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import Redirect from '../components/redirect'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{ ease: "easeOut", duration: 0.5 }} >
        <HeaderComponent page={"C"} />
        <div className={styles.mid_bound}>
          <h3>Find me elsewhere!</h3>
          <div className={styles.contactflexdiv}>
            <div className={styles.contactflexitem}>
              <a href={process.env.github} target="_blank">
                <img src="/imgs/github.png" className={styles.fleximg}></img>
              </a>
              <p>GitHub</p>
            </div>
            <div className={styles.contactflexitem}>
              <a href={process.env.discord} target="_blank">
                <img src="/imgs/discord.png" className={styles.fleximg}></img>
              </a>
              <p>Support Server</p>
            </div>
            <div className={styles.contactflexitem}>
              <a href={process.env.email}>
                <img src="/imgs/email.png" className={styles.fleximg}></img>
              </a>
              <p>Email</p>
            </div>
          </div>
          <div className={styles.mid_bound}>
            <p className={styles.tinytext}>For obvious reasons, all company logos are trademarks of the respective companies. I make no claim of ownership over any of the images on this page, except for my website's favicon.</p>
          </div>
        </div>
        <FooterComponent />
      </motion.div>
    </div>
  )
}
