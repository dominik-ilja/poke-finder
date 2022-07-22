import Container from "../ui/Container";
import FooterIcons from "./FooterIcons";

export default function Footer(props) {
  const darkClasses = "dark:bg-dark-bg"
  const classes = "bg-light-bg py-4"

  return (
    <footer className={`${classes} ${darkClasses} ${props.className}`}>
      <Container className="flex justify-between items-center">
        <small className="font-semibold text-palette-white dark:text-palette-secondary">@DominikIlja</small>
        <FooterIcons />
      </Container>
    </footer>
  );
};
