import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navigation = () => {
  return (
    <nav className="flex bg-slate-200 justify-between items-center">
      <IconContext.Provider value={{ size: "2rem" }}>
        <button className="p-4">
          <FaBars />
        </button>
        <b className="text-2xl">Petar Stanev</b>
        <button className="p-4">
          <FaMoon />
        </button>
      </IconContext.Provider>
    </nav>
  );
};

export default Navigation;
