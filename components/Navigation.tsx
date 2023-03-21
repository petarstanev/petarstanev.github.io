import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navigation = () => {
  return (
    <nav className="flex bg-[#edf2f7] justify-between items-center">
      <IconContext.Provider value={{ size: "1.8em" }}>
        <button className="p-[1.2em]">
          <FaBars />
        </button>
        <b className="text-[1.4em]">Petar Stanev</b>
        <button className="p-[1.2em]">
          <FaMoon />
        </button>
      </IconContext.Provider>
    </nav>
  );
};

export default Navigation;
