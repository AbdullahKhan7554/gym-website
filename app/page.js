import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Journey from "@/components/sections/Journey";
import Facilities from "@/components/sections/Facilities";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Gallery from "@/components/sections/Gallery";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <WhyChoose />
        <Journey />
        <Facilities />
        <Trainers />
        <Membership />
        <Gallery />
        <Stats />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
