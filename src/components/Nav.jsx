import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import NavlinkCard from "./NavlinkCard";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center  gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className=" text-lg font-montserrat leading-normal text-slate-gray "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden  max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={handleMenu}
          />
          <NavlinkCard isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
