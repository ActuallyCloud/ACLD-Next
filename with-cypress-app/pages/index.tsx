import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACLD</title>
        <meta name="description" content="The new version of the ACLD website, but created with the React framework Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.midalign_page}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} >
            
          <motion.div
            className={styles.logo_holder}
            animate={{ transform: "rotate(900deg)" }}
            transition={{ ease: "easeOut", duration: 4 }} >
            <img src="/logo.png" className={styles.logo}></img>
          </motion.div>

          <h1>Hello!</h1>
          <h3>I'm a fourth-year CS student with a focus in human-computer interaction.</h3>
        </motion.div>
      </div>
    </div>
  )
}
