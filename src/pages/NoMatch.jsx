// import Title from "../components/ui/Title";
import Title from "../components/ui/Title";
import Container from "../components/ui/Container";
import sad from "../assets/sad-pikachu.gif"


export default function NoMatch(props) {
  return (
    <Container className="flex flex-col justify-center">
      <Title>Oh No! Page not found!</Title>
      <img src={sad} alt="" />
    </Container>
  );
};
