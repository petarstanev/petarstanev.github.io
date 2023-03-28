import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="flex bg-slate-200 p-4 h-16 dark:bg-slate-900 dark:text-slate-100">
      <p className="flex-1">© 2023 Petar Stanev</p>
      <section className="flex flex-1 flex-wrap justify-end items-center">
        <IconContext.Provider value={{ size: "1rem", className:'text-slate-800 dark:text-slate-100' }}>
          <a
            className="flex-[0_1_2em] pl-4"
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="flex-[0_1_2em] pl-4"
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="flex-[0_1_2em] pl-4"
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a className="flex-[0_1_2em] pl-4" href="#">
            <FaArrowAltCircleUp />
          </a>
        </IconContext.Provider>
      </section>
    </footer>
  );
};

export default Footer;
