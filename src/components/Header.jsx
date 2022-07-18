import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import Container from "./Container";

export default function Header(props) {
  return (
    <header className="relative pt-3 pb-3 bg-dark">
      {/* Container */}
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="flex items-center justify-center p-0 bg-transparent border-0 md:hidden">
          <img src={menu} alt="" />
        </button>

        {/* navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center p-0 m-0 list-none gap-x-4">
            <li>
              <NavLink
                className="text-white transition-colors hover:text-secondary"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white transition-colors hover:text-secondary"
                to="/pokedex"
              >
                Pokedex
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
