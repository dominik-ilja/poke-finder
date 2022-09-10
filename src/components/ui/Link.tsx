type Props = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

const Link = (props: Props) => {
  return (
    <a className={`text-palette-link hover:text-palette-primary focus-visible:text-palette-primary transition-colors dark:text-palette-secondary dark:hover:text-palette-white dark:focus-visible:text-palette-white ${props.className || ''}`}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default Link;
