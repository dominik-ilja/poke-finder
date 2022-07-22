import Container from "../ui/Container";
import DarkModeToggle from "../DarkModeToggle";
import HeaderNav from "./HeaderNav";
import logo from "../../assets/logo.svg";

const classes = "bg-light-bg";
const darkClasses = "dark:bg-dark-bg";

export default function Header(props) {
  return (
    <header className={`${classes} ${darkClasses} ${props.className}`}>
      <Container className="flex justify-between items-center py-4">
        <img src={logo} alt="" />
        <div className="flex gap-x-4 items-center">
          <HeaderNav />
          <DarkModeToggle />
        </div>
      </Container>
    </header>
  );
}
