import Image from "next/image";
import HeroPic from "../public/assets/heroPic.png";
import ArrowLeft from "../public/assets/arrow-left.png";
import ArrowRight from "../public/assets/arrow-right.png";
import slider from "../public/assets/slideIndicator.png";

const HerosSection = () => {
   return (
      <div className="max-w-[1104px] mx-auto md:px-[88px] px-[20px] flex flex-col lg:flex-row items-center gap-[5.81rem] pt-[120px] lg:pt-0">
         <div className=" basis-1/2 self-start lg:self-center">
            <h1 className="pb-4 raleway max-w-[34rem] font-extrabold text-[30px] md:text-[50px] md:leading-[72px]">
               Plan, Save, Grow:
               <br />
               Your Partner in <br />
               Financial Success
            </h1>
            <p className="lato font-normal text-[md] lg:text-lg pb-8">
               Navigate your financial journey with our intuitive tools and
               expert <br className="hidden md:block" /> guidance, and watch
               your wealth flourish
            </p>
            <div className="flex items-center gap-4">
               <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-inputBg border-none outline-none md:w-[300px] w-[180px] raleway h-14 p-4 rounded-3xl text-[#8f8f8f]"
               />
               <button className="bg-black text-white">Sign Up</button>
            </div>
         </div>
         <div
            className="lg:w-[29.1875rem] w-full h-[480px] relative"
            style={{
               background:
                  "linear-gradient(153deg, #FEE4E5 7.77%, #E5FFD9 74.58%)",
            }}>
            <Image
               src={HeroPic}
               alt="heroPic"
               width={245}
               height={328}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="absolute right-0 bottom-[112px]"
            />
            <div className="absolute bottom-0 p-3 h-[7rem] bg-lightBlue w-full flex flex-col gap-2">
               <p className="lato text-xs">Wade Warren</p>
               <div className="flex items-center justify-between">
                  <h3 className="raleway font-bold text-sm leading-6">
                     Buying his $20,000 - 2022 Dodge challenger GT
                  </h3>
                  <div className="flex items-center gap-1">
                     <Image
                        src={ArrowLeft}
                        alt="arrow-img"
                        width={25}
                        height={25}
                     />
                     <Image
                        src={ArrowRight}
                        alt="arrow-img"
                        width={25}
                        height={25}
                     />
                  </div>
               </div>
               <div>
                  <Image src={slider} width={50} alt="slider" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HerosSection;
