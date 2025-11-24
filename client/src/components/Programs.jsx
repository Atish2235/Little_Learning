import toddlersImage from "../../attached_assets/generated_images/toddlers_playing_with_blocks.png";
import preKImage from "../../attached_assets/generated_images/pre-k_arts_and_crafts.png";
import kindergartenImage from "../../attached_assets/generated_images/kindergarten_science_exploration.png";
import { Plus } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Ready to FLY II",
      age: "Age: 5 - 6 Years",
      image: kindergartenImage,
      description:
        "Designed for 5–6 year olds, this program prepares children for structured schooling.",
      gradient: "from-blue-300 to-blue-400",
    },
    {
      title: "Developing Roots",
      age: "Age: 2 - 3 Years",
      image: preKImage,
      description:
        "Early learning foundations through sensory, social, and movement-based activities.",
      gradient: "from-pink-300 to-pink-400",
    },
    {
      title: "Emerging Wings",
      age: "Age: 3 - 4 Years",
      image: toddlersImage,
      description:
        "Boosts emotional, social, and cognitive growth through guided exploration.",
      gradient: "from-purple-300 to-purple-400",
    },
    {
      title: "Ready to FLY I",
      age: "Age: 4 - 5 Years",
      image: toddlersImage,
      description:
        "Focuses on early literacy, numeracy, and confidence building in a playful way.",
      gradient: "from-yellow-300 to-yellow-400",
    },
  ];

  return (
    <section id="programs" className="relative py-24 bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50">

      {/* LEFT BLANK SPACE (for your future cartoon) */}
      <div className="absolute left-0 top-0 h-full w-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Programs
          </span>
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 font-serif mb-16">
          Thoughtfully crafted learning journeys that spark curiosity, joy, and strong development.
        </p>

        {/* Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">

          {programs.map((p, i) => (
            <div
              key={i}
              className="
                rounded-[40px] shadow-xl p-6 pt-10 relative text-center 
                bg-gradient-to-br hover:scale-[1.03] transition cursor-pointer
              "
              style={{
                backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
              }}
            >

              <div className={`bg-gradient-to-br ${p.gradient} rounded-[40px] p-1`}>
                <div className="bg-white rounded-[35px] p-6">

                  <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.age}</p>

                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-32 object-cover rounded-xl mt-4 shadow-md"
                  />

                  <p className="text-gray-700 text-sm mt-4 leading-relaxed font-serif">
                    {p.description}
                  </p>

                  {/* Bottom Button */}
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mt-6">
                    <Plus className="text-gray-700" />
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
