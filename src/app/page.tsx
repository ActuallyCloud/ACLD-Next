import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex p-4 text-center min-h-screen items-center mx-auto justify-center bg-gradient-to-br from-emerald-800 to-indigo-800">
        <div className="p-4 md:p-8 max-w-6xl">
          <Image src="/pfp_fullsize_no_bg.png" className="mx-auto h-auto w-2/3 sm:w-80" width={256} height={256} alt="logo"/>
          <h1 className="text-2xl md:text-4xl p-4">Looking for Aura?</h1>
          <h3 className="text-lg md:text-2xl p-4">You've come to the right place. My website hosts information about my services, my codebase demos, and information about getting in touch.</h3>
          <Image src="/chevron.png" className="mx-auto m-8 md:w-6" width={20} height={20} alt="logo"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
