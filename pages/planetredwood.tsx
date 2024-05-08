import Head from 'next/head'
import styles from '../styles/tos.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from "react-scroll";

export default function TOS() {
   return (
      <div>
         <Head>
            <title>Planet Redwood, on ACLD</title>
            <meta name="description" content="Looking for information on Planet Redwood now that Dave has taken it offline? You'll find it here!" />
            <link rel="icon" href="/favicon.ico?" type="image/x-icon" />
         </Head>
         <noscript>Javascript is disabled or not supported. Please re-enable JavaScript or use a supported browser to view.</noscript>
         <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 1.5 }} >
            <div className={styles.pr_color_section}>
               <HeaderComponent />
               <motion.div
                  className={styles.header_text}
                  initial={{ opacity: 0.5, transform: "translateY(5px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  exit={{ opacity: 0.5, transform: "translateY(5px)" }}
                  transition={{ ease: "easeOut", duration: 0.5 }} >
               
                  <h1>Welcome Planet Redwood Players!</h1>
                  <p>After 10 years of service, the original Planet Redwood was shut down on April 2024. <br />However, I've used the last available world and plugin files available on Dave's website to remake Planet Redwood and host it on my own servers.</p>
               </motion.div>
            </div>
            <div className={styles.pr_text}>
               <h3>Server Details</h3>
               <p>
                  <strong>Server IP: planetredwood.acld.me</strong> - Server Version: 1.18.2 - Server Slots: TBD
               </p>
               <p>
                  This minecraft server is based off of the original Planet Redwood server as closely as possible using the last available world and plugin files. The server is running on Minecraft version 1.18.2, and is using the same plugins as the original server. The server also abides by the largely the same rules and policies that Dave used when creating Planet Redwood. The rules for this server are as follows:
               </p>
               <ul>
                  <li>Do not intentionally cause the server to lag, crash, or otherwise malfunction.</li>
                  <li>Do not use hacks, server exploits, or glitches.</li>
                  <li>Always be respectful and courteous. No griefing or trolling.</li>
                  <li>First offenses for breaking rules result in a warning. Second offenses will result in a ban.</li>
               </ul>
               <p>In the spirit of keeping the server open to those who may have a different account or username than when playing here, whitelisting will not be used on this server. However, offenders for these rules (as well as anyone who was banned from the previous Planet Redwood) may continue to be banned on this server by IP, account, or both.</p>
               <p>The original Planet Redwood had a total of 25 slots available for players to join. However, due to a limited number of computing resources, this server's number of available slots may be smaller. I don't anticipate this to be an issue, but is something to note.</p>
               <h3>More Fun Things</h3>
               <p>Dave has stated that he will keep the original Planet Redwood website online, at least for the forseeable future. <a href="http://planetredwood.org">You can view that here</a>.</p>
               <p>For nostalgia purposes, a copy of the original Planet Redwood info sheet is available <a href="/PlanetRedwoodFeatures.pdf">here</a>.</p>
            </div>
            <FooterComponent />
         </motion.div>
      </div>
   )
}
