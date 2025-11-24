import LogoImg from "../../attached_assets/generated_images/Little_logo.png";

export default function LogoComponent() {
  return (
    <div
      className="
        fixed top-[0px] left-10 z-[60]
        flex items-center gap-3
        z-[60]
      "
    >
      {/* Circle Logo */}
      <div
        className="
          w-[130px] h-[130px]
          bg-white rounded-full 
          flex items-center justify-center
          shadow-2xl border-[6px] border-blue-300
        "
      >
        <img
          src={LogoImg}
          alt="Little Learnings Logo"
          className="w-[90px] h-[90px] object-contain"
        />
      </div>
    </div>
  );
}
