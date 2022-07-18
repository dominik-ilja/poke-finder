import search from "../assets/search.svg";

export default function Searchbar(props) {
  return (
    <div className={`relative w-full ${props.className}`}>
      <input
        className="w-full py-1 pl-8 rounded-md bg-dark text-secondary"
        placeholder="Search"
        type="text"
        onChange={props.onChange}
      />
      <img
        className="absolute -translate-y-1/2 top-1/2 left-2"
        src={search}
        alt=""
      />
    </div>
  );
}
