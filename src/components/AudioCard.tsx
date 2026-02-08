interface AudioCardProps {
  emoji: string;
  title: string;
  isPlaying: boolean;
  onClick: () => void;
}

const AudioCard = ({ emoji, title, isPlaying, onClick }: AudioCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full rounded-2xl p-6 text-center
        bg-card card-glow border border-border
        transition-all duration-300 ease-out cursor-pointer
        hover:scale-105 hover:shadow-lg
        active:scale-95
        ${isPlaying ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
      `}
    >
      <span className="text-4xl block mb-3 transition-transform duration-300 group-hover:scale-110">
        {emoji}
      </span>
      <span className="font-body text-card-foreground font-medium text-sm">
        {title}
      </span>
      {isPlaying && (
        <span className="block mt-2 text-xs text-primary font-medium animate-pulse-soft">
          Now Playing 🎧
        </span>
      )}
    </button>
  );
};

export default AudioCard;
