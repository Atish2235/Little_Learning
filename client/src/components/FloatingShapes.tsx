import { Star, Sparkles, Heart, Circle } from "lucide-react";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Star className="absolute top-20 left-10 w-12 h-12 text-accent animate-float opacity-60" />
      <Sparkles className="absolute top-40 right-20 w-10 h-10 text-secondary animate-float-delayed opacity-60" />
      <Heart className="absolute bottom-40 left-20 w-14 h-14 text-primary animate-bounce-slow opacity-50" />
      <Circle className="absolute bottom-20 right-40 w-16 h-16 text-accent animate-float opacity-40" />
      <Star className="absolute top-60 right-10 w-8 h-8 text-primary animate-float-delayed opacity-50" />
    </div>
  );
}
