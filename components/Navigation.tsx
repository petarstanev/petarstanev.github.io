import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RefObject, useState, useEffect } from "react";
const Background = lazy(() => import("@/components/Background"));
import { lazy, Suspense } from "react";

interface NavigationProps {
  aboutRef: RefObject<HTMLDivElement | null>,
  workRef: RefObject<HTMLDivElement | null>,
  eduRef: RefObject<HTMLDivElement | null>,
  projectRef: RefObject<HTMLDivElement | null>,
  resumeRef: RefObject<HTMLDivElement | null>,
  contactRef: RefObject<HTMLDivElement | null>,
}

const Navigation = (props: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // const prefersDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    const root = window.document.documentElement;
    root.classList.remove(currentTheme);
    root.classList.add(theme);
  }, [theme]);

  const menuOpenHandler = () => {
    setMenuOpen((current) => !current);
  };
  const darkModeHandler = () => {
    setTheme((theme: string) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Suspense>
        <Background theme={theme} />
      </Suspense>
      <div>
        <nav className="flex bg-slate-200 text-slate-800 justify-between items-center dark:bg-slate-900 dark:text-slate-100">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <button
              className="p-1 m-2 rounded bg-slate-300 dark:bg-slate-800"
              onClick={menuOpenHandler}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <b className="text-2xl">Petar Stanev</b>
            <button
              className="p-1 m-2 rounded bg-slate-300 dark:bg-slate-800"
              onClick={darkModeHandler}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </IconContext.Provider>
        </nav>
        {isMenuOpen && (
          <div className="flex flex-col bg-slate-200 dark:bg-slate-900 dark:text-slate-100">
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.aboutRef.current?.scrollIntoView()}
            >
              About me
            </button>
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.workRef.current?.scrollIntoView()}
            >
              Work Experience
            </button>
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.eduRef.current?.scrollIntoView()}
            >
              Education
            </button>
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.projectRef.current?.scrollIntoView()}
            >
              Projects
            </button>
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.resumeRef.current?.scrollIntoView()}
            >
              Resume
            </button>
            <button
              className="pl-3 py-1  border-t border-solid border-t-slate-600"
              onClick={() => props.contactRef.current?.scrollIntoView()}
            >
              Contact
            </button>
          </div>
        )}
      </div>

    </>
  );
};
Navigation.displayName = 'Navigation';
export default Navigation;
