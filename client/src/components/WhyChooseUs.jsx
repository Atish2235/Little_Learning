import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Star } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description:
        "Certified educators passionate about nurturing little learners with love and creativity.",
      gradient: "from-pink-400 to-red-400",
    },
    {
      icon: Heart,
      title: "Loving Environment",
      description:
        "A warm, safe, and joyful space where every child feels confident and cared for.",
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description:
        "Personal attention and meaningful interactions in intimate learning groups.",
      gradient: "from-blue-400 to-purple-400",
    },
    {
      icon: Star,
      title: "Play-Based Learning",
      description:
        "Hands-on activities that spark curiosity, joy, exploration, and creativity.",
      gradient: "from-green-400 to-lime-400",
    },
  ];

  return (
    <section
      id="why"
      className="relative py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Soft floating blobs */}
      <div className="absolute top-10 right-12 w-36 h-36 bg-pink-300/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-16 left-12 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            We build strong emotional, social, and academic foundations for every child.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="
                  p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all 
                  hover:scale-[1.05] duration-300 text-center
                "
              >
                <div
                  className={`
                    w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center 
                    text-white shadow-md bg-gradient-to-br ${feature.gradient}
                  `}
                >
                  <Icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-serif leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
