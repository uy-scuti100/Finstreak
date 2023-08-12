import HeroSection from "@/components/HeroSection@";
import InformationSection from "@/components/InformationSection@";
import Navbar from "@/components/Navbar@";
import Sponsor from "@/components/Sponsor@";
import AdSection from "@/components/AdSection@";
import Testimonials from "@/components/Testimonials@";
import Footer from "@/components/Footer@";

export default function Home() {
   return (
      <main className="h-full relative">
         <Navbar />
         <HeroSection />
         <Sponsor />
         <InformationSection />
         <AdSection />
         <Testimonials />
         <Footer />
      </main>
   );
}
