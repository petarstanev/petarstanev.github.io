import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import { RefObject, useState } from "react";

interface NavigationProps {
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  eduRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  resumeRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Navigation = (props: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <>
      <nav className="flex bg-slate-200 justify-between items-center">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <button className="p-3" onClick={menuOpenHandler}>
            {isMenuOpen ? <GrClose /> : <FaBars />}
          </button>
          <b className="text-2xl">Petar Stanev</b>
          <button className="p-3">
            <FaMoon />
          </button>
        </IconContext.Provider>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col">
          <button
            className=" bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.aboutRef.current?.scrollIntoView()}
          >
            About me
          </button>
          <button
            className="bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.workRef.current?.scrollIntoView()}
          >
            Work Experience
          </button>
          <button
            className="bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.eduRef.current?.scrollIntoView()}
          >
            Education
          </button>
          <button
            className="bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.projectRef.current?.scrollIntoView()}
          >
            Projects
          </button>
          <button
            className="bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.resumeRef.current?.scrollIntoView()}
          >
            Resume
          </button>
          <button
            className="bg-slate-200 pl-3 py-1  border-t border-solid border-t-slate-600"
            onClick={() => props.contactRef.current?.scrollIntoView()}
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
