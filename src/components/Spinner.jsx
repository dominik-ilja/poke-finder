import spinner from "../assets/spinner.svg";

export default function Spinner(props) {
  return (
    <div className="flex justify-center items-center">
      <img className={`w-12 ${props.className}`} src={spinner} alt="" />
    </div>
  );
}
