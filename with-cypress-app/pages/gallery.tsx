import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Gallery() {
   return (
      <div>
         <Head>
            <title>Gallery - ACLD</title>
            <meta name="description" content="See a gallery of past UI/UX designs and software that I've created!" />
            <link rel="icon" href="/favicon.ico?" type="image/x-icon" />
         </Head>
         <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 0.5 }} >
            <HeaderComponent page={"G"} />
            <motion.div
               className={styles.midbound}
               initial={{ opacity: 0.5, transform: "translateY(5px)" }}
               animate={{ opacity: 1, transform: "translateY(0px)" }}
               exit={{ opacity: 0.5, transform: "translateY(5px)" }}
               transition={{ ease: "easeOut", duration: 0.5 }} >
               <h2>UX Design Examples</h2>
               <h3>Stroogle</h3>
               <p>I worked in a group to create a design concept for a streaming app that allows you to search across multiple streaming services at once. The goal was to design an inclusive and intuitive interface.</p>
               <div className={styles.indexflexdiv}>
                  <img src="/imgs/ux/stroogle/s1.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/stroogle/s2.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/stroogle/s3.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/stroogle/s4.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/stroogle/s5.png" className={styles.galleryimgv}></img>
               </div>
               <h3>Linker</h3>
               <p>I designed a draft UI interface for a new type of messaging app that alleviates the common problem of misdials and is easier to read. <a href={process.env.figma_linker} target="_blank">Try the Figma prototype here</a>.</p>
               <div className={styles.indexflexdiv}>
                  <img src="/imgs/ux/linker/l1.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/linker/l2.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/linker/l5.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/linker/l6.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/linker/l7.png" className={styles.galleryimgv}></img>
               </div>
               <h3>Wellness</h3>
               <p>I created a Discord bot that serves cute images and aims to help mental health, along with a backend solution to host both the bot itself and the database that stores crucial information for its operation. Wellness currently serves over 460 unique communities. <a href="/wellness">Learn more about Wellness here</a>.</p>
               <div className={styles.indexflexdiv}>
                  <img src="/imgs/ux/wellness/w1.png" className={styles.galleryimgh}></img>
                  <img src="/imgs/ux/wellness/w2.png" className={styles.galleryimgh}></img>
                  <img src="/imgs/ux/wellness/w3.png" className={styles.galleryimgh}></img>
               </div>
               <h3>Navvy</h3>
               <p>I worked on a draft for a concept navigation app that makes it easier to share your location, with just one tap from the main menu. Should you need it, navigation is just a tap away.</p>
               <div className={styles.indexflexdiv}>
                  <img src="/imgs/ux/navvy/n1.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/navvy/n2.png" className={styles.galleryimgv}></img>
                  <img src="/imgs/ux/navvy/n3.png" className={styles.galleryimgv}></img>
               </div>
               <p className={styles.tinytext}>
                  All company logos and images are trademarks of their respective companies. I claim no ownership over other companies logos or icons.<br></br> All names are fake - any references to real people or real events are coincedence. Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com">flaticon.com</a>
               </p>
            </motion.div>
            <FooterComponent />
         </motion.div>
      </div>
   )
}
