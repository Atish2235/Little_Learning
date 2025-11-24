import { Card } from "@/components/ui/card";
import gallery1 from "../../attached_assets/generated_images/reading_corner_moment.png";
import gallery2 from "../../attached_assets/generated_images/outdoor_playground_fun.png";
import gallery3 from "../../attached_assets/generated_images/music_class_activity.png";
import gallery4 from "../../attached_assets/generated_images/teacher_reading_with_children.png";
import gallery5 from "../../attached_assets/generated_images/toddlers_playing_with_blocks.png";
import gallery6 from "../../attached_assets/generated_images/pre-k_arts_and_crafts.png";

export default function Gallery() {
  const photos = [
    { src: gallery1, rotation: "-rotate-2" },
    { src: gallery2, rotation: "rotate-2" },
    { src: gallery3, rotation: "-rotate-1" },
    { src: gallery4, rotation: "rotate-1" },
    { src: gallery5, rotation: "-rotate-3" },
    { src: gallery6, rotation: "rotate-3" },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50 overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute top-16 left-20 w-36 h-36 bg-yellow-300/40 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-16 right-20 w-40 h-40 bg-pink-300/40 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            A glimpse into the colorful, joyful world of our little learners
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className={`
                p-4 bg-white shadow-lg rounded-3xl 
                hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 cursor-pointer
                relative ${photo.rotation}
              `}
            >
              {/* Cute Sticker Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-yellow-300 rounded-full shadow-md border-2 border-white z-10"></div>

              <div className="rounded-2xl overflow-hidden">
                <img
                  src={photo.src}
                  alt="gallery photo"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Decorative tape */}
              <div className="absolute bottom-2 right-4 w-16 h-4 bg-blue-300/70 rotate-6 rounded-sm"></div>
              <div className="absolute top-4 left-2 w-14 h-4 bg-pink-300/70 -rotate-6 rounded-sm"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
