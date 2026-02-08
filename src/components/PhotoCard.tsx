import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface PhotoCardProps {
    imageUrl: string;
    caption: string;
    description?: string;
    className?: string;
    imagePadding?: string;
}

const PhotoCard = ({ imageUrl, caption, description, className = "", imagePadding = "p-4" }: PhotoCardProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className={`group relative overflow-hidden rounded-xl bg-zinc-950 p-2 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer border-2 border-white/10 hover:border-primary/50 ${className}`}
                >
                    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-black flex flex-col items-center justify-center relative border border-white/5">
                        {/* Sparkle effects for mystery feel */}
                        <div className="absolute inset-0 opacity-40 pointer-events-none">
                            <div className="absolute top-2 left-2 text-white text-[8px] animate-pulse">✨</div>
                            <div className="absolute bottom-6 right-4 text-white text-[6px] animate-pulse delay-700">★</div>
                            <div className="absolute top-1/2 left-3 text-white text-[5px] animate-pulse delay-300">✦</div>
                        </div>

                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 border border-white/10">
                            <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500">🎁</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="font-display text-[8px] font-bold text-white/30 tracking-[0.2em] uppercase mb-0.5">Mystery</span>
                            <span className="font-display text-xs font-bold text-white tracking-widest uppercase group-hover:text-primary transition-colors">Surprise</span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg animate-bounce-gentle">
                                Reveal ✨
                            </span>
                        </div>
                    </div>

                    <div className="mt-2 text-center overflow-hidden">
                        <p className="font-display text-[9px] font-medium text-white/20 uppercase tracking-[0.3em] translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                            {caption}
                        </p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[75vw] sm:max-w-[300px] p-0 overflow-hidden border-none bg-transparent shadow-none">
                <DialogHeader className="sr-only">
                    <DialogTitle>{caption}</DialogTitle>
                </DialogHeader>
                <div className={`relative group rounded-3xl overflow-hidden bg-white shadow-2xl ${imagePadding}`}>
                    <img
                        src={imageUrl}
                        alt={caption}
                        className="w-full h-auto rounded-2xl shadow-inner"
                    />
                    <div className="mt-4 text-center px-4 pb-2">
                        <h3 className="font-display text-2xl font-bold text-primary mb-2">{caption}</h3>
                        {description && <p className="font-body text-muted-foreground leading-relaxed">{description}</p>}
                    </div>
                    {/* Decorative elements in dialog */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PhotoCard;
