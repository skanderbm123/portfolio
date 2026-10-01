// Little decorative SVG shapes used around the page.

export function Burst({ className = "", fill = "var(--accent-2)", children }) {
  // 14-point starburst sticker
  const pts = Array.from({ length: 28 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 28;
    const r = i % 2 ? 40 : 50;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <div className={`grid place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
        <polygon points={pts} fill={fill} stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <div className="relative text-center">{children}</div>
    </div>
  );
}

export function Star({ className = "", fill = "var(--accent)" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2.2l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17l-6 3.3 1.3-6.6L2.4 9.1l6.7-.8z"
        fill={fill}
        stroke="var(--ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "", color = "var(--accent-2)" }) {
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M2 8c12-10 20 10 32 0s20 10 32 0 20 10 32 0 20 10 32 0 20 10 32 0 20 10 32 0"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Plus({ className = "", color = "var(--ink)" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3v18M3 12h18" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
