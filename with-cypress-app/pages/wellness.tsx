import Head from 'next/head'
import styles from '../styles/wellness.module.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Wellness() {
   return (
      <div>
         <Head>
            <title>Wellness - ACLD</title>
            <meta name="description" content="Wellness is an integration for your Discord server that can help your members feel better." />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 1.5 }} >
            <div className={styles.main_color_section}>
               <HeaderComponent page={"W"} />
               <motion.div
                  className={styles.mid_align}
                  initial={{ opacity: 0, transform: "translateY(25px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  exit={{ opacity: 0, transform: "translateY(25px)" }}
                  transition={{ ease: "easeOut", duration: 1 }} >
                  <div>
                     <motion.div
                        className={styles.logo_holder}
                        animate={{ transform: "rotate(360deg)" }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }} >
                        <img src="/imgs/wellness.png" className={styles.logo}></img>
                     </motion.div>
                     <h1>Cats, dogs, and much more</h1>
                     <h3>Wellness serves amazing content to help boost mental health of users.</h3>
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeOut", delay: 1, duration: 1 }} >
                        <Link to="features" smooth>
                           <img src="/imgs/down_arrow.png" className={styles.icon}></img>
                        </Link>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
            <div id="features" className={styles.mid_bound}>
               <div className={styles.indexflexdiv}>
                  <div className={styles.indexflexitem}>
                     <h3>If it's cute, it's here.</h3>
                     <p>Wellness serves more than 12 different types of animals and 2 types of foods. Don't see what you like? You can request it to be added on the <a href={process.env.discord}>support discord</a>.</p>
                  </div>
                  <div className={styles.indexflexitem}>
                     <h3>You matter too.</h3>
                     <p>Wellness helps you get in touch with support groups, and do breathing exercises.</p>
                  </div>
                  <div className={styles.indexflexitem}>
                     <h3>Involve your friends.</h3>
                     <p>Remember all those image types mentioned before? If need be, you can send them to a friend - without alerting anyone else of anything.</p>
                  </div>
                  <div className={styles.indexflexitem}>
                     <h3>Set boundaries.</h3>
                     <p>Don't want people to spam you, or to receive messages from Wellness at all? That's okay! You can disable
                        messaging functionality with a simple command.</p>
                  </div>
                  <div className={styles.indexflexitem}>
                     <h3>Verified and secure.</h3>
                     <p>Wellness is part of Discord's official bot verification program, and your message contents are not read by the
                        bot unless otherwise stated.</p>
                  </div>
               </div>
               <h2>Commands</h2>
               <h3>Images</h3>
               <div className={styles.commandsflexdiv}>
                  <div className={styles.commandsflexitem}>
                     <h4>bear</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>bird</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>cake</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>cats</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>dogs</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>donut</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>fish</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>fox</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>hedgehog</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>koala</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>monkey</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>otter</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>owl</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>panda</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>penguin</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>rabbit</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>seal</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>sloth</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>wolf</h4>
                  </div>
               </div>
               <h3>Mental Health</h3>
               <div className={styles.commandsflexdiv}>
                  <div className={styles.commandsflexitem}>
                     <h4>breathe</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>hotlines</h4>
                  </div>
               </div>
               <h3>Help / Settings</h3>
               <div className={styles.commandsflexdiv}>
                  <div className={styles.commandsflexitem}>
                     <h4>dms</h4>
                  </div>
                  <div className={styles.commandsflexitem}>
                     <h4>help</h4>
                  </div>
               </div>
               <h3>What are you waiting for?</h3>
               <p><a href={process.env.wellnessadd} className={styles.button}>Add Wellness</a></p>
            </div>
            <FooterComponent />
         </motion.div>
      </div>
   )
}
