export default function Container(props) {
  return (
    <div
      className={`${props.className} pl-2 pr-2 ml-auto mr-auto 2xs:max-w-md md:max-w-2xl`}
    >
      {props.children}
    </div>
  );
}
