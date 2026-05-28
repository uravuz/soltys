import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Endorsements from "@/components/Endorsements";
import JoinUs from "@/components/JoinUs";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Vision />
      <About />
      <Endorsements />
      <JoinUs />
      <Donate />
      <Footer />
    </main>
  );
}
