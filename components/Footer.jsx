import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#edf2f7] flex p-[1em]">
      <p className="flex-[1]">© 2023 Petar Stanev</p>
      <section className="flex flex-[1] justify-end items-center">
        <IconContext.Provider value={{ size: "1.8em" }}>
          <a
            className="flex-[0_1_2em] pl-[1em]"
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="flex-[0_1_2em] pl-[1em]"
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="flex-[0_1_2em] pl-[1em]"
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a className="flex-[0_1_2em] pl-[1em]" href="#">
            <FaArrowAltCircleUp />
          </a>
        </IconContext.Provider>
      </section>
    </footer>
  );
};

export default Footer;
