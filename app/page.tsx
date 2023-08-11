import HeroSection from "@/components/HeroSection@";
import Navbar from "@/components/Navbar@";
import Sponsor from "@/components/Sponsor@";

export default function Home() {
   return (
      <main className="h-full relative">
         <Navbar />
         <HeroSection />
         <Sponsor />
      </main>
   );
}
