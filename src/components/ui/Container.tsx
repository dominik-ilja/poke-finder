type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div className={`sm:max-w-2xl lg:max-w-5xl mx-auto px-4 ${props.className || ''}`}>
      {props.children}
    </div>
  );
};

export default Container;
