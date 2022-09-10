import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Menu = () => {

  const navLinks = [
    { name: "home", route: "/" },
    { name: "pokedex", route: "/pokedex" },
  ].map(({ name, route }) => {
    return (
      <NavLink className={`capitalize focus-visible:outline-palette-secondary focus:text-palette-secondary font-semibold hover:text-palette-secondary md:text-lg outline-none text-palette-white transition-colors dark:text-dark-text dark:focus:text-palette-secondary dark:hover:text-palette-secondary`}
        to={route} key={uuid()}
      >
        {name}
      </NavLink>
    );
  });

  return <nav className="flex gap-x-2">{navLinks}</nav>;
};

export default Menu;
