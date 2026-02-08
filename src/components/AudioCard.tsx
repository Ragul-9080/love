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
        btn-pill w-full flex items-center justify-center gap-2 text-base
        ${isPlaying ? "btn-pill-active scale-105" : ""}
      `}
    >
      <span className={isPlaying ? "animate-pulse-heart" : ""}>{emoji}</span>
      <span>{title}</span>
      {isPlaying && <span className="text-sm">🎧</span>}
    </button>
  );
};

export default AudioCard;
