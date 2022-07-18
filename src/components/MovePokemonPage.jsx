import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

export default function MovePokemonPage(props) {
  let jsx = null;

  if (props.type === "left") {
    jsx = (
      <>
        <img className="rotate-180" src={arrow} alt="" />
        <img className="w-12" src={props.src} alt="" />
        {props.children}
      </>
    );
  } else {
    jsx = (
      <>
        {props.children}
        <img className="w-12" src={props.src} alt="" />
        <img src={arrow} alt="" />
      </>
    );
  }

  return (
    <Link to={props.href} onClick={() => window.scrollTo(0, 0)}>
      <div className="flex gap-2 items-center">{jsx}</div>
    </Link>
  );
}
