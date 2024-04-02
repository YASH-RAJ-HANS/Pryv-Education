import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Pricing from "@/Components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between  bg-white ">
     

    
    <Hero/>
    <About/>
    <Pricing/>
    
    <Contact/>
    <br/>
    <Faq/>
    <Footer/>
    </div>
  );
}
