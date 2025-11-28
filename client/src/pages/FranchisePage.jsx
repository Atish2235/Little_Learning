import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";

const FranchisePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      alert("Enquiry sent successfully!");
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[18vh] sm:min-h-[22vh] md:min-h-[28vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(1.05) contrast(1.05) saturate(1.05)",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(30, 27, 75, 0.10), rgba(255,255,255,0.10) 80%, transparent 100%)"
          }}
        />
        <div className="relative z-20 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg py-8">
            Franchise Opportunities
          </h1>
          <nav className="mt-2 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 font-medium bg-white/60 rounded-full px-4 py-1 shadow-sm backdrop-blur-sm">
              <li>
                <a
                  href="/"
                  className="hover:underline text-pink-600 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li className="text-purple-700 font-bold">Franchise</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-12">
        {/* Hero Section Content */}
        <div className="text-center">
          <p className="text-base md:text-xl text-gray-700 mt-4 md:mt-5 max-w-3xl mx-auto">
            Join Little Learnings and become part of a rapidly growing early-education
            brand dedicated to nurturing young minds through international learning
            blended with Indian culture and values.
          </p>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-8 md:mb-10">
          Why Partner With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-purple-600">📘 Proven Curriculum</h3>
            <p className="text-gray-700 text-sm md:text-base">
              NEP-aligned international curriculum with a strong Indian cultural foundation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-pink-600">👩‍🏫 Training & Support</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Complete teacher training, onboarding, marketing, and operational support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-600">🏫 Low Investment Model</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Start a preschool with minimal investment and high growth potential.
            </p>
          </div>
        </div>
      </div>

      {/* Franchise Form Section */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Franchise Enquiry Form
        </h2>

        <div className="bg-white/90 backdrop-blur-lg p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border-4 border-white
          relative
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
          before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
          before:opacity-15 before:-z-10
          "
          style={{ zIndex: 1, overflow: "hidden" }}
        >
          <form className="grid md:grid-cols-2 gap-4 md:gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="col-span-2">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-700 font-medium">Phone</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* City */}
            <div className="col-span-2">
              <label className="text-gray-700 font-medium">City</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="Enter your city"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us more about your interest..."
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 md:py-3 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-extrabold">Partner With a Trusted Preschool Brand</h2>
        <p className="mt-3 text-lg opacity-90">
          Let’s build the future of early childhood education together!
        </p>
      </div>
    </div>
  );
};

export default FranchisePage;