import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

export default function PlanetRedwood() {
    return (
        <div className="animate-fadein">
            <div className="cursor-default flex p-4 text-center min-h-96 items-center mx-auto justify-center bg-gradient-to-tr from-red-800 to-purple-800">
                <div className="max-w-7xl pt-12 lg:pt-8 p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl">Welcome, Planet Redwood players!</h1>
                    <p className="md:text-lg p-4">After 10 years of service, the original Planet Redwood was shut down on April 2024. However, I&apos;ve used the last available world and plugin files available on Dave&apos;s website to remake Planet Redwood and host it on my own servers.</p>
                </div>
            </div>
            <div className="cursor-default p-4 md:p-8 max-w-7xl mx-auto text-center">
                <h2 className="pb-4 text-xl md:text-2xl">Server Details</h2>
                <p className="p-4 md:text-lg"><b>IP:</b> mc.acld.me - <b>Version:</b> 1.18.2 - <b>Having trouble connecting?</b> Try adding the port &quot;25533&quot; to the end of the URL (mc.acld.me:25533)</p>
                <p className="p-4 md:text-lg">This minecraft server is based off of the original Planet Redwood server as closely as possible using the last available world and plugin files. The server is running the same original plugins that were written by Dave and previous students. The server also abides by largely the same (although simplified) rules and policies that Dave used when creating Planet Redwood:</p>
                <ul className="p-4 pl-8 md:text-lg text-left list-disc">
                  <li className="p-2 md:text-lg">Do not intentionally cause the server to lag, crash, or otherwise malfunction.</li>
                  <li className="p-2 md:text-lg">Do not use hacks, server exploits, or glitches.</li>
                  <li className="p-2 md:text-lg">Always be respectful and courteous. No griefing or trolling.</li>
                  <li className="p-2 md:text-lg">This server abides by the three strike rule: first offense warning, second offense temp ban, third offense permanent ban.</li>
               </ul>
               <p className="p-4 md:text-lg">In the spirit of keeping the server open to those who may have a different account or username than when playing here, whitelisting will not be used on this server. However, offenders for these rules (as well as anyone who was banned from the previous Planet Redwood) may continue to be banned on this server by IP, account, or both.</p>
               <p className="p-4 md:text-lg">The original Planet Redwood had a total of 25 slots available for players to join. However, due to a limited number of computing resources, this server&apos;s number of available slots may be smaller. I don&apos;t anticipate this to be an issue, but is something to note. I am also a busy person, so I make no promises towards updating the server to any version beyond 1.18.2.</p>
               <p className="p-4 md:text-lg">Found a problem or need help? <Link href="/contact" className="text-blue-500">Get in touch</Link>.</p>
               <h3 className="p-4 text-lg md:text-xl">More Fun Things</h3>
               <ul className="p-4 pl-8 md:text-lg text-left list-disc">
                  <li className="p-2 md:text-lg">While the original Planet Redwood website is still online, <Link href="http://planetredwood.org" className="text-blue-500">you can view that here</Link>.</li>
                  <li className="p-2 md:text-lg">You can also find <Link href="http://wonderdave.com" className="text-blue-500">Dave&apos;s personal website here</Link>.</li>
                  <li className="p-2 md:text-lg">For nostalgia purposes, <Link href="/PlanetRedwoodFeatures.pdf" className="text-blue-500" target="_blank">a copy of the original Planet Redwood info sheet is available here</Link>.</li>
               </ul>
            </div>
        </div>
    )
}