import toddlersImage from "../../attached_assets/generated_images/toddlers_playing_with_blocks.png";
import preKImage from "../../attached_assets/generated_images/pre-k_arts_and_crafts.png";
import kindergartenImage from "../../attached_assets/generated_images/kindergarten_science_exploration.png";
import { Plus } from "lucide-react";

// Placeholder image for new programs (reuse existing or add new as needed)
import placeholderImage from "../../attached_assets/generated_images/toddlers_playing_with_blocks.png"; // Use existing as placeholder

export default function Programs() {
  const programs = [
    {
      title: "Playgroup",
      age: "2 years completed",
      image: placeholderImage,
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Sensory play & motor skills</li>
          <li>Social development through guided play</li>
          <li>Introduction to routines & independence</li>
        </ul>
      ),
      border: "border-[#FFB347]", // Orange
    },
    {
      title: "Nursery",
      age: "3 years completed",
      image: placeholderImage,
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Early literacy & numeracy</li>
          <li>Phonics, storytelling & creative activities</li>
          <li>Hands-on exploration & concept learning</li>
        </ul>
      ),
      border: "border-[#A3D977]", // Green
    },
    {
      title: "Jr. KG",
      age: "4 years completed",
      image: placeholderImage,
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Foundational language & math</li>
          <li>Cognitive development through experiential learning</li>
          <li>Communication & confidence-building activities</li>
        </ul>
      ),
      border: "border-[#4DA3FF]", // Blue
    },
    {
      title: "Sr. KG",
      age: "5 years completed",
      image: placeholderImage,
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>School readiness with NEP-aligned curriculum</li>
          <li>Writing, reading, problem-solving & STEM concepts</li>
          <li>Personality development & leadership skills</li>
        </ul>
      ),
      border: "border-[#F2C94C]", // Yellow
    },
    {
      title: "Day Care",
      age: "2 Years onwards",
      image: placeholderImage,
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Safe, caring, homely environment</li>
          <li>Engaging activities, rest time & nutritious routines</li>
          <li>Homework support & evening enrichment activities</li>
        </ul>
      ),
      border: "border-[#FF70A6]", // Pink
    },
  
  ];

  return (
    <section id="programs" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Programs
          </span>
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 font-serif mb-16">
          Thoughtfully crafted learning journeys that spark curiosity, joy, and
          strong development.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 justify-center">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`
                rounded-[28px] md:rounded-[40px] shadow-xl p-6 md:p-10 pt-10 md:pt-12 relative text-center 
                bg-white hover:scale-[1.03] transition cursor-pointer
                border-[5px] ${p.border}
              `}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {p.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">{p.age}</p>

              <img
                src={p.image}
                alt={p.title}
                className="w-full h-28 sm:h-32 md:h-32 object-cover rounded-xl mt-4 md:mt-6 shadow-md"
              />

              <div className="text-gray-700 text-sm mt-4 md:mt-6 leading-relaxed font-serif">
                {p.description}
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mt-4 md:mt-6 border border-gray-300">
                <Plus className="text-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
