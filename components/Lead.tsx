import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Lead = () => {
  return (
    <main className="text-center h-[93vh] pt-[8em] pb-0 px-[1em] flex flex-col">
      <h1 className="text-[3.5em]">Petar Stanev</h1>
      <h2 className="text-center text-[1.9em] my-[.8em]">Software Developer</h2>
      <p>
        A Software Developer with 6 years of professional experience currently
        in Thailand. Looking for my next opportunity.
      </p>
      <div className="flex justify-center">
        <IconContext.Provider value={{ size: "1.8em" }}>
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
        </IconContext.Provider>
      </div>
      <div></div>
      <a
        className="self-center inline-flex border text-[#00a3c4] mt-[1em] p-4 rounded-[3em] border-solid border-[#00a3c4] items-center"
        href="/Resume Petar Stanev.pdf"
        target="_blank"
      >
        <b>Resume</b>
        <IconContext.Provider value={{ size: "1em", className: "ml-[.5em]" }}>
          <FaExternalLinkAlt />
        </IconContext.Provider>
      </a>
      <div className="flex justify-center content-center flex-[1] items-center">
      <IconContext.Provider value={{ size: "1em", className: "ml-[.5em]" }}>
        <FaArrowAltCircleDown/>
        </IconContext.Provider>

      </div>
    </main>
  );
};

export default Lead;
