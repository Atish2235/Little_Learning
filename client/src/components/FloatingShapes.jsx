import { Star, Heart, Cloud, PartyPopper, Sparkles, Circle } from "lucide-react";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* 🌟 Floating Stars */}
      <Star className="absolute top-24 left-10 w-10 h-10 text-yellow-300 animate-float opacity-80" />
      <Star className="absolute top-56 right-16 w-8 h-8 text-yellow-400 animate-float-delayed opacity-90" />
      <Sparkles className="absolute top-40 left-1/2 w-12 h-12 text-orange-300 animate-spin-slow opacity-70" />

      {/* ☁️ Clouds */}
      <Cloud className="absolute top-10 right-10 w-20 h-20 text-white/80 animate-cloud" />
      <Cloud className="absolute bottom-24 left-10 w-24 h-24 text-white/60 animate-cloud-delayed" />

      {/* 🎉 Party poppers instead of balloons */}
      <PartyPopper className="absolute bottom-36 left-1/3 w-12 h-12 text-pink-400 animate-bounce-slow opacity-90" />
      <PartyPopper className="absolute top-52 right-1/4 w-10 h-10 text-purple-400 animate-bounce-slower opacity-90" />

      {/* ❤️ Cute Hearts */}
      <Heart className="absolute bottom-20 right-40 w-14 h-14 text-red-400 animate-float opacity-70" />
      <Heart className="absolute top-[65%] left-[15%] w-10 h-10 text-pink-500 animate-float-delayed opacity-60" />

      {/* 🪐 Simple planet */}
      <Circle className="absolute top-[30%] left-[70%] w-16 h-16 text-blue-400 animate-rotate opacity-50" />
    </div>
  );
}
