import { Card } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";
import aboutImage from "../../attached_assets/generated_images/teacher_reading_with_children.png";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Students", color: "text-pink-500" },
    { icon: Award, value: "14+", label: "Years Experience", color: "text-yellow-500" },
    { icon: Heart, value: "98%", label: "Parent Satisfaction", color: "text-red-500" },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 overflow-hidden">

      {/* Decorative floating shapes */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 right-10 w-52 h-52 bg-blue-300/40 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Wavy top border */}
      <svg className="absolute top-0 left-0 right-0 w-full h-20 text-white" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,170.7C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128V0H0Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side Image with shapes */}
          <div className="relative">
            <div className="absolute -top-8 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-70 animate-bounce-slow"></div>
            <div className="absolute -bottom-8 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-40 animate-bounce-slower"></div>

            <img
              src={aboutImage}
              alt="Teacher reading with children"
              className="relative rounded-[2rem] shadow-xl border-4 border-white"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Little Learnings</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 font-serif leading-relaxed">
              At Little Learnings, every day is an adventure!  
              We believe children learn best through play, exploration, and joyful curiosity.
            </p>

            <p className="text-lg text-gray-700 mb-10 font-serif leading-relaxed">
              Our warm, experienced educators create magical learning experiences that build
              confidence, creativity, and a lifelong love of learning.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-5 text-center rounded-2xl bg-white shadow-md hover:shadow-xl transition hover:scale-[1.03]"
                  >
                    <Icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-extrabold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
