import { Card } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";
import aboutImage from "../../attached_assets/generated_images/teacher_reading_with_children.png";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}

function FeatureList({ title, items }) {
  return (
    <div className="mb-4">
      <p className="font-semibold text-gray-700 mb-2">{title}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5 text-gray-600">
        {items.map((it, idx) => (
          <li key={idx} className="leading-relaxed">{it}</li>
        ))}
      </ul>
    </div>
  );
}

function VisionMission() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-4">
      <Card className="p-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="flex items-start gap-3">
          <div className="text-2xl">🌟</div>
          <div>
            <div className="font-semibold text-gray-800">Vision</div>
            <div className="text-sm text-gray-600 mt-1">
              To shape children who think independently, embrace their heritage and are ready for the world ahead. We envision Little Learningss as a warm, inspiring space where lifelong learning begins.
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="flex items-start gap-3">
          <div className="text-2xl">🎯</div>
          <div>
            <div className="font-semibold text-gray-800">Mission</div>
            <div className="text-sm text-gray-600 mt-1">
              To nurture confident, curious and compassionate young learners through a global curriculum enriched with Indian culture and values. We aim to make learning joyful, holistic and rooted in strong character-building.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// New: Philosophy Section
function Philosophy() {
  return (
    <Card className="p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-pink-50 mb-8 shadow-lg">
      <h3 className="text-2xl font-bold text-pink-700 mb-2 font-serif">Our Philosophy</h3>
      <p className="text-gray-700 text-lg leading-relaxed font-serif">
        At <span className="font-bold text-pink-600">Little Learningss</span>, we believe childhood is a time to wonder, explore and shine. Our preschool blends the best of international early-years learning with the richness of Indian culture, values and traditions, creating an environment where children grow into confident, kind and curious individuals.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4 font-serif">
        Every day at Little Learningss is thoughtfully designed to nurture the mind, heart and character of each child. Through play-based learning, hands-on activities and joyful celebrations, we help children discover their abilities while staying deeply connected to their roots.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4 font-serif">
        With trained, loving educators and a warm, safe environment, Little Learningss feels like a second home — where children are encouraged to try, enjoy, learn and grow at their own pace.
      </p>
      <p className="text-pink-700 font-semibold mt-4 text-lg font-serif">
        At Little Learningss, we don’t just prepare children for school…<br />
        <span className="text-xl">We prepare them for life.</span>
      </p>
    </Card>
  );
}

// New: Curriculum Section
function Curriculum() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow">
        <h4 className="text-xl font-semibold text-purple-700 mb-2">Our International Curriculum Focuses On:</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Holistic development — physical, emotional, social and cognitive</li>
          <li>Critical thinking &amp; creativity</li>
          <li>Communication &amp; early literacy skills</li>
          <li>STEAM-based exploration</li>
          <li>Global awareness with Indian grounding</li>
        </ul>
      </Card>
      <Card className="p-6 bg-gradient-to-br from-green-50 to-yellow-50 shadow">
        <h4 className="text-xl font-semibold text-green-700 mb-2">We Proudly Introduce Children To:</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Indian festivals, stories and music</li>
          <li>Respect, empathy and gratitude</li>
          <li>Family and cultural values</li>
          <li>Yogic practices, mindfulness &amp; healthy habits</li>
        </ul>
      </Card>
    </div>
  );
}

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Students", color: "text-pink-500" },
    { icon: Award, value: "14+", label: "Years Experience", color: "text-yellow-500" },
    { icon: Heart, value: "98%", label: "Parent Satisfaction", color: "text-red-500" },
  ];

  return (
    <section id="about" className="relative py-12 md:py-20 bg-white overflow-hidden">
      <svg className="absolute top-0 left-0 right-0 w-full h-20 text-white" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,170.7C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128V0H0Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top grid: Image + Intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Teacher reading with children"
              className="relative rounded-[1.25rem] md:rounded-[2rem] shadow-xl border-4 border-white w-full"
            />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Little Learnings</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-serif leading-relaxed">
              Where every child is encouraged to <span className="text-pink-600 font-semibold">wonder, explore and shine</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-serif leading-relaxed">
              We blend international early-years learning with the richness of Indian culture, values and traditions, nurturing confident, kind and curious individuals.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-serif leading-relaxed">
              Our loving educators and joyful environment make every day an adventure in learning and growing.
            </p>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="
                      p-6 md:p-8 text-center rounded-2xl bg-white shadow-md 
                      hover:shadow-xl transition hover:scale-[1.03]
                      border-4 border-blue-300
                    "
                  >
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl md:text-3xl font-extrabold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-12">
          <Philosophy />
        </div>

        {/* Curriculum & Indian Values Section */}
        <Curriculum />

        {/* Vision & Mission Section */}
        <div className="mt-12">
          <SectionHeader
            title="Vision & Mission"
            subtitle="Our guiding light and purpose"
          />
          <VisionMission />
        </div>
      </div>
    </section>
  );
}
