import Head from 'next/head'
import styles from '../styles/contact.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import Redirect from '../components/redirect'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Gallery() {
   return (
      <div>
         <Head>
            <title>Gallery - ACLD</title>
            <meta name="description" content="See a gallery of past UI/UX designs and software that I've created!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 0.5 }} >
            <HeaderComponent page={"G"} />
            
         </motion.div>
      </div>
   )
}
