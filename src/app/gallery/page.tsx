import Image from "next/image";
import Link from "next/link";
import GalleryProject from "../components/galleryproject";
import dotenv from 'dotenv';
dotenv.config();

export default function Gallery() {
    return (
        <div className="max-w-7xl p-4 py-8 mx-auto cursor-default animate-fadein">
            <div className="p-8 sm:pt-24 text-center">
                <h1 className="text-2xl sm:text-4xl">Welcome to my gallery!</h1>
                <p className="text-lg md:text-xl p-4">View my interface concepts and designs here. Any questions? Just <Link href="/contact" className="text-blue-600">contact me</Link>.</p>
            </div>
            <hr id="stroogle" className="opacity-25"/>
            <GalleryProject name="Stroogle" desc="I collaborated with a team of other students to design an intuitive interface for a media streaming app that allowed users to find what they wanted faster, across multiple platforms at once."/>
            <div className="mx-auto grid grid-cols-1 place-content-evenly sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
                <div>
                    <Image src="/ux/stroogle/s1.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/stroogle/s2.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/stroogle/s3.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/stroogle/s4.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/stroogle/s5.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
            </div>
        
            <hr id="wellness" className="opacity-25"/>
            <GalleryProject name="Wellness" desc="I created a Discord bot that serves cute images and aims to help mental health, along with a backend solution to host both the bot itself and the database that stores crucial information for its operation. Wellness currently serves over 500 unique communities." link="/wellness" />
            <div className="mx-auto grid grid-cols-1 place-content-evenly justify-center md:grid-cols-2 gap-8 p-8">
                <div>
                    <Image src="/ux/wellness/w1.png" alt="wellness" width={600} height={800} className="border-2 border-neutral-400 rounded-xl mx-auto w-full" />
                </div>
                <div>
                    <Image src="/ux/wellness/w2.png" alt="wellness" width={600} height={800} className="border-2 border-neutral-400 rounded-xl mx-auto w-full" />
                </div>
                <div>
                    <Image src="/ux/wellness/w3.png" alt="wellness" width={600} height={800} className="border-2 border-neutral-400 rounded-xl mx-auto w-full" />
                </div>
            </div>

            <hr id="linker" className="opacity-25"/>
            <GalleryProject name="Linker" desc="I designed a draft UI interface for a new type of messaging app that alleviates the common problem of misdials and is easier to read." link="https://www.figma.com/proto/Hg8flxttRtx0qVc2obWXg9/Linker?type=design&node-id=1-2&t=qIjmIdJUaqJGnCbM-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" />
            <div className="mx-auto grid grid-cols-1 place-content-evenly sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
                <div>
                    <Image src="/ux/linker/l1.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/linker/l3.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/linker/l4.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/linker/l5.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/linker/l6.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
                <div>
                    <Image src="/ux/linker/l8.png" alt="linker" width={400} height={600} className="border-2 border-neutral-400 rounded-xl mx-auto" />
                </div>
            </div>
        </div>
    )
}