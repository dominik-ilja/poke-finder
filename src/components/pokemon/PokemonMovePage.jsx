import { Link } from "react-router-dom";
// import arrow from "../assets/arrow.svg";
import IconArrow from "../../assets/IconArrow";

export default function PokemonMovePage(props) {
  let jsx = null;
  let classes = "";

  if (props.type === "left") {
    classes = "mr-auto";
    jsx = (
      <>
        <IconArrow className="w-4 text-white rotate-180" />
        {/* <img className="" src={arrow} alt="" /> */}
        <img className="w-12" src={props.src} alt="" />
        {props.children}
      </>
    );
  } else {
    classes = "ml-auto";
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
    <Link className={classes} to={props.href} onClick={() => window.scrollTo(0, 0)}>
      <div className="flex items-center gap-2">{jsx}</div>
    </Link>
  );
}
