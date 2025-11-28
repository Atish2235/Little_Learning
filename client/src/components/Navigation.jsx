import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoComponent from "./Logo";
import { useLocation } from "wouter";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  // navigation items used by mobile menu and other sections
  const items = [
    { label: "Home", id: "home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Why Choose Us", href: "/why" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Branches", href: "/branches" },
    { label: "Franchise", href: "/franchise" },
    { label: "Career", href: "/career" }, // New Career link
  ];

  // navigate to root then scroll to an id (pass null/undefined to just go home)
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
    <>
      {/* Floating Logo */}
      <LogoComponent />

      <nav
        className="
          fixed top-0 left-0 right-0 z-40 
          bg-white/80 backdrop-blur-lg 
          shadow-lg border-b border-transparent
          rounded-b-3xl
          animate-slide-down
        "
      >
        {/* Rainbow bar */}
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-b-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NAVBAR ROW */}
          <div className="flex justify-end items-center py-4 gap-1">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {/* Home */}
              <button
                type="button"
                onClick={() => goTo("home")}
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => setLocation("/about")}
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                About
              </button>

              {/* Programs */}
              <button
                type="button"
                onClick={() => setLocation("/programs")}
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Programs
              </button>

              {/* Gallery */}
              <button
                type="button"
                onClick={() => setLocation("/gallery")}
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Gallery
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => setLocation("/contact")}
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Contact
              </button>

              {/* Branches */}
              <Link
                to="/branches"
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Branches
              </Link>

              {/* Franchise */}
              <Link
                to="/franchise"
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Franchise
              </Link>

              {/* Career - New Link */}
              <Link
                to="/career"
                className="text-lg font-semibold text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-200"
              >
                Career
              </Link>

              <Button
                onClick={() => setLocation("/enroll")}
                className="
                  ml-6
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
            {/* constrained height + native momentum scrolling for mobile */}
            <div
              className="px-6 py-4 space-y-3 max-h-[75vh] overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <button
                type="button"
                onClick={() => { goTo("home"); setIsOpen(false); }}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Home
              </button>

              <button
                onClick={() => { setLocation("/about"); setIsOpen(false); }}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                About
              </button>

              <button
                type="button"
                onClick={() => { setLocation("/programs"); setIsOpen(false); }}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Programs
              </button>

              <button
                type="button"
                onClick={() => { setLocation("/gallery"); setIsOpen(false); }}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Gallery
              </button>

              <button
                type="button"
                onClick={() => { setLocation("/contact"); setIsOpen(false); }}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Contact
              </button>

              <Link
                to="/branches"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Branches
              </Link>

              <Link
                to="/franchise"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Franchise
              </Link>

              {/* Career - New Link in Mobile Menu */}
              <Link
                to="/career"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-lg font-semibold text-gray-700 bg-yellow-100 px-4 py-3 rounded-2xl shadow"
              >
                Career
              </Link>

              <Button
                onClick={() => { setLocation("/enroll"); setIsOpen(false); }}
                className="
                  block w-full rounded-full py-4 text-lg font-bold
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
    </>
  );
}
