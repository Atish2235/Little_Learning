import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import heroImage from "../../attached_assets/generated_images/hero_classroom_learning_scene.png";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [localToast, setLocalToast] = useState({ visible: false, message: "", type: "info" });

  const showToast = (type, message) => {
    // local fallback toast only (no external dependency)
    setLocalToast({ visible: true, message, type });
    setTimeout(() => setLocalToast((t) => ({ ...t, visible: false })), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      showToast("success", "Your message has been sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      showToast("error", "Something went wrong. Try again!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* simple fallback toast (no react-toastify) */}
      {localToast.visible ? (
        <div
          aria-live="polite"
          className="fixed top-6 right-6 z-50"
        >
          <div
            className={`px-4 py-2 rounded shadow-lg text-white ${
              localToast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {localToast.message}
          </div>
        </div>
      ) : null}

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
            Contact Us
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
              <li className="text-purple-700 font-bold">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-16">
        
        {/* Grid Layout */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-lg p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-transparent
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-15 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Send Us a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border-gray-200 border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border-gray-200 border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border-gray-200 border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border-gray-200 border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/90 backdrop-blur-lg p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-transparent
            relative
            before:content-[''] before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
            before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400
            before:opacity-15 before:-z-10
            "
            style={{ zIndex: 1, overflow: "hidden" }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Get in Touch
            </h2>

            <p className="text-gray-700 mb-4">
              <strong>📍 Address:</strong> Little Learnings Preschool, Baner, Pune – 411045
            </p>

            <p className="text-gray-700 mb-4">
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>

            <p className="text-gray-700 mb-4">
              <strong>✉ Email:</strong> hello@littlelearnings.in
            </p>

            <p className="text-gray-700 mb-6">
              <strong>⏰ Timings:</strong> Mon–Sat • 9:00 AM – 6:00 PM
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl shadow-md hover:opacity-90 transition"
            >
              View on Google Maps
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
