import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Projects = () => {
  return (
    <section className="flex flex-col px-4">
      <h2 className="text-center text-3xl">Projects</h2>
      <IconContext.Provider value={{ size: "1em", className: "ml-2" }}>
        <article className="border px-4 my-4 rounded-md border-violet-500 bg-slate-50">
          <h3 className="text-xl text-center my-2">
            Hacker news easy
          </h3>
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
              className="flex text-lg items-center"
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
