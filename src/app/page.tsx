import Link from "next/link";
import dotenv from 'dotenv';
import HeaderImg from "./components/headerimg";
dotenv.config();

export default function Home() {
  return (
    <div className="animate-fadein">
      <div className="cursor-default flex p-4 text-center min-h-screen items-center mx-auto justify-center bg-gradient-to-tl from-gray-800 to-slate-800">
        <div className="p-6 py-8 sm:py-16 max-w-6xl">
          <HeaderImg imgURL="/pfp_fullsize_no_bg.png" imgStyling="mx-auto h-auto w-2/3 md:w-96" imgAnimationClass="animate-rotate" imgDimensionW={512} imgDimensionH={512}/>
          <h1 className="text-3xl md:text-5xl p-4">Need help with something?</h1>
          <h3 className="text-lg md:text-2xl p-4">If you're looking for help with Wellness or Planet Redwood, you&apos;ve come to the right place. This website hosts information and resources regarding ACLD services.</h3>
        </div>
      </div>
    </div>
  );
}
