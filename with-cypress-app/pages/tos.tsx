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
            <title>Terms of Service - ACLD</title>
            <meta name="description" content="Usage of the ACLD website and services is subject to the terms of service and privacy policy." />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <noscript>Javascript is disabled or not supported. Please re-enable JavaScript or use a supported browser to view.</noscript>
         <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 1.5 }} >
            <div className={styles.main_color_section}>
               <HeaderComponent />
               <div className={styles.header_text}>
                  <h1>Terms of Service</h1>
                  <h4>These terms of service and privacy policy govern if and how your data is treated and your rights with regard to use of the services. By using any of the services and/or this website you are agreeing to the most up-to-date version of these policies. Please read them carefully.</h4>
                  <p>Terms last updated: 11/13/2023</p>
               </div>
            </div>
            <div className={styles.tos}>
               <h4>Terms of Service</h4>
               <p>
                  For the purposes of the following documents, "service" or "services" is defined as any program or website that I create and/or operate that is available for public use, including but not limited to this website and the discord bots. I do not claim ownership of any tools that I use to create the services, except when explicitly defined. Some of the services operate through Discord, which I do not own. Discord's TOS is available on their website.<br></br><br></br>

                  None of the services are guaranteed uptime. I (and the server's provider) reserve the ability to take my servers and/or services offline without notice and without any expectation of return time. There is no compensation available, and I provide no warranty or guarantee of service.<br></br><br></br>

                  You cannot use the services to cause harm in any way, nor can you attempt to cause harm to the services themselves. You also cannot use the services to perform illegal activites. I am not responsible for any harm, damage or illegal activities done while using the services.<br></br><br></br>

                  From time to time I may gather any user feedback or implement any changes to any service as a result of bug reports or user feedback. Unless I state otherwise, there is no compensation or credit available for users who bring bugs to my attention, submit feedback, or otherwise contribute to development of the services in any way.<br></br><br></br>

                  Code for some of the services may be made available online by me for any reason. This does NOT allow you to distribute this code for yourself, claim credit for it in any way, or run it privately on your own machine, unless I explicitly state so. I may also update the code, or these terms, at any time without prior notice.<br></br><br></br>

                  I reserve the right to remove your access to the services at any time for any reason, including breach of any of the terms. Usage of your data on any of the services is governed by the privacy policy, located below the terms of service on this page.
               </p>
               <h4>Privacy Policy</h4>
               <p>
                  For the purposes of the following document, "data" is defined as any data submitted to the services by users, or data collected about use of the services during normal operations. For the purposes of the following document, "operation" is defined as any interaction or command you run with any of the services. An operation starts when you first run the interaction or command and ends after the services have sent the final message of the operation's response and closed the request.<br></br><br></br>

                  During normal operations, some data is required for user interactions with the services. This may include (but is not limited to): your Discord username, your Discord tag, your Discord ID, or messages you send to the services. Unless otherwise stated, this data is never written to permanent storage, and is immediately deleted or marked for overwriting after it is no longer used by the operation.<br></br><br></br>

                  During normal operation, some data is collected for diagnostics when the services are used. This may include (but is not limited to): time of request, type of request, or response given. This data is anonymously recorded, stored and is used for improvement of the services. The services do not store any kind of identifying information and cannot trace operations back to the user who ran them once the operation completes. This anonymous data is stored in logs that are periodically reviewed and cleared by the developer of this application. No other person has access to the data.
               </p>
            </div>
            <FooterComponent />
         </motion.div>
      </div>
   )
}
