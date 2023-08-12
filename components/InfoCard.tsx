import { cardInfo } from "@/constants/card@";
import Image from "next/image";

const InfoCard = () => {
   return (
      <section className="flex w-full flex-col md:flex-row justify-center flex-wrap gap-8 md:gap-y-[5.35rem] md:space-x-4 items-center">
         {cardInfo.map((card, index) => {
            const { icon, title, content } = card;
            return (
               <figure
                  key={index}
                  className="md:w-[15.4375rem] md:h-[18rem] w-[22rem] h-[15rem] rounded overflow-hidden shadow-lg p-4 flex flex-col gap-2 bg-white">
                  <Image src={icon} alt="card-icon" width={32} height={32} />
                  <div className="raleway font-semibold text-[1rem] text-black leading-[1.75rem]">
                     {title}
                  </div>
                  <p className="text-black lato text-[0.875rem] leading-[1.75rem] opacity-75">
                     {content}
                  </p>
               </figure>
            );
         })}
      </section>
   );
};

export default InfoCard;
