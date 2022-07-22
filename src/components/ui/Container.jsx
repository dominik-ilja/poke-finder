export default function Container({ className, children, ...props }) {
  return (
    <div className={`sm:max-w-2xl lg:max-w-5xl mx-auto px-4 ${className}`}>{children}</div>
  );
}
