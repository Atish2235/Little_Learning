import { Card } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";
import aboutImage from "../../attached_assets/generated_images/teacher_reading_with_children.png";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Students" },
    { icon: Award, value: "14+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Parent Satisfaction" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse" />
            <img
              src={aboutImage}
              alt="Teacher reading with children"
              className="relative rounded-3xl shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Welcome to
              <span className="block text-primary">Little Learnings</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 font-serif">
              At Little Learnings, we believe every child is unique and deserves a nurturing environment where they can explore, discover, and grow. Our experienced educators create engaging, play-based learning experiences that inspire curiosity and build confidence.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 font-serif">
              With a focus on social-emotional development, creative expression, and hands-on learning, we prepare children for success in school and beyond.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-4 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
