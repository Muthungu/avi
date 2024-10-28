import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import TopNavigation from "@/components/custom/TopNavigation";
import Working from "@/components/custom/working";
import Image from "next/image";


export default function Home() {
  return (
    
      <main className="w-full">
       <TopNavigation />
       <Hero />
       <About />
       <Working />
       <Contact />
       <Footer />
      </main>

    
  );
}
