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

        {/* Scoped CSS: hide scrollbars, marquee animation, pause on hover/focus */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }

          .marquee {
            /* allow vertical overflow so hover lift & shadows are visible while keeping horizontal clipping */
            overflow-x: hidden;
            overflow-y: visible;
            position: relative;
          }
          .marquee-track {
            display: flex;
            gap: 0.5rem; /* decreased gap for tighter layout */
            align-items: stretch;
            animation: marquee 24s linear infinite;
            will-change: transform;
          }
          .marquee:hover .marquee-track,
          .marquee:focus-within .marquee-track {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* track duplicated so -50% shows seamless loop */
          }
        `}</style>

        {/* Marquee container - renders cards twice for seamless loop */}
        <div
          className="w-full -mx-4 px-4 marquee no-scrollbar"
          role="region"
          aria-label="Programs marquee"
          tabIndex={0}
        >
          <div className="marquee-track" aria-hidden="false">
            {/* First pass */}
            {programs.map((p, i) => (
              <div
                key={`first-${i}`}
                // increased padding in points and make hover lift visible
                style={{ padding: "8pt" }}
                className={`
                  flex-shrink-0
                  w-full max-w-sm sm:w-[340px] md:w-[400px] xl:w-[440px]   /* slightly reduced widths */
                  min-w-[280px]                                      /* slightly reduced min width */
                  mx-3
                  rounded-[16px] md:rounded-[20px] shadow-md hover:shadow-2xl relative text-center
                  bg-white transform transition-all duration-200 cursor-pointer
                  border-[5px] ${p.border}
                  min-h-[260px] md:min-h-[320px]
                  overflow-visible z-10
                `}
                // replace scale with vertical lift on hover via Tailwind classes (hover:-translate-y-1)
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">{p.age}</p>

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg mt-3 md:mt-4 shadow-md"
                />

                <div
                  className="text-gray-700 text-sm mt-3 md:mt-3 leading-relaxed font-serif"
                  style={{ padding: "6pt 4pt" }} /* content padding in points */
                >
                  {p.description}
                </div>

                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mt-3 md:mt-3 border border-gray-300">
                  <Plus className="text-gray-700" />
                </div>
              </div>
            ))}

            {/* Duplicate pass for seamless loop */}
            {programs.map((p, i) => (
              <div
                key={`dup-${i}`}
                aria-hidden="true"
                style={{ padding: "8pt" }}
                className={`
                  flex-shrink-0
                  w-full max-w-sm sm:w-[340px] md:w-[400px] xl:w-[440px]   /* slightly reduced widths */
                  min-w-[280px]                                      /* slightly reduced min width */
                  mx-3
                  rounded-[16px] md:rounded-[20px] shadow-md hover:shadow-2xl relative text-center
                  bg-white transform transition-all duration-200 cursor-pointer
                  border-[5px] ${p.border}
                  min-h-[260px] md:min-h-[320px]
                  overflow-visible z-10
                `}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">{p.age}</p>

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg mt-3 md:mt-4 shadow-md"
                />

                <div
                  className="text-gray-700 text-sm mt-3 md:mt-3 leading-relaxed font-serif"
                  style={{ padding: "6pt 4pt" }}
                >
                  {p.description}
                </div>

                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mt-3 md:mt-3 border border-gray-300">
                  <Plus className="text-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
