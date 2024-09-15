import Image from "next/image";
import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

export default function Wellness() {
    const addWellness = process.env.wellnessadd;

    return (
    <div>
        <div className="cursor-default flex p-4 text-center min-h-screen items-center mx-auto justify-center bg-gradient-to-tl from-green-700 to-cyan-800">
            <div className="p-6 py-8 md:p-8 max-w-7xl animate-fadein">
            <Image src="/wellness.png" className="mx-auto h-auto w-2/3 md:w-96 animate-spin-slow" width={384} height={384} alt="logo"/>
            <h1 className="text-3xl md:text-5xl p-4">Cats, dogs, and much more</h1>
            <h3 className="text-lg md:text-2xl p-2 md:p-4 pb-8 md:pb-12">Wellness serves amazing content to help boost mental health of users.</h3>
            { addWellness && 
                <Link href={addWellness} className="text-xl border-2 rounded-xl p-3 px-8 md:px-12 hover:bg-white/25 duration-100">Add Wellness</Link>
            }
            <Link href="#down" className="cursor-default">
                <Image src="/chevron.png" className="mx-auto m-4 p-4 w-12 md:w-16 opacity-100 hover:opacity-70 z-0 animate-fadein-slow cursor-pointer" width={30} height={30} alt="logo"/>
            </Link>
            </div>
        </div>
        <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">If it's cute, it's here</h2>
                <p className="md:text-lg">Wellness serves more than 12 different types of animals and 2 types of foods. Don't see what you like? You can request it to be added on the <Link href="/contact" className="text-blue-500">community discord</Link>.</p>
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
                <p className="md:text-lg">Don't want people to spam you, or to receive messages from Wellness at all? That's okay! You can disable messaging functionality with a simple command.</p>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl md:text-2xl pb-4">Verified and secure</h2>
                <p className="md:text-lg">Wellness is part of Discord's verified bot program, and your message contents are not read or stored by the bot. Diagnostic logs are anonymous, kept minimal, and only stored for short periods.</p>
            </div>
        </div>
    </div>
    )
}