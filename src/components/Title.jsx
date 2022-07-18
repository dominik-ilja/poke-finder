export default function Title(props) {
  return (
    <h1
      className={`mb-5 text-2xl md:text-3xl lg:text-5xl font-semibold text-center ${props.className}`}
    >
      {props.children}
    </h1>
  );
}
