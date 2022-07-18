export default function Text(props) {
  return (
    <p className={`md:text-lg lg:text-xl mb-5 ${props.className}`}>
      {props.children}
    </p>
  );
}
