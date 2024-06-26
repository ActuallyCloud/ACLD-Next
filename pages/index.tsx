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
        <meta name="description" content="The new version of the ACLD website, but created with the React framework Next.js! It took a bit of time but it was well worth learning, it looks amazing and modern!" />
        <meta name="uptime-check" content={"Up! o.0"}/>
        <link rel="icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <noscript>Javascript is disabled or not supported. Please re-enable JavaScript or use a supported browser to view.</noscript>
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{ ease: "easeOut", duration: 1.5 }} >
        <div className={styles.main_color_section}>
          <HeaderComponent page={"H"} />
          <motion.div
            className={styles.mid_align}
            initial={{ opacity: 0, transform: "translateY(25px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(25px)" }}
            transition={{ ease: "easeOut", duration: 1 }} >
            <div className={styles.header_text}>
              <motion.div
                className={styles.logo_holder}
                animate={{ transform: "rotate(270deg)" }}
                transition={{ ease: "easeOut", duration: 3 }} >
                <img src="/imgs/logo_tr.png" className={styles.logo}></img>
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
        </div>
        <div id="works" className={styles.mid_bound}>
          <h2>My Work</h2>
          <div className={styles.indexflexdiv}>
            <div className={styles.textboxes}>
              <h3>Wellness</h3>
              <p>I developed a mental health application using Node.js and external APIs to serve media to over 450 communities worldwide, with the goal of improving mental health. Alongside this application, I deployed storage and web servers, and a community hub for users to give feedback and report problems quickly. <a href="/wellness">View Wellness here</a>.</p>
            </div>
            <div className={styles.textboxes}>
              <h3>Quiz Bowl</h3>
              <p>Previously, quizmasters had to pick out questions and assemble sheets of them manually. I'm managing a team that's building and deploying a robust full-stack cloud solution with Azure that automates preparations for quiz bowl events for quizmasters.</p>
            </div>
            <div className={styles.textboxes}>
              <h3>ACLD</h3>
              <p>I created this website using Next.js, a framework for React, and currently host it on the Azure Cloud Platform to display my online presence and serve as a frontend webpage for some of my other services. <a href={process.env.github_ACLD}>The source code for ACLD is available on my GitHub here</a>. I also keep the source code for the previous static version of this website public, <a href={process.env.github_ACLD_old}>located here</a>.</p>
            </div>
            <div className={styles.textboxes}>
              <h3>Stroogle</h3>
              <p>I collaborated with a team to design an intuitive interface for a media streaming app that allowed users to find what they wanted faster, across multiple platforms at once. <a href="/gallery">Look at the concept designs for Stroogle here</a>.</p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </motion.div>
    </div>
  )
}
