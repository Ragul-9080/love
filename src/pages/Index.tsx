import { useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import AudioCard from "@/components/AudioCard";

const cards = [
  { id: "message", emoji: "💖", title: "My Message" },
  { id: "song", emoji: "🎶", title: "Our Song" },
  { id: "secret", emoji: "🥰", title: "A Secret Note" },
];

// Using royalty-free placeholder audio URLs — replace with your own audio files
const audioSources: Record<string, string> = {
  message:
    "https://cdn.pixabay.com/audio/2024/11/29/audio_7e3b8e9a33.mp3",
  song:
    "https://cdn.pixabay.com/audio/2022/10/25/audio_582aac4b08.mp3",
  secret:
    "https://cdn.pixabay.com/audio/2024/02/07/audio_98eda62506.mp3",
};

const Index = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCardClick = (id: string) => {
    // If same card is clicked, toggle off
    if (playing === id) {
      audioRef.current?.pause();
      setPlaying(null);
      return;
    }

    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioSources[id]);
    audio.volume = 0.6;
    audio.play().catch(() => {});
    audio.onended = () => setPlaying(null);
    audioRef.current = audio;
    setPlaying(id);
  };

  return (
    <div className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center px-6 py-16 max-w-lg mx-auto min-h-screen">
        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center mb-12">
          <span className="text-6xl mb-4 animate-pulse-soft">❤️</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
            Happy Birthday My Love
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            This little website is made only for you
          </p>
        </section>

        {/* Cards */}
        <section className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 mb-16">
          {cards.map((card) => (
            <AudioCard
              key={card.id}
              emoji={card.emoji}
              title={card.title}
              isPlaying={playing === card.id}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </section>

        {/* Footer message */}
        <section className="text-center pb-12">
          <p className="font-display text-2xl sm:text-3xl text-primary/80 leading-relaxed">
            Thank you for being the most beautiful part of my life 💕
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
