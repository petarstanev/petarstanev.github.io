import Header from "@/components/Header";
import Lead from "@/components/Lead";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Navigation />
      <Lead />
      <About />
      <Work />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
