import Image from "next/image";
// image
import googleplay from "../public/assets/googleplay.svg";
import apple from "../public/assets/apple.svg";
import Link from "next/link";
import { footerLinks } from "@/constants/links@";

type ColumnProps = {
   title: string;
   links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnProps) => (
   <div className="flex flex-col gap-2">
      <h4 className="text-black raleway text-base font-semibold leading-6">
         {title}
      </h4>
      <ul className="flex flex-col gap-[7px] font-normal text-sm opacity-75">
         {links.map((link) => (
            <Link href="/" key={link}>
               {link}
            </Link>
         ))}
      </ul>
   </div>
);

const Footer = () => {
   return (
      <footer className=" bg-lightBlue mt-32">
         <div className="max-w-[1104px] mx-auto lg:px-[88px] px-[20px]">
            <h2 className="text-center raleway text-[2rem] font-bold md:leading-[3rem] pt-16">
               Experience Financial Freedom <br className="hidden md:block" />
               On-The-Go
            </h2>
            <p className="opacity-75 text-center lato text-lg lg:text-base pt-2">
               Unlock the power of seamless financial management and take
               <br className="hidden md:block" /> control of your money wherever
               you are
            </p>
            <div className="flex justify-center items-center gap-6 pt-6">
               <Image src={googleplay} alt="googleplay-btn" />{" "}
               <button className="flex justify-center items-center  border border-black py-2">
                  <Image src={apple} alt="apple-btn" />
                  <span className="raleway text-[0.875.rem] font-semibold">
                     App Store
                  </span>
               </button>
            </div>
         </div>
         <div className="w-full border border-[rgba(0,0,0,0.15)] my-10" />

         <div className="max-w-[1104px] mx-auto lg:px-[88px] px-[20px] flex flex-wrap  md:flex-row gap-12 md:items-center md:justify-between pb-[2.5rem]">
            <FooterColumn
               title={footerLinks[0].title}
               links={footerLinks[0].links}
            />
            <FooterColumn
               title={footerLinks[2].title}
               links={footerLinks[2].links}
            />

            <FooterColumn
               title={footerLinks[3].title}
               links={footerLinks[3].links}
            />
            <FooterColumn
               title={footerLinks[1].title}
               links={footerLinks[1].links}
            />
         </div>
         <div className="max-w-[1104px] mx-auto lg:px-[88px] px-[20px] flex flex-col md:flex-row justify-between md:items-end gap-8 md:gap-0 pb-20">
            <div className="flex flex-col gap-2">
               <h4 className="text-black raleway text-base font-semibold leading-6">
                  Contact Us
               </h4>
               <ul className="flex flex-col gap-[7px] font-normal text-sm opacity-75">
                  <li>+2341567893456</li>
                  <li>123 Lagos Street, Ikeja, Lagos,</li>
                  <li>Nigeria.</li>
               </ul>
            </div>
            <div className="flex gap-1 items-center">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                     d="M3 10C3 6.1339 6.1339 3 10 3C13.8661 3 17 6.1339 17 10C17 13.8661 13.8661 17 10 17C6.1339 17 3 13.8661 3 10Z"
                     stroke="#020202"
                     stroke-width="1.5"
                  />
                  <path
                     d="M11.4 12.5669C11.019 12.7215 10.6115 12.8007 10.2002 12.8C8.54331 12.8 7.20001 11.547 7.20001 9.99995C7.20001 8.45295 8.54331 7.19995 10.2002 7.19995C10.6272 7.19995 11.0325 7.28325 11.4 7.43305"
                     stroke="#020202"
                     stroke-width="1.5"
                     stroke-linecap="round"
                  />
               </svg>
               <p className="lato text-sm leading-[1.5rem]">
                  2023 Finstreak. All rights reserved
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
