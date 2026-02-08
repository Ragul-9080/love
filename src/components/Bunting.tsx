const Bunting = () => {
  const flags = Array.from({ length: 9 });
  return (
    <div className="relative w-full h-16 overflow-hidden">
      {/* String */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
        <path
          d="M0 10 Q100 50, 200 15 Q300 50, 400 10"
          fill="none"
          stroke="hsl(350 40% 75%)"
          strokeWidth="2"
        />
      </svg>
      {/* Flags */}
      <div className="absolute top-2 left-0 w-full flex justify-around px-4">
        {flags.map((_, i) => (
          <div
            key={i}
            className="animate-sway"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <svg width="24" height="30" viewBox="0 0 24 30">
              <polygon
                points="0,0 24,0 12,30"
                fill={i % 2 === 0 ? "hsl(350, 75%, 60%)" : "hsl(350, 60%, 80%)"}
                opacity={i % 3 === 0 ? "0.9" : "0.7"}
              />
              {i % 2 === 0 && (
                <>
                  <circle cx="12" cy="8" r="1.5" fill="hsl(350, 60%, 80%)" />
                  <circle cx="8" cy="14" r="1" fill="hsl(350, 60%, 80%)" />
                  <circle cx="16" cy="12" r="1" fill="hsl(350, 60%, 80%)" />
                </>
              )}
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bunting;
