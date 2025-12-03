import { useEffect, useState } from "react";
import FloatingShapes from "./FloatingShapes";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";
import heroImage2 from "../../attached_assets/generated_images/hero_classroom_learning_scene2.png";

export default function Hero() {
  // Use an array of 4 images. Replace duplicates with other images if/when available.
  const slides = [heroImage, heroImage2, heroImage, heroImage2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // 2 seconds
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-20"
    >
      {/* Background slides (4 layers) */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out`}
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.06), rgba(255,255,255,0.06)), url(${src})`,
              filter: "brightness(1.25) contrast(1.15) saturate(1.2)",
              backgroundPosition: "center top",
              backgroundSize: "cover",
              opacity: i === currentIndex ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      {/* Darkish overlay for better text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(30, 27, 75, 0.55), rgba(255,255,255,0.20) 80%, transparent 100%)",
        }}
      />

      {/* subtle overlay on small screens to reduce busy-ness and improve contrast */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-none">
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
      </div>

      {/* Floating Shapes
          - full component kept for md+ (desktop/tablet)
          - compact, well-aligned blurred circles for mobile
          - pointer-events-none so shapes never block taps */}
      <div className="hidden md:block pointer-events-none">
        <FloatingShapes />
      </div>

      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* top-right small accent */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-300 opacity-30 rounded-full filter blur-2xl transform translate-x-4"></div>

        {/* left accent under nav */}
        <div className="absolute top-14 left-4 w-16 h-16 bg-yellow-300 opacity-25 rounded-full filter blur-2xl"></div>

        {/* bottom-center soft blob */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-300 opacity-18 rounded-full filter blur-3xl"></div>
      </div>

      {/* slide indicators (dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-white/90 scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* central content placeholder (keeps hero height/content alignment stable) */}
      <div className="relative z-20 w-full max-w-5xl px-4 sm:px-6">
        {/* ...existing hero inner content (if any) will remain here ... */}
      </div>
    </section>
  );
}
