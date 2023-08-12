"use client";
import { useState } from "react";
import { navLinks } from "@/constants/links@";
import Link from "next/link";
import Image from "next/image";

// images
import Logo from "../public/assets/logo.svg";
import Hamburger from "../public/assets/hamburger-svgrepo-com.svg";
import Close from "../public/assets/times-svgrepo-com.svg";

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const handleToggle = () => {
      setOpen((prev) => !prev);
   };
   const toggleSrc = open ? Close : Hamburger;
   return (
      <nav className="max-w-[1104px] mx-auto h-[50px] lg:px-[88px] lg:mb-[4.5rem] pt-10 fixed top-0 left-0 right-0 w-screen bg-white lg:static z-50">
         <div className="flex justify-between items-center bg-white pb-3 px-5">
            {/* logo and name`` */}
            <Link href="/" className="cursor-pointer bg-white w-full lg:w-auto">
               <div className="flex items-center">
                  <Image src={Logo} alt="logo" width={36} height={40} />
                  <div className="text-black raleway font-semibold text-2xl leading-8 ml-2">
                     Finstreak
                  </div>
               </div>
            </Link>
            {/* navLinks */}
            <ul
               className={`flex transition-all duration-500 lg:flex-row items-center top-[76px] w-screen lg:w-auto lg:h-auto lg:pt-0 bg-white h-[70vh] pt-10 gap-10 lg:static absolute ${
                  open ? "left-0" : "-left-[120%]"
               } flex-col`}>
               {navLinks.map((link, index) => {
                  const { label, href } = link;
                  return (
                     <Link key={index} href={href}>
                        <li
                           className={`raleway font-semibold leading-6 hover:-translate-y-1 transition-all duration-300 p-3 ${
                              index % 2 === 0
                                 ? "hover:skew-x-3 hover:-translate-x-1"
                                 : "hover:skew-y-3 hover:-translate-y-1"
                           }`}>
                           {label}
                        </li>
                     </Link>
                  );
               })}
            </ul>
            {/* hamburger and signuup button */}
            <div>
               <button className="bg-black text-white shadow-btnShadow hidden lg:block">
                  {" "}
                  Sign Up
               </button>
               <Image
                  src={toggleSrc}
                  alt="menu-btn"
                  width={50}
                  height={50}
                  className={`cursor-pointer lg:hidden transition-transform duration-300 ${
                     open ? "rotate-180 skew-y-12" : "rotate-0"
                  }`}
                  onClick={handleToggle}
               />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
