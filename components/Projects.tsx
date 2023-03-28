import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((undefined, ref) => {
  return (
    <section ref={ref}>
      <h2>Projects</h2>
      <IconContext.Provider
        value={{ size: "1em", className: "ml-2 text-slate-800" }}
      >
        <article>
          <h3>Hacker news easy</h3>
          <p>
            Alternative way for browsing Hacker News using simple interface and
            faster interface.
          </p>
          <aside className="flex justify-evenly ">
            <a
              className="flex text-lg items-center"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <FaExternalLinkAlt />
            </a>
            <a
              className="flex text-lg items-center ml-4"
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
});

export default Projects;
