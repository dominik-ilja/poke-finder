type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Title = (props: Props) => {

  return (
    <h1 className={`mb-5 text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold text-center dark:text-dark-title ${props.className || ''}`}>
      {props.children}
    </h1>
  );
};

export default Title;
