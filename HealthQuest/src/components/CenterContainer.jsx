export default function CenterContainer({ children, className = "" }) {
  return (
    <div
      className={`flex flex-col md:flex items-center md-items-start justify-center md:justify-between ${className}`}
    >
      {children}
    </div>
  );
}
