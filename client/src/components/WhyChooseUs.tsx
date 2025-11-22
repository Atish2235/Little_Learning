import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Star } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description: "Certified educators passionate about early childhood development",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "Safe, loving space where every child feels valued and supported",
      color: "text-destructive",
      bg: "bg-destructive/10",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Individual attention with low teacher-to-student ratios",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Star,
      title: "Play-Based Learning",
      description: "Hands-on activities that make learning fun and engaging",
      color: "text-accent",
      bg: "bg-accent/20",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">Little Learnings</span>?
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            We provide exceptional early childhood education that sets the foundation for lifelong learning
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate active-elevate-2 cursor-pointer" 
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-16 h-16 rounded-full ${feature.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
