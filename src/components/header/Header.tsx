import Container from "../ui/Container";
import DarkModeToggle from "./DarkModeToggle";
import Menu from "./Menu";
import Logo from "./Logo";

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  return (
    <header className={`bg-light-bg dark:bg-dark-bg ${props.className || ''}`}>
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <div className="flex items-center gap-x-4">
          <Menu />
          <DarkModeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;
