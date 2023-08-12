import React from "react";
import InfoCard from "./InfoCard";

const InformationSection = () => {
   return (
      <section className="max-w-[1104px] mx-auto lg:px-[88px] px-[20px]">
         <h1 className="text-center text-black raleway text-[2rem] md:text-4xl font-extrabold md:leading-[3.5rem] mb-4">
            Master Your Finances with <br className="hidden md:block" /> the
            Ultimate Planning Tool
         </h1>
         <p className="text-black text-center lato text-[1.125rem] leading-[1.75rem] mb-10">
            Your dreams deserve a solid financial strategy, we've got you
            covered!
         </p>
         <InfoCard />
      </section>
   );
};

export default InformationSection;
