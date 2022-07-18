import arrow from "../assets/down-arrow-circle.svg";
import Link from "../components/Link";
import NumberedList from "../components/NumberedList";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Home(props) {
  return (
    <div className="home">
      <Title className="tracking-tight">Welcome to Poke Finder!</Title>
      <Text>
        Here you'll be able to find info about anyone of your favorite pokemon!
        We'll show you how it's done down below.
      </Text>
      <div className="flex justify-center mb-5">
        <img className="w-10" src={arrow} alt="" />
      </div>
      <NumberedList>
        <li>Go to your menu and click on Pokedex</li>
        <li>
          Search for a specific Pokemon to filter the list or select one of the
          Pokemon Types to filter by type
        </li>
        <li>
          Click on the row of the Pokemon you want to be taken to its page
        </li>
      </NumberedList>
      {/* <Text>
        Looking for a specific Pokemon? Go to the search page and type in its
        name and hit enter. You'll be taken to its page if you typed in the
        correct name :)
      </Text> */}
      <Text>
        Having an issue? File a bug report on{" "}
        <Link href="https://github.com/Dominik-Ilja/poke-finder">GitHub</Link>!
      </Text>
    </div>
  );
}
