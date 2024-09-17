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
      link: "outage?",
      link_url: "https://cloud.instatus.com/",
    },
  ];

  return (
    <div className="animate-fadein-fast z-10 flex justify-end sm:justify-around lg:justify-between items-center w-full p-4 text-white fixed nav">
      <ul className="hidden sm:flex bg-black/50 py-2 rounded-xl">
        {links.map(({ id, link, link_url }) => (
          <li
            key={id}
            className="nav-links link-underline h-content w-content"
          >
            <Link href={link_url} className="px-6 py-2 cursor-pointer capitalize text-xl text-white hover:text-gray-300 duration-100">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          var element = document.getElementById("navmenu");
          element?.classList.remove('animate-fadein-fast');
          element?.classList.add('animate-fadeout');
          setTimeout(toggleNav, 190);

          function toggleNav() {
            setNav(!nav);

            element?.classList.remove('animate-fadeout');
            element?.classList.add('animate-fadein-fast');
          }
        }}
        className="flex justify-between items-center cursor-pointer z-20 text-gray-500 sm:hidden"
      >
        {nav ? 
          <Image src="/menu.png" className="opacity-70 p-2 bg-white/40 rounded-lg" alt="logo" width={45} height={45}/>:
          <Image src="/menu.png" className="opacity-70 p-2 bg-white/20 rounded-lg" alt="logo" width={45} height={45}/>
        }
      </div>

      {nav ? (
        <ul className="inline-block animate-fadein-fast justify-center items-center text-center pt-12
         absolute top-0 left-0 w-full h-[105vh] align-middle bg-gradient-to-br from-gray-800 to-slate-900" id="navmenu">
          {links.map(({ id, link, link_url }) => (
            <li
              key={id}
              className="px-3 cursor-pointer capitalize py-6 text-3xl text-white hover:text-gray-200 duration-100"
            >
              <Link onClick={() => {
                  var element = document.getElementById("navmenu");
                  element?.classList.remove('animate-fadein-fast');
                  element?.classList.add('animate-fadeout');
                  setTimeout(toggleNav, 190);

                  function toggleNav() {
                    setNav(!nav);
                  }
              }} href={link_url} className="border-white">
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