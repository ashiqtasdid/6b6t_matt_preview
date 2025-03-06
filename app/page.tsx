import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <Gallery/>
    <Faq/>
    <Footer/>
  </main>
  );
}
