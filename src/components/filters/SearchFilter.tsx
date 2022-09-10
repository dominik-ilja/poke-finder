import IconSearch from "../icons/IconSearch";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler;
};

const SearchFilter = (props: Props) => {
  return (
    <div className="relative w-full mb-12">
      <label className="absolute -translate-y-1/2 left-2 top-1/2" htmlFor="filter-input">
        <IconSearch />
      </label>
      <input
        className="w-full py-1 pl-10 rounded-md bg-dark text-light-text dark:bg-dark-bg dark:text-palette-secondary"
        name="filter-input"
        id="filter-input"
        placeholder="search"
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default SearchFilter;
