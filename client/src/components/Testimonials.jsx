import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Sparkles } from "lucide-react";
import parent1Image from "../../attached_assets/generated_images/parent_testimonial_headshot_1.png";
import parent2Image from "../../attached_assets/generated_images/parent_testimonial_headshot_2.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Parent of Emma, Age 4",
      image: parent1Image,
      quote:
        "Little Learnings has been a blessing! Emma wakes up excited for school every day. The teachers truly care and make learning magical.",
      rating: 5,
      color: "from-pink-400 to-red-400",
    },
    {
      name: "Michael Johnson",
      role: "Parent of Twins (Age 5)",
      image: parent2Image,
      quote:
        "The kindergarten prep program built confidence in our twins. The staff is warm, skilled, and the activities are wonderfully engaging.",
      rating: 5,
      color: "from-purple-400 to-blue-400",
    },
    {
      name: "Lisa Martinez",
      role: "Parent of Noah, Age 3",
      image: parent1Image,
      quote:
        "As a first-time parent, I was nervous. But the team made everything smooth. Noah has blossomed, socially and emotionally!",
      rating: 5,
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-b from-blue-50 via-pink-50 to-yellow-50 overflow-hidden"
    >
      {/* Decorative floating sparkles */}
      <Sparkles className="absolute top-20 left-16 w-14 h-14 text-pink-300 animate-float opacity-70" />
      <Sparkles className="absolute bottom-24 right-20 w-10 h-10 text-purple-300 animate-float-delayed opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            What Parents{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            Real experiences from families who trust their little ones with us
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="
                p-7 rounded-3xl bg-white shadow-lg hover:shadow-2xl 
                hover:scale-[1.03] transition-all duration-300 relative
              "
            >
              {/* Colorful corner ribbon */}
              <div
                className={`
                  absolute -top-3 left-6 w-24 h-6 rounded-full 
                  bg-gradient-to-r ${t.color} shadow-md
                `}
              ></div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-serif italic leading-relaxed mb-6 bg-white/60 p-4 rounded-2xl shadow-sm">
                “{t.quote}”
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 shadow">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <div className="font-bold text-gray-800 text-lg">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
