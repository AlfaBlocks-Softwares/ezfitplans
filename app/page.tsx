import Footer from "@/components/footer";
import Brands from "@/components/landingpage/brands";
import WhyChooseUs from "@/components/landingpage/choose";
import Contact from "@/components/landingpage/contact";
import Hero from "@/components/landingpage/hero";
import NavBar from "@/components/landingpage/navbar";
import SuccessStores from "@/components/landingpage/successstories";

export default function Home() {
  return (
    <main className="px-[40px] bg-landing-bg overflow-hidden relative">
      <NavBar />
      <Hero />
      <Brands />
      <WhyChooseUs />
      <SuccessStores />
      <Contact />
      <Footer />
    </main>
  );
}
