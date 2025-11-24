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
          // ↓ Make overlay very light for brightness
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url(${heroImage})`,
          filter: "brightness(1.15) contrast(1.1)", // ↓ Makes image pop
        }}
      />

      {/* Floating Shapes */}
      <FloatingShapes />
    </section>
  );
}
