import Footer from "@/components/footer";
import Contact from "@/components/landingpage/contact";
import SuccessStores from "@/components/landingpage/successstories";

export default function Home() {
  return (
    <main className="p-[40px] bg-primary-bg">
      <SuccessStores />
      <Contact />
      <Footer />
    </main>
  );
}
