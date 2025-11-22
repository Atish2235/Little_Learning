import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import toddlersImage from "@assets/generated_images/toddlers_playing_with_blocks.png";
import preKImage from "@assets/generated_images/pre-k_arts_and_crafts.png";
import kindergartenImage from "@assets/generated_images/kindergarten_science_exploration.png";

export default function Programs() {
  const programs = [
    {
      title: "Toddler Program",
      age: "18 months - 3 years",
      image: toddlersImage,
      description: "Gentle introduction to social play, sensory exploration, and basic routines in a nurturing environment.",
      highlights: ["Sensory Play", "Music & Movement", "Early Language"],
      color: "primary",
    },
    {
      title: "Pre-K Program",
      age: "3 - 4 years",
      image: preKImage,
      description: "Creative activities that build social skills, pre-literacy foundations, and love of learning through play.",
      highlights: ["Art & Creativity", "Early Math", "Social Skills"],
      color: "secondary",
    },
    {
      title: "Kindergarten Prep",
      age: "5 - 6 years",
      image: kindergartenImage,
      description: "School readiness focus with advanced learning activities, STEM exploration, and independence building.",
      highlights: ["Reading Readiness", "STEM Activities", "Critical Thinking"],
      color: "accent",
    },
  ];

  return (
    <section id="programs" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Age-appropriate curricula designed to meet your child's developmental needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer" 
              data-testid={`card-program-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 bg-${program.color} text-${program.color}-foreground`}
                  data-testid={`badge-age-${index}`}
                >
                  {program.age}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground mb-4 font-serif">{program.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.highlights.map((highlight, i) => (
                    <Badge key={i} variant="outline" data-testid={`badge-highlight-${index}-${i}`}>
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" className="group" data-testid={`button-learn-${index}`}>
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
