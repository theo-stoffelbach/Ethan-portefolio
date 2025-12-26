export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dégradé */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Cercle extérieur */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Texte ESD */}
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="url(#logoGradient)"
        fontFamily="Georgia, serif"
        fontSize="14"
        fontWeight="bold"
        letterSpacing="1"
      >
        ESD
      </text>
    </svg>
  );
}
