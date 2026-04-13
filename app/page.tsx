import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Features from "@/components/Features";
import RankTiers from "@/components/RankTiers";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RankTiers />
        <Features />
        <Impact />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
