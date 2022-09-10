type Props = {
  children?: never;
  className?: string;
};

const IconDownArrowCircle = (props: Props) => {
  return (
    <svg
      className={`text-light-bg dark:text-palette-secondary ${props.className || ''}`}
      fill='none'
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentcolor"
        d="M12.5 2.5C18.0125 2.5 22.5 6.9875 22.5 12.5C22.5 18.0125 18.0125 22.5 12.5 22.5C6.9875 22.5 2.5 18.0125 2.5 12.5C2.5 6.9875 6.9875 2.5 12.5 2.5ZM12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM13.75 12.5V7.5H11.25V12.5H7.5L12.5 17.5L17.5 12.5H13.75Z" />
    </svg>
  );
};

export default IconDownArrowCircle;
