export default function LogoComponent() {
  return (
    <div
      className="
        fixed -top-6 sm:-top-8 md:-top-16 left-4 sm:left-10 z-[70]
        flex items-center gap-3
      "
    >
      {/* Logo Only */}
      <img
        src="/attached_assets/asset/Little_logo.png"
        alt="Little Learnings Logo"
        className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] object-contain"
      />
    </div>
  );
}
