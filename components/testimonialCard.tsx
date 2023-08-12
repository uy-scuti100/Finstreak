import { testimonials } from "@/constants/links@";

const TestimonialCard = () => {
   return (
      <section className="mt-16 flex flex-col md:flex-row gap-8 flex-wrap border-box md:gap-y-[5.35rem] md:gap-x-4 mx-auto justify-center items-center">
         {testimonials.map((card, index) => {
            const { label, title, content } = card;
            return (
               <figure
                  key={index}
                  className="md:w-[16.5rem] md:h-[14rem]  w-[22rem] min-h-[15rem] box-border rounded overflow-hidden shadow-lg p-4 flex flex-col gap-2 bg-white">
                  <div className="raleway text-black font-semibold">
                     {title}
                  </div>
                  <div className="lato text-[0.75rem] text-black leading-[1rem] opacity-50">
                     {label}
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

export default TestimonialCard;
