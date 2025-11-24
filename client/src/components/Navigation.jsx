import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../../attached_assets/generated_images/Little_logo.png";
 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      fixed top-0 left-0 right-0 z-50 
      bg-white/80 backdrop-blur-lg 
      shadow-lg border-b border-transparent
      rounded-b-3xl
      animate-slide-down
    "
    >
      {/* Rainbow bubble bar */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-b-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ⭐ NEW LOGO IMAGE */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Little Learnings Logo"
              className="w-20 h-20 object-contain drop-shadow-md hover:scale-105 transition-transform"
            />

            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Little Learningss
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#programs"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              Programs
            </a>

            <a
              href="#why"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              Why Choose Us
            </a>

            <a
              href="#gallery"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>

            <Button
              className="
                rounded-full px-6 py-3 text-lg font-bold
                bg-gradient-to-r from-pink-500 to-purple-600 
                text-white shadow-md hover:shadow-xl hover:scale-105
                transition-all
              "
            >
              Enroll Now ✨
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-yellow-200 rounded-xl shadow hover:scale-110 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl rounded-b-3xl shadow-lg pb-6">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#home"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              Home
            </a>

            <a
              href="#about"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              About
            </a>

            <a
              href="#programs"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              Programs
            </a>

            <a
              href="#why"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              Why Choose Us
            </a>

            <a
              href="#gallery"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="block text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow transition hover:scale-[1.03]"
            >
              Contact
            </a>

            <Button
              className="
                w-full rounded-full py-4 text-lg font-bold
                bg-gradient-to-r from-pink-500 to-purple-600 
                text-white shadow-md hover:shadow-xl hover:scale-105
                transition-all
              "
            >
              Enroll Now ✨
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
