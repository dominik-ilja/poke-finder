export default function PageContainer(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};
