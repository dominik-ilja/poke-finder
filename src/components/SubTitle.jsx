export default function SubTitle(props) {
  return (
    <h2 className={`mb-1 text-lg font-semibold text-center ${props.className}`}>
      {props.children}
    </h2>
  );
}
