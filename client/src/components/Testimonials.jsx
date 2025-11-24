import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import parent1Image from "../../attached_assets/generated_images/parent_testimonial_headshot_1.png";
import parent2Image from "../../attached_assets/generated_images/parent_testimonial_headshot_2.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Parent of Emma, Age 4",
      image: parent1Image,
      quote: "Little Learnings has been a blessing for our family. Emma looks forward to school every day and comes home excited to share what she learned. The teachers truly care about each child's growth.",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      role: "Parent of twins, Age 5",
      image: parent2Image,
      quote: "We couldn't be happier with our choice. The kindergarten prep program gave our twins the confidence and skills they needed. The staff is wonderful and the facilities are top-notch!",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      role: "Parent of Noah, Age 3",
      image: parent1Image,
      quote: "As a first-time parent, I was nervous about preschool. The team at Little Learnings made the transition smooth and kept me informed every step of the way. Noah has blossomed here!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            What Parents <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Hear from families who trust us with their most precious gifts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 font-serif italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar data-testid={`avatar-${index}`}>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
