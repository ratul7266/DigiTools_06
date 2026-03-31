import BannerImage from "../assets/banner.png";
import CircleImg from "../assets/circle.png";

const Banner = () => {
  return (
    <div className="relative mx-auto container flex  items-center overflow-hidden">
      <div className=" mx-auto container grid grid-cols-1 md:grid-cols-2 relative z-10 mb-14">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-none text-primary text-sm font-medium px-5 py-2 rounded-full">
            <img src={CircleImg} /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tighter">
            Supercharge Your
            <br />
            <span className=" bg-clip-text font-extrabold">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-soft bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-base px-8 py-3 rounded-full shadow-lg cursor-pointer border-none">
              ➜ Explore Products
            </button>
            <button className="btn btn-active text-primary border-primary bg-transparent rounded-full text-base font-medium">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
