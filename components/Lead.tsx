import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Lead = () => {
  return (
    <main className="text-center min-h-[95vh] pt-32 pb-0 px-4 flex flex-col text-slate-800 dark:text-slate-100">
      <IconContext.Provider
        value={{
          size: "1.8em",
          className: "text-slate-800 dark:text-slate-100",
        }}
      >
        <h1 className="text-6xl">Petar Stanev</h1>
        <h2 className="my-3">Software Developer</h2>
        <article>
          A Software Developer with 6 years of professional experience focused
          on web development currently living in Sofia, Bulgaria. Looking for my next
          opportunity.
        </article>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-8"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-8"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_4em] flex justify-center py-8"
          >
            <FaEnvelope />
          </a>
        </div>
        <a
          className="self-center inline-flex items-center border text-violet-500 p-3 rounded-full border-violet-500 bg-slate-50 dark:text-slate-800"
          href="/Resume_Petar_Stanev.pdf"
          target="_blank"
        >
          <b>Resume</b>
          <IconContext.Provider
            value={{ size: "1em", className: "ml-2 text-slate-800" }}
          >
            <FaExternalLinkAlt />
          </IconContext.Provider>
        </a>
        <div className="py-8 mt-auto">
          <div className="flex justify-center content-center flex-1 items-end animate-bounce">
            <FaArrowAltCircleDown />
          </div>
        </div>
      </IconContext.Provider>
    </main>
  );
};
Lead.displayName = 'Lead';
export default Lead;
