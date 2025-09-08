import { useMemo } from "react";

export default function Snowfall({ count = 60 }: { count?: number }) {
  const flakes = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 10 + Math.random() * 14;
        const left = Math.random() * 100;
        const dur = 8 + Math.random() * 8;
        const delay = -Math.random() * 10;
        const opacity = 0.35 + Math.random() * 0.55;
        const rotate = Math.random() * 360;
        const char = "❄"; // samo plava pahulja
        return { id: i, size, left, dur, delay, opacity, rotate, char };
      }),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            opacity: f.opacity * 0.3, // vise transparentno
            color: "#3B82F6",
            textShadow: "none",
            background: "transparent",
            transform: `rotate(${f.rotate}deg)`,
            animation: `snow-fall ${f.dur}s linear infinite, snow-drift ${4 + (f.id % 3)}s ease-in-out infinite`,
            animationDelay: `${f.delay}s, ${f.delay}s`,
          } as React.CSSProperties}
        >
          {f.char}
        </span>
      ))}
    </div>
  );
}