'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      link_url: "/",
    },
    {
      id: 2,
      link: "wellness",
      link_url: "/wellness",
    },
    {
      id: 3,
      link: "contact",
      link_url: "/contact",
    },
    {
      id: 4,
      link: "gallery",
      link_url: "/gallery",
    },
    {
      id: 5,
      link: "outage",
      link_url: "/outage",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full p-4 text-white bg-transparent fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl">
          <a
            className="link-underline link-underline-black cursor-default"
            href="/"
            rel="noreferrer"
          >
            <Image src="/pfp_almost_transparent.png" className="opacity-70 m-4 sm:m-0 sm:opacity-0" alt="logo" width={40} height={40}/>
          </a>
        </h1>
      </div>

      <ul className="hidden sm:flex">
        {links.map(({ id, link, link_url }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize text-xl text-gray-300 hover:text-white duration-100 link-underline h-content w-content"
          >
            <Link href={link_url}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="flex items-center cursor-pointer z-10 text-gray-500 sm:hidden"
      >
        <Image src="/menu.png" className="opacity-70 m-4" alt="logo" width={30} height={30}/>
      </div>

      {nav ? (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-emerald-800 to-indigo-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-200 hover:text-white duration-100"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ): null}
    </div>
  );
};

export default Navbar;