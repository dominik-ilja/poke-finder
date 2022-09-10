// import spinner from "../assets/spinner.svg";
import IconSpinner from "../../assets/IconSpinner";

const classes = "text-palette-white";
const darkClasses = "dark:text-palette-secondary"

export default function Spinner(props) {
  return (
    <div className="flex justify-center items-center">
      <IconSpinner className={`${classes} ${darkClasses} ${props.className}`} />
    </div>
  );
}
