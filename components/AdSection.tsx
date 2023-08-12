import Image from "next/image";
// image
import AdImage from "../public/assets/largeHero.png";
import degree from "../public/assets/degree.svg";
import arrow from "../public/assets/arrow.svg";
const AdSection = () => {
   return (
      <section className="mt-32 bg-black py-20">
         <div className="max-w-[1104px] flex flex-col lg:flex-row gap-[3.5rem] lg:gap-[6.5rem] mx-auto lg:px-[88px] px-[20px] items-center">
            <div>
               <Image
                  src={AdImage}
                  alt="adImage"
                  // fill
                  width={733}
                  height={672}
                  className="object-cover md:h-[772px]"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div>
               <div className="flex items-start flex-col gap-4 lg:h-[450px]">
                  <div className="bg-grey flex items-center gap-2 min-w-[108px] h-12 rounded-3xl py-4 px-6 text-base font-semibold leading-4">
                     <Image src={degree} alt="degree" />
                     <span className="raleway leading-7 opacity-75 text-[#FFFFFF]">
                        Approach
                     </span>
                  </div>
                  <h2 className="text-white raleway text-[2rem] md:text-[2.5rem] font-bold leading-[3.5rem]">
                     Receive alerts for every change{" "}
                     <br className="hidden md:block lg:hidden" />
                     <br className="hidden lg:block" />
                     in your cashflow
                  </h2>
                  <p className="lato text-white leading-7 opacity-75">
                     Stay on top of your finances with our proactive alerts.
                     Whether it's <br className="hidden lg:block" />
                     income, expenses, or unexpected fluctuations, we've got you{" "}
                     <br className="hidden lg:block" /> covered, keeping you
                     informed and in command of your cashflow
                  </p>
               </div>
               <div className="flex items-center space-x-2 mt-10 cursor-pointer">
                  <p className="text-pink raleway font-semibold text-base">
                     See how others use Finstreak
                  </p>
                  <div className=" rounded-full w-6 h-6 flex items-center justify-center bg-pink">
                     <Image src={arrow} alt="cta" />
                  </div>
               </div>
               <div className="mt-10 flex items-center gap-14 text-white">
                  <div className="flex flex-col gap-2 raleway">
                     <p className="text-white text-[2.5rem] font-bold leading-[3.5rem]">
                        95%
                     </p>
                     <p className="opacity-75 text-xs ">
                        Push notifications will attract users’ attention
                     </p>
                     <p className="opacity-75 text-xs ">Apple, 2021</p>
                  </div>
                  <div className="flex flex-col gap-2 raleway">
                     <p className="text-white text-[2.5rem] font-bold leading-[3.5rem]">
                        88%
                     </p>
                     <p className="opacity-75 text-xs ">
                        of people are more attracted by push notifications
                     </p>
                     <p className="opacity-75 text-xs ">Google, 2021</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AdSection;
