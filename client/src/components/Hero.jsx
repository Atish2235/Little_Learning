import FloatingShapes from "./FloatingShapes";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06), rgba(255,255,255,0.06)), url(${heroImage})`,
          filter: "brightness(1.25) contrast(1.15) saturate(1.2)",
        }}
      />

      {/* Floating Shapes */}
      <FloatingShapes />
    </section>
  );
}
