import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const SurpriseLetter = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn-pill mb-8 text-base flex items-center gap-2 group hover:scale-105 transition-transform active:scale-95">
                    Click here My Love <span className="group-hover:rotate-12 transition-transform">✉️</span>
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-[85vw] sm:max-w-[340px] p-0 overflow-hidden border-none bg-transparent shadow-none">
                <div className="relative bg-[#FFFBEB] rounded-3xl p-8 shadow-2xl border-2 border-[#FEF3C7]">
                    {/* Close button handled by Dialog primitive but we can add a custom one if needed */}

                    <div className="text-center mb-8">
                        <h3 className="font-handwriting text-3xl text-[#92400E] flex items-center justify-center gap-2">
                            To you <span className="animate-pulse-heart text-red-500">❤️</span>
                        </h3>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-full flex justify-center">
                            {/* Vertical line from image */}
                            <div className="absolute left-1/2 -top-4 -bottom-4 w-[1px] bg-[#92400E]/20" />

                            <div className="grid grid-cols-2 w-full items-center">
                                <div className="flex justify-center p-2 z-10">
                                    <div className="w-32 h-32 bg-[#FDE2E4] rounded-2xl flex items-center justify-center shadow-inner overflow-hidden border-4 border-white">
                                        <span className="text-6xl animate-bounce-gentle">🧸</span>
                                    </div>
                                </div>
                                <div className="p-4 z-10">
                                    <p className="font-handwriting text-xl text-[#92400E] leading-relaxed">
                                        Every day with you is a gift I never knew I needed...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-[#92400E]/10 my-2" />

                        <div className="space-y-4 text-center">
                            <p className="font-body text-[#78350F] italic">
                                "You are the sun that brightens my day and the stars that light up my night. Thank you for being you, my love."
                            </p>
                        </div>

                        <div className="flex justify-center mt-4">
                            <div className="text-4xl animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>
                                🐰
                            </div>
                        </div>

                        <div className="mt-2 text-[#92400E] font-handwriting text-2xl">
                            Love you forever! ✨
                        </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 text-[#92400E]/20 text-xl">❀</div>
                    <div className="absolute bottom-4 right-4 text-[#92400E]/20 text-xl">❀</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SurpriseLetter;
