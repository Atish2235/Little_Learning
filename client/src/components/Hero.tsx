import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import heroImage from "@assets/generated_images/hero_classroom_learning_scene.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      />
      
      <FloatingShapes />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Where Little Minds
          <span className="block text-accent">Grow Big Dreams</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-white/90 font-serif">
          Nurturing curiosity, creativity, and confidence in every child
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 bg-primary/90 backdrop-blur-sm hover:bg-primary border border-white/20"
            data-testid="button-hero-schedule"
          >
            Schedule a Tour <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white/40 hover:bg-white/20"
            data-testid="button-hero-learn"
          >
            Learn More
          </Button>
        </div>
        
        <p className="mt-12 text-white/80 text-lg">
          ⭐ Serving families since 2010
        </p>
      </div>
    </section>
  );
}
