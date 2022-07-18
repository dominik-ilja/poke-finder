export default function NumberedList(props) {
  return (
    <ol
      className={`pl-4 mb-5 list-decimal list-outside md:text-lg lg:text-xl ${props.className}`}
    >
      {props.children}
    </ol>
  );
}
