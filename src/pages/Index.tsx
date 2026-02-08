import { useRef, useState } from "react";
import Bunting from "@/components/Bunting";
import FloatingDecorations from "@/components/FloatingDecorations";
import PartyHat from "@/components/PartyHat";
import AudioCard from "@/components/AudioCard";
import PhotoCard from "@/components/PhotoCard";
import SurpriseLetter from "@/components/SurpriseLetter";
import birthdayGirl from "@/assets/birthday-girl.png";
import photo1 from "@/assets/photos/photo1.jpeg";
import photo2 from "@/assets/photos/photo2.jpeg";
import photo3 from "@/assets/photos/photo3.jpeg";
import photo4 from "@/assets/photos/photo4.jpeg";
import photo5 from "@/assets/photos/photo5.jpeg";

const cards = [
  { id: "message", emoji: "💖", title: "My Message" },
  { id: "song", emoji: "🎶", title: "Our Song" },
  { id: "secret", emoji: "🥰", title: "A Secret Note" },
];

// Placeholder audio — replace with your own audio file URLs
const audioSources: Record<string, string> = {
  message: "https://cdn.pixabay.com/audio/2024/11/29/audio_7e3b8e9a33.mp3",
  song: "https://cdn.pixabay.com/audio/2022/10/25/audio_582aac4b08.mp3",
  secret: "https://cdn.pixabay.com/audio/2024/02/07/audio_98eda62506.mp3",
};

const Index = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCardClick = (id: string) => {
    if (playing === id) {
      audioRef.current?.pause();
      setPlaying(null);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioSources[id]);
    audio.volume = 0.6;
    audio.play().catch(() => { });
    audio.onended = () => setPlaying(null);
    audioRef.current = audio;
    setPlaying(id);
  };

  return (
    <div className="relative min-h-screen bg-background bg-polka overflow-hidden">
      <FloatingDecorations />

      <div className="relative z-10 flex flex-col items-center max-w-md mx-auto min-h-screen">
        {/* Bunting Banner */}
        <Bunting />

        {/* Happy Birthday Title + Party Hat */}
        <section className="relative flex flex-col items-center mt-2 mb-6 px-4">
          <div className="absolute -right-2 -top-2 rotate-12">
            <PartyHat />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-primary leading-tight tracking-tight text-center">
            Happy
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-foreground leading-tight tracking-tight text-center -mt-1">
            Birthday!
          </h1>
        </section>

        {/* Date Banner */}
        <div className="date-banner flex items-center gap-3 mb-6">
          <span>❋ ❋</span>
          <span>9 FEB ....</span>
          <span>★</span>
        </div>

        {/* Click Here Button with Surprise Letter */}
        <SurpriseLetter />

        {/* Circular Photo */}
        <section className="relative mb-6">
          <div className="photo-circle w-52 h-52 sm:w-60 sm:h-60">
            <img
              src={birthdayGirl}
              alt="Birthday celebration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Rotating badge */}
          <div className="absolute -right-6 bottom-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-spin-slow shadow-lg"
            style={{ animation: "spin 8s linear infinite" }}
          >
            <span className="text-primary-foreground font-display text-[8px] font-bold leading-tight text-center">
              HAPPY<br />BIRTHDAY
            </span>
          </div>
          {/* Hearts */}
          <span className="absolute -left-4 bottom-6 text-2xl animate-pulse-heart">❤️</span>
          <span className="absolute -right-2 top-4 text-xl animate-pulse-heart" style={{ animationDelay: "0.5s" }}>
            💕
          </span>
        </section>

        {/* Name Banner */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl animate-pulse-heart">❤️</span>
          <div className="date-banner text-lg">Chithu</div>
          <span className="text-xl animate-pulse-heart" style={{ animationDelay: "0.3s" }}>❤️</span>
        </div>

        {/* Now Playing indicator */}
        {playing && (
          <div className="mb-4 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-medium animate-bounce-gentle">
            Now Playing 🎧
          </div>
        )}

        {/* Audio Card Buttons */}
        <section className="w-full px-6 grid grid-cols-2 gap-3 mb-10">
          {cards.map((card) => (
            <AudioCard
              key={card.id}
              emoji={card.emoji}
              title={card.title}
              isPlaying={playing === card.id}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
          <AudioCard
            emoji="🌹"
            title="Click for Flower"
            isPlaying={false}
            onClick={() => { }}
          />
        </section>

        {/* Memories / Photo Cards Section */}
        <section className="w-full px-6 mb-12">
          <h2 className="font-display text-2xl font-bold text-center text-primary mb-6">Our Memories ✨</h2>
          <div className="grid grid-cols-3 gap-3">
            <PhotoCard
              imageUrl={photo1}
              caption="Our First Date"
              description="Thinking back to the day it all started. You looked so beautiful, and I knew right then that you were special. ❤️"
              className="-rotate-2"
            />
            <PhotoCard
              imageUrl={photo2}
              caption="Sunset Walks"
              description="Walking hand in hand as the sky turns golden. Every moment with you is like a dream. 🌅"
              className="rotate-3 mt-4"
              imagePadding="p-12"
            />
            <PhotoCard
              imageUrl={photo3}
              caption="Sweet Moments"
              description="The little things are what I love most. Your laugh, your smile, and the way you look at me. 🥰"
              className="rotate-1"
            />
            <PhotoCard
              imageUrl={photo4}
              caption="Together Always"
              description="Every second spent with you is a treasure I'll keep forever. 💖"
              className="-rotate-3 mt-4"
            />
            <PhotoCard
              imageUrl={photo5}
              caption="Forever Yours"
              description="To many more birthdays and beautiful memories together. I love you more than words can say. 💕"
              className="rotate-2"
              imagePadding="p-12"
            />
          </div>
        </section>

        {/* Footer Message */}
        <section className="text-center px-6 pb-16">
          <p className="font-display text-2xl text-primary leading-relaxed">
            Thank you for being the most beautiful part of my life 💕
          </p>
          <p className="font-body text-muted-foreground text-sm mt-3">
            Made with ❤️ just for you
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
