type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Text = (props: Props) => {
  return (
    <p className={`md:text-lg lg:text-xl mb-5 text-light-text dark:text-dark-text ${props.className || ""}`}>
      {props.children}
    </p>
  );
};

export default Text;
