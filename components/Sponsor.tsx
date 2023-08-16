import Image from "next/image";
// images
import visa from "../public/assets/visa.svg";
import mastercard from "../public/assets/MasterCard logo.png";
import apple from "../public/assets/Apple logo.png";
import stripe from "../public/assets/Stripe logo.png";
import paypal from "../public/assets/PayPal logo.png";
import bitcoin from "../public/assets/bitcoin logo.png";

const Sponsor = () => {
   return (
      <section className="max-w-[1280px] mx-auto my-[5.5rem]">
         <div className="w-full border border-black/40" />
         <div className="">
            <h2 className="text-xl lato font-medium leading-8 pt-10 text-center">
               Supported by several payment gateways
            </h2>
            <div className="flex gap-14 flex-nowrap items-center justify-center md:mt-[2.31rem] mt-4 bg-white carousel overflow-x-scroll md:mb-[3.12rem] mb-6 cursor-pointer">
               <Image
                  src={visa}
                  alt="sponsor-logo"
                  width={61}
                  height={40}
                  className="w-[3.8125rem] h-[2.5rem] sponsor-logo"
               />
               <Image
                  src={mastercard}
                  alt="sponsor-logo"
                  className="w-[2.55388rem] h-8 sponsor-logo "
               />
               <Image
                  src={apple}
                  alt="sponsor-logo"
                  className="w-[3.4375rem] h-6 sponsor-logo"
               />
               <Image
                  src={stripe}
                  alt="sponsor-logo"
                  className="w-14 h-[1.875rem] sponsor-logo"
               />
               <Image
                  src={paypal}
                  alt="sponsor-logo"
                  className="w-[5.25rem] h-[3.125rem] sponsor-logo"
               />
               <Image
                  src={bitcoin}
                  alt="sponsor-logo"
                  className="w-[5.75rem] h-[1.125rem] sponsor-logo"
               />
            </div>
         </div>
         <div className="w-full border border-black/40" />
      </section>
   );
};

export default Sponsor;
