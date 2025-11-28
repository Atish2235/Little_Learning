import { useEffect, useState } from "react";

export default function WelcomePage({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Auto redirect after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onComplete(), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => onComplete(), 500);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        fixed inset-0 z-50 
        flex items-center justify-center
        bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100
        cursor-pointer
        transition-opacity duration-500
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Floating Blobs */}
      <div className="absolute top-20 right-32 w-64 h-64 bg-pink-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-32 w-56 h-56 bg-blue-300/30 blur-3xl rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-300/30 blur-3xl rounded-full animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center animate-fade-in">
        {/* Welcome Text */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 animate-slide-down">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Welcome to
          </span>
        </h1>

        {/* Logo Container */}
        <div className="relative animate-scale-in">
          <img
            src={new URL('/attached_assets/generated_images/Little_logo.png', import.meta.url).href}
            alt="Little Learnings Logo"
            className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain drop-shadow-2xl animate-float mx-auto"
          />
          
          {/* Sparkle Effect */}
          <div className="absolute -top-4 -right-4 text-6xl animate-bounce">✨</div>
          <div className="absolute -bottom-4 -left-4 text-5xl animate-bounce delay-300">🌟</div>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-2xl md:text-3xl font-serif text-gray-700 animate-slide-up">
          Where Little Minds Grow Big Dreams 🌈
        </p>

        {/* Click hint */}
        <p className="mt-6 text-sm text-gray-500 animate-pulse">
          Click anywhere to continue...
        </p>
      </div>
    </div>
  );
}
