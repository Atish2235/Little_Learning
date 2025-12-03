import React, { useState } from "react";
import Navigation from "@/components/Navigation";

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
            backgroundImage: `url(/attached_assets/asset/breadcrum.png)`,
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
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-8 md:mb-10">
          Why Partner With Us?
        </h2>

          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            A franchise model designed for your success — we go beyond curriculum to build sustainable,
            profitable preschools with hands-on support and a partnership approach.
          </p>
      </div>

      {/* Why Partner Section - cards now follow the SEO block */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-12">


        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-emerald-600">End-to-End Operational Support</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Little Learningss provides comprehensive assistance in daily operations, ensuring your preschool runs smoothly with high-quality standards and efficient processes. You’ll never feel alone—we stand by you at every step.
            </p>
          </div>

          {/* Card: Recruitment & Staff Training Assistance */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-pink-600">👩‍🏫 Recruitment & Staff Training Assistance</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Great preschools are built by great teams. We help you find the right teachers and staff, followed by continuous training and upskilling sessions to maintain excellence in teaching and care.
            </p>
          </div>

          {/* Card: Admissions Guidance & Target Achievement */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-600">🎯 Admissions Guidance & Target Achievement</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Your growth is our priority. Little Learningss supports you with proven strategies, tools, and local-level guidance to help you achieve and consistently grow your admissions numbers.
            </p>
          </div>

          {/* Card: Continuous Upskilling & Learning Support */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-indigo-600">📚 Continuous Upskilling & Learning Support</h3>
            <p className="text-gray-700 text-sm md:text-base">
              We ensure that your team stays updated with the latest trends in early education. Our ongoing workshops, training modules, and resource updates keep your preschool innovative and competitive.
            </p>
          </div>

          {/* Card: After-School Programs for Higher Profitability */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-rose-600">🎨 After-School Programs for Higher Profitability</h3>
            <p className="text-gray-700 text-sm md:text-base">
              To help franchise partners increase revenue, Little Learningss offers structured, in-demand after-school activities. These programs attract more enrollments and add a profitable extension to your preschool operations.
            </p>
          </div>

          {/* Card: No Premium Royalty — Fast ROI */}
          <div className="p-4 md:p-6 bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border-4 border-white hover:scale-105 transition
            hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-20 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-emerald-600">💸 No Premium Royalty—Fast ROI for Franchisees</h3>
            <p className="text-gray-700 text-sm md:text-base">
              At Little Learningss, we believe in fair and transparent royalty structures. We do not charge premium royalty fees, enabling you to achieve ROI faster and enjoy long-term profitability without unnecessary financial pressure.
            </p>
          </div>

        </div>
      </div>

      {/* SEO Content Section - stylized & integrated (replaces the previous pre block) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-12">
        <div className="bg-white/95 p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center">
            <p className="text-gray-800 font-semibold">Little Learningss — A Partnership That Truly Supports You</p>
            <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
              When you join the Little Learningss franchise family, you’re not just opening a preschool — you’re becoming part of a supportive,
              growth-focused community. Together, we nurture children, empower families, and build preschools that stand out for quality, trust, and care.
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