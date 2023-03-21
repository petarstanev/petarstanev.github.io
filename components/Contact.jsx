import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <section className="flex flex-col px-[1em] py-0">
      <h2 className="text-center text-[1.9em]">Get in touch</h2>
      <aside className="flex justify-evenly">
        <IconContext.Provider value={{ size: ".8em", className: "ml-[.5em]" }}>
          <a
            className="flex text-[1.2em] items-baseline"
            href="https://www.linkedin.com/in/petarstanev"
          >
            LinkedIn
            <FaLinkedin />
          </a>
          <a className="flex text-[1.2em] items-baseline" href="mailto:me@petarstanev.com">
            me@petarstanev.com
            <FaEnvelope />
          </a>
        </IconContext.Provider>
      </aside>
    </section>
  );
};

export default Contact;
