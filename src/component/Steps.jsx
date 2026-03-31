import AccountImg from "../assets/user.png";
import ProductsImg from "../assets/package.png";

import RocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="mx-auto container py-32">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Get Started in 3 Steps
          </h1>
          <p className="text-gray-400 font-medium mb-10">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
            <figure className="pt-10 px-8 relative flex justify-center">
              <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-8 h-8 flex items-center justify-center text-sm font-bold z-10">
                01
              </div>
              <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center">
                <img src={AccountImg} className="w-12 h-12 object-contain" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold">Create Account</h2>
              <p className="text-gray-400 text-sm">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
            <figure className="pt-10 px-8 relative flex justify-center">
              <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-8 h-8 flex items-center justify-center text-sm font-bold z-10">
                02
              </div>
              <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center">
                <img src={ProductsImg} className="w-12 h-12 object-contain" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold">Choose Products</h2>
              <p className="text-gray-400 text-sm">
                Browse our catalog and select the tools,that fit your needs.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
            <figure className="pt-10 px-8 relative flex justify-center">
              <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-8 h-8 flex items-center justify-center text-sm font-bold z-10">
                03
              </div>
              <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center">
                <img src={RocketImg} className="w-12 h-12 object-contain" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold">Start Creating</h2>
              <p className="text-gray-400 text-sm">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
