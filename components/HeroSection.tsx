import Image from "next/image";
import HeroPic from "../public/assets/heroPic.png";
import ArrowLeft from "../public/assets/arrow-left.png";
import ArrowRight from "../public/assets/arrow-right.png";
import slider from "../public/assets/slideIndicator.png";

const HerosSection = () => {
   return (
      <div className="max-w-[1104px] mx-auto lg:px-[88px] px-[20px] flex flex-col lg:flex-row items-center gap-[5.81rem] pt-[120px] lg:pt-0">
         <div className="text-center lg:text-left basis-1/2 self-start md:self-center">
            <h1 className="pb-4 raleway font-extrabold text-[35px] md:text-[50px] lg:text-[50px] md:leading-[62px]">
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

            <form className="md:flex block items-center gap-4">
               <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="bg-inputBg border-none outline-none md:w-[300px] w-full raleway h-14 p-4 rounded-3xl placeholder:text-[#8f8f8f] text-black"
               />
               <button
                  type="submit"
                  className="bg-black text-white w-full mt-4 md:w-[108px] md:mt-0">
                  Sign Up
               </button>
            </form>
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
            <div className="absolute bottom-0 p-3 h-[7rem] bg-lightBlue w-full flex flex-col md:gap-1 gap-2">
               <p className="lato text-xs md:text-lg lg:text-base">
                  Wade Warren
               </p>
               <div className="flex items-center justify-between">
                  <h3 className="raleway font-bold text-sm md:text-lg lg:text-base leading-6 ">
                     Buying his $20,000 - 2022 Dodge challenger GT
                  </h3>
                  <div className="flex items-center gap-1 cursor-pointer">
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
               <div className="cursor-pointer">
                  <Image src={slider} width={50} alt="slider" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HerosSection;
