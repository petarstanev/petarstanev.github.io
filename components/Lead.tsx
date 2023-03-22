import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Lead = () => {
  return (
    <IconContext.Provider value={{ size: "1.8em" }}>
      <main className="text-center h-[93vh] pt-32 pb-0 px-4 flex flex-col">
        <h1 className="text-6xl">Petar Stanev</h1>
        <h2 className="text-center text-3xl my-[.8em]">Software Developer</h2>
        <p className="bg-slate-50">
          A Software Developer with 6 years of professional experience focused
          on web development currently living in Thailand. Looking for my next
          opportunity.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-[2em]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-[2em]"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-[2em]"
          >
            <FaEnvelope />
          </a>
        </div>
        <div></div>
        <a
          className="self-center inline-flex items-center border text-violet-500 p-3 rounded-full border-violet-500"
          href="/Resume Petar Stanev.pdf"
          target="_blank"
        >
          <b>Resume</b>
          <IconContext.Provider value={{ size: "1em", className: "ml-[.5em]" }}>
            <FaExternalLinkAlt />
          </IconContext.Provider>
        </a>
        <div className="flex justify-center content-center flex-1 items-end pb-4 animate-bounce">
            <FaArrowAltCircleDown />
        </div>
      </main>
    </IconContext.Provider>
  );
};

export default Lead;
