import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: "balloon" | "heart" | "sparkle";
}

const emojis = {
  balloon: ["🎈", "🩷", "🎀"],
  heart: ["❤️", "💕", "💗"],
  sparkle: ["✨", "⭐", "🌸"],
};

const FloatingDecorations = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const types: FloatingItem["type"][] = ["balloon", "heart", "sparkle"];
    const generated: FloatingItem[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: 16 + Math.random() * 14,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 8,
      type: types[i % 3],
    }));
    setItems(generated);
  }, []);

  const getEmoji = (item: FloatingItem) => {
    const list = emojis[item.type];
    return list[item.id % list.length];
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute animate-float-up"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {getEmoji(item)}
        </span>
      ))}
    </div>
  );
};

export default FloatingDecorations;
