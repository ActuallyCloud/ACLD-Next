import Image from "next/image";
import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

export default function Wellness() {
    const addWellness = process.env.wellnessadd;

    return (
    <div>
        <div className="cursor-default flex p-4 text-center min-h-screen items-center mx-auto justify-center bg-gradient-to-tl from-green-700 to-cyan-800">
            <div className="p-6 py-8 sm:py-16 max-w-7xl animate-fadein">
                <Image src="/wellness.png" priority={true} className="mx-auto h-auto w-2/3 md:w-96 animate-spin-slow" width={384} height={384} alt="logo"/>
                <h1 className="text-3xl md:text-5xl p-4">Cats, dogs, and much more</h1>
                <h3 className="text-lg md:text-2xl p-2 md:p-4 pb-8 md:pb-12">Wellness serves amazing content to help boost the mental health of users.</h3>
                { addWellness && 
                    <Link href={addWellness} className="text-xl border-2 md:border-4 rounded-xl p-3 px-8 md:px-12 hover:bg-white/25 duration-100">Add Wellness</Link>
                }
                <Link href="#down" className="cursor-default">
                    <Image src="/chevron.png" priority={true} className="mx-auto m-6 p-4 w-12 md:w-16 opacity-100 hover:opacity-70 z-0 animate-fadein-slow cursor-pointer" width={30} height={30} alt="logo"/>
                </Link>
            </div>
        </div>
        <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" id="down">
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">If it&apos;s cute, it&apos;s here</h2>
                <p className="md:text-lg">Wellness serves more than 12 different types of animals and 2 types of foods. Don&apos;t see what you like? You can request it to be added on the <Link href="/contact" className="text-blue-500">community discord</Link>.</p>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">Connecting you with others</h2>
                <p className="md:text-lg">Wellness helps you foster communication with other server members, get in touch with support groups, and do breathing exercises when you need to.</p>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">Involve your friends</h2>
                <p className="md:text-lg">Remember all those image types mentioned before? You can send them to friends too - without alerting anyone else of a thing.</p>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">Set boundaries</h2>
                <p className="md:text-lg">Don&apos;t want people to spam you, or to receive messages from Wellness at all? That&apos;s okay! You can disable messaging functionality with a simple command.</p>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">Verified and secure</h2>
                <p className="md:text-lg">Wellness is part of Discord&apos;s verified bot program, and your message contents are not read or stored by the bot. Diagnostic logs are anonymous, kept minimal, and only stored for short periods.</p>
            </div>
        </div>
        <div className="text-center px-8 sm:pt-4 pb-8 md:pb-12">
            <h2 className="text-2xl md:text-3xl">Commands</h2>
            <h3 className="text-xl md:text-2xl p-6 md:p-12">Images</h3>
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-8 text-neutral-400">
                <h3 className="text-lg md:text-xl capitalize">bear</h3>
                <h3 className="text-lg md:text-xl capitalize">bird</h3>
                <h3 className="text-lg md:text-xl capitalize">cake</h3>
                <h3 className="text-lg md:text-xl capitalize">cat</h3>
                <h3 className="text-lg md:text-xl capitalize">dog</h3>
                <h3 className="text-lg md:text-xl capitalize">donut</h3>
                <h3 className="text-lg md:text-xl capitalize">fish</h3>
                <h3 className="text-lg md:text-xl capitalize">fox</h3>
                <h3 className="text-lg md:text-xl capitalize">hedgehog</h3>
                <h3 className="text-lg md:text-xl capitalize">koala</h3>
                <h3 className="text-lg md:text-xl capitalize">monkey</h3>
                <h3 className="text-lg md:text-xl capitalize">otter</h3>
                <h3 className="text-lg md:text-xl capitalize">owl</h3>
                <h3 className="text-lg md:text-xl capitalize">panda</h3>
                <h3 className="text-lg md:text-xl capitalize">penguin</h3>
                <h3 className="text-lg md:text-xl capitalize">rabbit</h3>
                <h3 className="text-lg md:text-xl capitalize">seal</h3>
                <h3 className="text-lg md:text-xl capitalize">sloth</h3>
                <h3 className="text-lg md:text-xl capitalize">wolf</h3>
            </div>
            <h3 className="text-xl md:text-2xl p-6 md:p-12">More Commands</h3>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-neutral-400">
                <div>
                    <h3 className="text-lg md:text-xl capitalize p-2 text-neutral-300">breathe</h3>
                    <p>Helps you regulate your breathing with a simple breathing exercise.</p>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl p-2 text-neutral-300">DMs</h3>
                    <p>Adjust your preferences for receiving images through direct messages.</p>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl capitalize p-2 text-neutral-300">help</h3>
                    <p>Not sure where to start? Get help using Wellness.</p>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl capitalize p-2 text-neutral-300">hotlines</h3>
                    <p>If you ever need to talk to someone, that information is always available to you.</p>
                </div>
            </div>
        </div>
        <div className="bg-neutral-800 p-8 pb-12">
            <div className="mx-auto max-w-7xl text-center md:p-4">
                <h3 className="text-xl md:text-2xl">Still not sure?</h3>
                <p className="text-neutral-300 p-2 pb-8 md:pb-12">Wellness plays nice with other bots and is super easy to add or remove. And if you have any questions, suggestions, or issues, <Link href="/contact" className="text-blue-500">please don&apos;t hesitate to reach out</Link>.</p>
                { addWellness && 
                    <Link href={addWellness} className="text-xl border-2 rounded-xl p-3 px-8 md:px-12 hover:bg-white/25 duration-100">Try Wellness</Link>
                }
            </div>
        </div>
    </div>
    )
}