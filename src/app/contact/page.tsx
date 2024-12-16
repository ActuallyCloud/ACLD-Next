import Image from "next/image";
import Link from "next/link";
import dotenv from 'dotenv';
import Footer from "../components/footer";
dotenv.config();

export default function Contact() {
    const services = [
        {
            id: 1,
            name: "GitHub",
            image: "/github.png",
            link: "https://github.com/ActuallyCloud",
        },
        {
            id: 2,
            name: "Discord Server",
            image: "/discord.png",
            link: "https://discord.com/invite/JQu5k4W6pT"
        },
        {
            id: 3,
            name: "Email",
            image: "/email.png",
            link: "mailto:aura@acld.me",
        },
    ]

    return (
        <div className="animate-fadein cursor-default flex p-4 text-center min-h-[90vh] items-center mx-auto justify-center bg-gradient-to-br from-pink-900 to-blue-800">
            <div className="p-8 sm:pt-16">
                <h1 className="text-2xl sm:text-3xl text-center p-4">Let&apos;s get in touch!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto max-w-64 md:max-w-7xl">
                    {services.map(({ id, name, image, link }) => (
                        <div key={id} className="cursor-pointer p-2 md:p-4 border-2 md:border-4 rounded-3xl md:rounded-2xl hover:bg-white/10 duration-100">
                            {link &&
                                <Link href={link} target="_blank">
                                    {image && 
                                        <Image 
                                            priority={true}
                                            src={image}
                                            className="mx-auto h-auto w-16 sm:w-32 md:w-64 p-4 invert priority" 
                                            alt="logo"
                                            width={256}
                                            height={256}
                                        />
                                    }
                                </Link>
                            }
                            <p className="text-md sm:text-lg md:text-xl text-center p-2">{name}</p>
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    <Footer logos={true}/>
                </div>
            </div>
        </div>
    )
}