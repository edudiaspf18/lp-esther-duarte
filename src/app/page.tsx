import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForWhom } from "@/components/sections/ForWhom";
import { Footer } from "@/components/sections/Footer";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { PhysicalAssessment } from "@/components/sections/PhysicalAssessment";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <ForWhom />
        <PhysicalAssessment />
        <Process />
        <About />
        <Credentials />
        <FAQ />
        <InstagramStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
