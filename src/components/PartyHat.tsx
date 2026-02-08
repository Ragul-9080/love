const PartyHat = () => (
  <svg
    width="80"
    height="100"
    viewBox="0 0 80 100"
    className="drop-shadow-lg"
  >
    {/* Hat body */}
    <polygon
      points="40,5 10,90 70,90"
      fill="hsl(350, 75%, 60%)"
    />
    {/* Polka dots */}
    <circle cx="30" cy="60" r="3" fill="hsl(350, 60%, 80%)" />
    <circle cx="45" cy="45" r="3" fill="hsl(350, 60%, 80%)" />
    <circle cx="38" cy="72" r="2.5" fill="hsl(350, 60%, 80%)" />
    <circle cx="50" cy="62" r="2" fill="hsl(350, 60%, 80%)" />
    <circle cx="35" cy="35" r="2" fill="hsl(0, 0%, 20%)" opacity="0.15" />
    {/* Star on top */}
    <text x="33" y="12" fontSize="14">⭐</text>
    {/* Brim */}
    <ellipse cx="40" cy="90" rx="32" ry="6" fill="hsl(210, 30%, 25%)" />
  </svg>
);

export default PartyHat;
