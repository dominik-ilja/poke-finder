import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import NumberList from "../components/ui/NumberList";
import IconDownArrowCircle from "../assets/IconDownArrowCircle";
import Link from "../components/ui/Link";

export default function Home(props) {
  return (
    <Container>
      <Title className="text-xl">Welcome to Poke Finder!</Title>
      <Text>
        Here you'll be able to find info about anyone of your favorite pokemon! We'll show you how it's done down below.
      </Text>
      <div className="flex justify-center my-8">
        <IconDownArrowCircle svg="w-10" />
      </div>
      <NumberList>
        <li>Go to your menu and click on Pokedex</li>
        <li>
          Search for a specific Pokemon to filter the list or select one of the
          Pokemon Types to filter by type
        </li>
        <li>
          Click on the row of the Pokemon you want to be taken to its page
        </li>
      </NumberList>
      <Text>
        Having an issue? File a bug report on <Link href="https://github.com/Dominik-Ilja/poke-finder">GitHub!</Link>
      </Text>
    </Container>
  );
};
