import { Mail, Phone, MapPin } from "lucide-react";
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
        <path d="M0,192L80,197.3C160,203,320,213,480,224C640,235,800,245,960,240C1120,235,1280,213,1360,202.7L1440,192L1440,0H0Z" />
      </svg>

      {/* Floating Blobs */}
      <div className="absolute top-16 left-10 w-36 h-36 bg-pink-300/40 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-16 right-10 w-40 h-40 bg-blue-300/40 blur-3xl rounded-full animate-float-delayed" />

      <div className="max-w-8xl mx-auto px-4 relative z-10 text-gray-800 ml-0 md:ml-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Logo & Description (replaced) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            {/* wrapper reserves horizontal space and allows the logo to overlap upwards */}
            <div className="relative w-44 md:w-60 flex-shrink-0 mb-0 sm:mb-0 sm:mr-6 overflow-visible">
              <img
                src="/attached_assets/asset/Little_logo.png" /* Make sure Little_logo.png is inside the client/public folder */
                alt="Little Learnings Logo"
                className="absolute left-1/2 transform -translate-x-1/2 -top-16 md:top-12 w-40 md:w-full h-auto object-contain z-30 drop-shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Little Learnings
              </h2>
              <p className="text-gray-700 font-serif leading-relaxed">
                A joyful place where kids learn, explore, and grow with confidence, creativity, and curiosity.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800 text-center">Quick Links</h3>
            <ul className="space-y-2 text-gray-700 text-center w-full">
              <li>
                <button
                  type="button"
                  onClick={() => goTo("home")}
                  aria-label="Go to Home"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/about")}
                  aria-label="Go to About Us"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/programs")}
                  aria-label="Go to Programs"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/gallery")}
                  aria-label="Go to Gallery"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/contact")}
                  aria-label="Go to Contact"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/branches")}
                  aria-label="Go to Branches"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Branches
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/franchise")}
                  aria-label="Go to Franchise"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Franchise
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocation("/career")}
                  aria-label="Go to Career"
                  className="hover:text-purple-600 transition block w-full py-1"
                >
                  Career
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800 text-center md:text-left">Contact Info</h3>
            <div className="space-y-4 text-gray-700 w-full">
              {/* Warje */}
              <div className="space-y-1 w-full">
                <div className="font-semibold text-sm text-gray-800 text-center sm:text-left">Warje</div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-sm break-words">
                    Sr. No. 138/2A/2/3 "Kalpataru" Near Awale Petrol Pump,<br />NDA Road, Warje, Pune - 411058
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <a href="tel:+918446390854" className="text-sm hover:text-purple-600 transition block">+91 84463 90854</a>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <a href="mailto:warje@littlelearningss.com" className="text-sm hover:text-purple-600 transition block">warje@littlelearningss.com</a>
                </div>
              </div>

              {/* Kothrud */}
              <div className="space-y-1 pt-3 w-full">
                <div className="font-semibold text-sm text-gray-800 text-center sm:text-left">Kothrud</div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-sm break-words">
                    Aviraj Hostel, Near No. 133/26,27, Ishan Building Prabha CHS,<br />DP Rd, Mayur Colony, Kothrud, Pune, Maharashtra 411038
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <a href="tel:+919975518504" className="text-sm hover:text-purple-600 transition block">+91 99755 18504</a>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 justify-center sm:justify-start text-center sm:text-left">
                  <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <a href="mailto:kothrud@littlelearningss.com" className="text-sm hover:text-purple-600 transition block">kothrud@littlelearningss.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 sm:mt-16 text-center text-gray-700 text-xs sm:text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Little Learnings</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

