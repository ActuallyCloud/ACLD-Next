import Image from "next/image";
import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

export default function Home() {
  return (
    <div className="animate-fadein">
      <div className="cursor-default flex p-4 text-center min-h-screen items-center mx-auto justify-center bg-gradient-to-tl from-gray-800 to-slate-800">
        <div className="p-6 py-8 sm:py-16 max-w-6xl">
          <Image src="/pfp_fullsize_no_bg.png" className="mx-auto h-auto w-2/3 md:w-96 animate-rotate" width={512} height={512} alt="logo"/>
          <h1 className="text-3xl md:text-5xl p-4">Looking for Aura?</h1>
          <h3 className="text-lg md:text-2xl p-4">You&apos;ve come to the right place. My website hosts information about my services, my codebase demos, and information about getting in touch.</h3>
          <Link href="#down" className="cursor-default">
            <Image src="/chevron.png" className="mx-auto m-4 p-4 w-12 md:w-16 opacity-100 hover:opacity-70 z-0 animate-fadein-slow cursor-pointer" width={30} height={30} alt="logo"/>
          </Link>
        </div>
      </div>
      <div className="text-center p-8 md:py-16 max-w-7xl mx-auto cursor-default" id="down">
        <h2 className="text-2xl lg:text-3xl">Some of my work</h2>
        <div className="grid grid-cols-1 gap-8 md:gap-12 p-4 py-6 md:py-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl lg:text-2xl">Wellness</h3>
            <p className="text-md py-2 lg:text-lg">I developed a mental health application using Node.js and external APIs to serve media to over 450 communities worldwide, with the goal of improving mental health. Alongside this application, I deployed storage and web servers, and a community hub for users to give feedback and report problems quickly. </p>
            <Link href="/wellness" className="cursor-pointer text-blue-500 lg:text-lg">Learn more about Wellness</Link>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl">Quizpedia</h3>
            <p className="text-md py-2 lg:text-lg">Previously, quizmasters had to pick out questions and assemble sheets of them manually. I&apos;m managing a team that&apos;s building and deploying a robust full-stack cloud solution with Azure that automates preparations for quiz bowl events for quizmasters.</p>
            <Link href="https://quizbowl.oregonstate.edu" target="_blank" className="cursor-pointer text-blue-500 lg:text-lg">Check out Quizpedia</Link>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl">ACLD</h3>
            <p className="text-md py-2 lg:text-lg">I created this website using Next.js and TailwindCSS, and currently host it on the Azure Cloud Platform to display my online presence and serve as a frontend webpage for some of my other services.</p>
            <Link href="https://github.com/ActuallyCloud/ACLD-Next" target="_blank"  className="cursor-pointer text-blue-500 lg:text-lg">View this website&apos;s source code</Link>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl">Stroogle</h3>
            <p className="text-md py-2 lg:text-lg">I collaborated with a team to design an intuitive interface for a media streaming app that allowed users to find what they wanted faster, across multiple platforms at once.</p>
            <Link href="/gallery#stroogle" className="cursor-pointer text-blue-500 lg:text-lg">View the concepts for Stroogle</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
