import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import RowCell from "./RowCell";

export default function ListRow({ data, ...props }) {
  const mappedTypes = data.type.map(type => (
    <div
      key={uuid()}
      className={`flex items-center justify-center capitalize bg-type-${type} text-white h-full`}
    >
      {type}
    </div>
  ));

  return (
    <Link
      className={`focus:z-10 ${props.className}`}
      to={`/pokemon/${data.dex}`}
    >
      <RowCell className="px-1">{data.id}</RowCell>

      <RowCell>
        <img className="max-w-[50px]" src={data.sprite} alt="" />
      </RowCell>

      <RowCell className="px-1 capitalize">{data.name}</RowCell>

      <RowCell className="grid grid-cols-[1fr] auto-rows-[1fr]">
        {mappedTypes}
      </RowCell>
    </Link>
  );
}
