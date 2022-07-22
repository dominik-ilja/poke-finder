import IconSearch from "../../assets/IconSearch";
import SearchFilterInput from "./SearchFilterInput";

const classes = "relative w-full mb-12"

export default function SearchFilter(props) {
  return (
    <div className={`${classes} ${props.className || ""}`}>
      <label className="absolute left-2 top-1/2 -translate-y-1/2" htmlFor="filter-input">
        <IconSearch svg="w-5" />
      </label>
      <SearchFilterInput id="filter-input" value={props.value} onChange={props.onChange} />
    </div>
  );
};
