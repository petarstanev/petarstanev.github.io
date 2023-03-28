import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((undefined, ref) => {
  return (
    <section ref={ref} className="flex flex-col px-4">
      <h2 className="text-center text-3xl">Get in touch</h2>
      <article className="border px-4 my-4 rounded-md border-violet-500 bg-slate-50">
        <aside className="flex justify-evenly flex-wrap">
          <IconContext.Provider
            value={{ size: "1em", className: "ml-2 text-slate-800" }}
          >
            <a
              className="flex text-[1.2em] items-center"
              href="https://www.linkedin.com/in/petarstanev"
            >
              LinkedIn
              <FaLinkedin />
            </a>
            <a
              className="ml-4 flex text-[1.2em] items-center"
              href="mailto:me@petarstanev.com"
            >
              me@petarstanev.com
              <FaEnvelope />
            </a>
          </IconContext.Provider>
        </aside>
      </article>
    </section>
  );
});
Contact.displayName = 'Contact';
export default Contact;
