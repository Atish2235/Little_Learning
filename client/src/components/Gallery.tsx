import { Button } from "@/components/ui/button";
import playgroundImage from "@assets/generated_images/outdoor_playground_fun.png";
import musicImage from "@assets/generated_images/music_class_activity.png";
import readingImage from "@assets/generated_images/reading_corner_moment.png";

export default function Gallery() {
  const images = [
    { src: playgroundImage, alt: "Children playing on playground", tall: true },
    { src: musicImage, alt: "Music class with instruments", tall: false },
    { src: readingImage, alt: "Reading corner activities", tall: false },
    { src: playgroundImage, alt: "Outdoor activities", tall: false },
    { src: musicImage, alt: "Creative learning time", tall: true },
    { src: readingImage, alt: "Story time circle", tall: false },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            A Day at <span className="text-primary">Little Learnings</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            See the joy, creativity, and learning that happens every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl hover-elevate active-elevate-2 cursor-pointer ${
                image.tall ? 'row-span-2' : ''
              }`}
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full" data-testid="button-view-all">
            View Full Gallery <span className="ml-2">📸</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
