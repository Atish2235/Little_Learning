import LogoImg from "../../attached_assets/generated_images/Little_logo.png";

export default function LogoComponent() {
  return (
    <div
      className="
        fixed top-[0px] left-4 sm:left-10 z-[60]
        flex items-center gap-3
        z-[60]
      "
    >
      {/* Circle Logo */}
      <div
        className="
          w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]
          bg-white rounded-full 
          flex items-center justify-center
          shadow-2xl border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] border-blue-300
        "
      >
        <img
          src={LogoImg}
          alt="Little Learnings Logo"
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] object-contain"
        />
      </div>
    </div>
  );
}
