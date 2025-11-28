import React from "react";
import Navigation from "@/components/Navigation";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";

const GalleryPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[18vh] sm:min-h-[22vh] md:min-h-[28vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.10), rgba(255,255,255,0.10)), url(${heroImage})`,
            filter: "brightness(1.18) contrast(1.10) saturate(1.15)",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(30, 27, 75, 0.55), rgba(255,255,255,0.20) 80%, transparent 100%)"
          }}
        />
        <div className="md:hidden absolute inset-0 pointer-events-none z-10">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-300 opacity-30 rounded-full filter blur-2xl translate-x-4"></div>
          <div className="absolute top-14 left-4 w-16 h-16 bg-yellow-300 opacity-25 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-300 opacity-20 rounded-full filter blur-3xl"></div>
        </div>
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

      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl"></div>
      <div className="absolute top-20 -right-10 w-52 h-52 bg-purple-300/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      {/* Page Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-20">
        {/* Gallery Grid */}
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-3 md:p-4 border border-white transform transition duration-300 hover:scale-105 hover:rotate-1 ${
                index % 3 === 0
                  ? "rotate-1"
                  : index % 3 === 1
                  ? "-rotate-1"
                  : "rotate-2"
              }`}
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
