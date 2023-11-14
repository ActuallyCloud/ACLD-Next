import Head from 'next/head'
import styles from '../styles/home.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACLD</title>
        <meta name="description" content="The new version of the ACLD website, but created with the React framework Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <noscript>Javascript is disabled or not supported. Please re-enable JavaScript or use a supported browser to view.</noscript>
      <motion.div
        className={styles.main_color_section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }} >
        <HeaderComponent page={"H"}/>
        <motion.div
          className={styles.mid_align}
          initial={{ opacity: 0, transform: "translateY(25px)" }}
          animate={{ opacity: 1,  transform: "translateY(0px)" }}
          exit={{ opacity: 0, transform: "translateY(25px)" }}
          transition={{ ease: "easeOut", duration: 1 }} >
          <div>
            <motion.div
              className={styles.logo_holder}
              animate={{ transform: "rotate(360deg)" }}
              transition={{ ease: "easeOut", duration: 10 }} >
              <img src="/imgs/logo.png" className={styles.logo}></img>
            </motion.div>
            <h1>Hello!</h1>
            <h3>I'm a fourth-year CS student with a focus in human-computer interaction.</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", delay: 1, duration: 1 }} >
              <Link to="works" smooth>
                <img src="/imgs/down_arrow.png" className={styles.icon}></img>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div id="works" className={styles.mid_bound}>
        <h2>My Work</h2>
        <div className={styles.indexflexdiv}>
          <div className={styles.textboxes}>
            <h3>Wellness</h3>
            <p>I created a Discord bot that serves cute images and aims to help mental health, and deployed and configured the server to host it. <a href="/wellness">View Wellness here</a>.</p>
          </div>
          <div className={styles.textboxes}>
            <h3>Stroogle</h3>
            <p>I worked with a team to design the interface for a streaming application that tracks which services offer which movies and shows. <a href="/gallery">Look at the concept designs for Stroogle here</a>.</p>
          </div>
          <div className={styles.textboxes}>
            <h3>Quiz Bowl</h3>
            <p>For my capstone project, I'm leading a team to create a full-stack software solution that allows quizmasters to access and add questions for their competitions.</p>
          </div>
          <div className={styles.textboxes}>
            <h3>ACLD Website</h3>
            <p>I created this website to host my online presence and serve as a frontend webpage for some of my other services. <a href="/ext/github-acld">The source code for ACLD is available on my GitHub here</a>.</p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
