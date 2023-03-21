import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Projects = () => {
  return (
    <section className="flex flex-col px-[1em] py-0">
      <h2 className="text-center text-[1.9em]">Projects</h2>
      <IconContext.Provider value={{ size: ".8em", className: "ml-[.5em]" }}>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className="text-[1.4em] text-center mx-0 my-[0.5em]">
            Hacker news easy
          </h3>
          <p className="text-center mx-0 my-[0.3em]">
            Alternative way for browsing Hacker News using simple interface and
            faster interface.
          </p>
          <aside className="flex justify-evenly ">
            <a
              className="flex text-[1.2em] items-baseline"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <FaExternalLinkAlt />
            </a>
            <a
              className="flex text-[1.2em] items-baseline"
              href="https://github.com/petarstanev/hacker-news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
              <FaGithub />
            </a>
          </aside>
        </article>
      </IconContext.Provider>
    </section>
  );
};

export default Projects;
