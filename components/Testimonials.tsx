import React from "react";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
   return (
      <section className="mt-32 max-w-[1104px] mx-auto lg:px-[88px] px-[20px]">
         <h2 className=" text-center text-black raleway text-[2rem] md:text-[2.5rem] font-extrabold leading-[3.5rem]">
            We’ve helped <span className="text-purple">25k+</span> people
            <br className="hidden md:block" /> manage their finances
         </h2>
         <div>
            <TestimonialCard />
         </div>
      </section>
   );
};

export default Testimonials;
