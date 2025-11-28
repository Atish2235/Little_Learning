import React from "react";

// Placeholder images, replace with actual image paths as needed
const activities = [
  {
    name: "Dance & Music",
    description: "creativity, rhythm & expression",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Phonics & Reading Club",
    description: "vocabulary & reading fluency",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sanskar Warg",
    description: "value education, moral stories & cultural grounding",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Tuition Classes",
    description: "homework support & academic improvement",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
  }
];

export default function AfterSchoolActivities() {
  return (
    <section className="py-12 bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100" id="after-school-activities">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-pink-600 drop-shadow-lg font-[Comic Sans MS,cursive,sans-serif]">
          After-School Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {activities.map((activity, idx) => (
            <div
              key={activity.name}
              className={`flex flex-col items-center rounded-3xl shadow-xl p-6 bg-white border-4 border-dashed ${
                idx % 2 === 0 ? "border-pink-200" : "border-yellow-200"
              } hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={activity.img}
                alt={activity.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 shadow mb-4"
              />
              <div className="text-2xl font-bold text-blue-500 mb-2 font-[Comic Sans MS,cursive,sans-serif] text-center drop-shadow">
                {activity.name}
              </div>
              <div className="text-lg text-yellow-700 text-center font-semibold">
                {activity.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
