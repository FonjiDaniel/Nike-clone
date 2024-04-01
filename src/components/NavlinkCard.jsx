import { navLinks } from "../constants";

const NavlinkCard = ({ isOpen }) => {
  return (
    <ul className={`${isOpen ? "flex-col items-end " : "hidden"}`}>
      {navLinks.map((link) => (
        <div>
          <li className="text-slate-gray  underline font-semibold font-montserrat leading-normal">
            <a href={link.href}>{link.label}</a>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default NavlinkCard;
