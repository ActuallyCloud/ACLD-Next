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

      <div className="midalign-page">
        <motion.div 
          className={styles.logo_holder}
          animate={{ transform: "rotate(900deg)" }}
          transition={{ ease: "easeOut", duration: 4 }}>
          <img src="/logo.png" className={styles.logo}></img>
        </motion.div>
      </div>
    </div>
  )
}
