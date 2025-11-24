import playgroundImage from "../../attached_assets/generated_images/outdoor_playground_fun.png";
import musicImage from "../../attached_assets/generated_images/music_class_activity.png";
import readingImage from "../../attached_assets/generated_images/reading_corner_moment.png";

export default function GalleryFull() {
  const images = [
    { src: playgroundImage, alt: "Children playing on playground" },
    { src: musicImage, alt: "Music class with instruments" },
    { src: readingImage, alt: "Reading corner activities" },
    { src: playgroundImage, alt: "Outdoor activities" },
    { src: musicImage, alt: "Creative learning time" },
    { src: readingImage, alt: "Story time circle" },
    { src: playgroundImage, alt: "Kids on slide" },
    { src: musicImage, alt: "Singing session" },
    { src: readingImage, alt: "Quiet reading time" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Full Photo Gallery
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
