import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  const goTo = (id) => {
    setLocation("/");
    setTimeout(() => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = `#${id}`;
    }, 80);
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-100 pt-20 pb-10 overflow-hidden">

      {/* Wavy Top Border */}
      <svg
        className="absolute top-0 left-0 w-full h-28 text-white"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,192L80,197.3C160,203,320,213,480,224C640,235,800,245,960,240C1120,235,1280,213,1360,202.7L1440,192L1440,0H0Z"></path>
      </svg>

      {/* Floating Blobs */}
      <div className="absolute top-16 left-10 w-36 h-36 bg-pink-300/40 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-16 right-10 w-40 h-40 bg-blue-300/40 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-gray-800">

        <div className="grid md:grid-cols-3 gap-14">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Little Learnings
            </h2>
            <p className="text-gray-700 font-serif leading-relaxed">
              A joyful place where kids learn, explore, and grow with confidence, creativity, and curiosity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <button type="button" onClick={() => goTo("home")} className="hover:text-purple-600 transition">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setLocation("/about")} className="hover:text-purple-600 transition">
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goTo("programs")} className="hover:text-purple-600 transition">
                  Programs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goTo("why")} className="hover:text-purple-600 transition">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goTo("gallery")} className="hover:text-purple-600 transition">
                  Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goTo("contact")} className="hover:text-purple-600 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-purple-600" />
                <span>(555) 123-4567</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-purple-600" />
                <span>info@littlelearnings.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-purple-600" />
                <span>
                  123 Learning Lane <br /> Education City, EC 12345
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center text-gray-700 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Little Learnings</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
