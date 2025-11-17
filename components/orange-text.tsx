export default function OrangeText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, black, #EF5021, black, #EF5021, black, #EF5021, black)",
        backgroundSize: "200% 100%",
        animation: "gradientPulse 20s ease-in-out infinite",
      }}
    >
      {text}
    </span>
  );
}
