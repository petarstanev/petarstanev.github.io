import Header from "@/components/Header";
import Lead from "@/components/Lead";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import { useRef, lazy, Suspense } from "react";
const Background = lazy(() => import("@/components/Background"));

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Suspense>
        <Background />
      </Suspense>
      <Header />
      <Navigation
        aboutRef={aboutRef}
        workRef={workRef}
        eduRef={educationRef}
        projectRef={projectsRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <div className="max-w-3xl mx-auto">
        <Lead />
        <About ref={aboutRef} />
        <Work ref={workRef} />
        <Education ref={educationRef} />
        <Projects ref={projectsRef} />
        <Resume ref={resumeRef} />
        <Contact ref={contactRef} />
      </div>
      <Footer />
    </>
  );
}
