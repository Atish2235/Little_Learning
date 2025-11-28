import React from "react";
import Navigation from "@/components/Navigation";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";

const GalleryPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const images = [
    "attached_assets/generated_images/hero_classroom_learning_scene.png",
    "attached_assets/generated_images/music_class_activity.png",
    "attached_assets/generated_images/outdoor_playground_fun.png",
    "attached_assets/generated_images/teacher_reading_with_children.png",
    "attached_assets/generated_images/toddlers_playing_with_blocks.png",
    "attached_assets/generated_images/toddlers_playing_with_blocks.png",
    "attached_assets/generated_images/gallery6.jpg",
    "attached_assets/generated_images/gallery7.jpg",
    "attached_assets/generated_images/gallery8.jpg",
    "attached_assets/generated_images/gallery9.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[18vh] sm:min-h-[22vh] md:min-h-[28vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(1.05) contrast(1.05) saturate(1.05)",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(30, 27, 75, 0.10), rgba(255,255,255,0.10) 80%, transparent 100%)"
          }}
        />
        <div className="relative z-20 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg py-8">
            Our Gallery
          </h1>
          <nav className="mt-2 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 font-medium bg-white/60 rounded-full px-4 py-1 shadow-sm backdrop-blur-sm">
              <li>
                <a
                  href="/"
                  className="hover:underline text-pink-600 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li className="text-purple-700 font-bold">Gallery</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-20">
        {/* Gallery Grid */}
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className={`bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-3 md:p-4 border border-transparent transform transition duration-300 hover:scale-105 hover:rotate-1 ${
                index % 3 === 0
                  ? "rotate-1"
                  : index % 3 === 1
                  ? "-rotate-1"
                  : "rotate-2"
              } relative
                hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
                before:content-[''] before:absolute before:inset-0 before:rounded-3xl
                before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
                before:opacity-15 before:-z-10
              `}
              style={{ zIndex: 1, overflow: "hidden" }}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Want to Visit Our Campus?
          </h2>
          <p className="text-gray-700 mt-2">
            Come experience the joyful world of Little Learnings in person.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-2xl text-lg shadow-lg hover:opacity-90 transition"
          >
            Book a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
