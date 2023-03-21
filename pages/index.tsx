import Header from "@/components/Header";
import Lead from "@/components/Lead";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Lead />
      <About />
      <Work/>      
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
