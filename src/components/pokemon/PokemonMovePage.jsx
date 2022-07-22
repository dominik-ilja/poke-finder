import { Link } from "react-router-dom";
// import arrow from "../assets/arrow.svg";
import IconArrow from "../../assets/IconArrow";

export default function PokemonMovePage(props) {
  let jsx = null;

  if (props.type === "left") {
    jsx = (
      <>
        <IconArrow className="w-4 text-white rotate-180" />
        {/* <img className="" src={arrow} alt="" /> */}
        <img className="w-12" src={props.src} alt="" />
        {props.children}
      </>
    );
  } else {
    jsx = (
      <>
        {props.children}
        <img className="w-12" src={props.src} alt="" />
        {/* <img src={arrow} alt="" /> */}
        <IconArrow className="w-4 text-white" />
      </>
    );
  }

  return (
    <Link to={props.href} onClick={() => window.scrollTo(0, 0)}>
      <div className="flex gap-2 items-center">{jsx}</div>
    </Link>
  );
}
