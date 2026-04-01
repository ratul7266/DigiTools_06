import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 font-medium mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Starter card */}
        <div className="card w-full bg-[#F2F2F2] shadow-sm rounded-2xl">
          <div className="card-body  flex flex-col">
            <div>
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className="text-gray-400 font-medium text-lg">
                Perfect for getting started
              </p>
            </div>
            <span className="text-4xl font-bold text-black mt-5">
              $0 <span className="text-2xl text-gray-300">/Month</span>
            </span>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Access to 10 free tools
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Basic templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Community support
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  1 project per month
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-1">
              <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-base rounded-full border-none">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        {/* pro card */}
        <div className="card w-full card-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm relative rounded-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="badge badge-warning badge-sm px-3">
              Most Popular
            </span>
          </div>
          <div className="card-body ">
            <div className="">
              <h2 className="text-3xl font-bold text-white">Pro</h2>
              <p className="text-gray-300 font-medium text-lg">
                Best for professionals
              </p>
            </div>
            <span className="text-4xl font-bold text-white mt-5">
              $29{" "}
              <span className="text-2xl font-normal text-gray-300">/Month</span>
            </span>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-semibold text-base">
                  Access to all premium tools
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white text-base font-semibold">
                  Unlimited templates
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white text-base font-semibold">
                  Priority support
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white text-base font-semibold">
                  Unlimited projects
                </span>
              </li>
              <li className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white text-base font-semibold">
                  Cloud sync
                </span>
              </li>
              <li className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white text-base font-semibold">
                  Advanced analytics
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block text-primary bg-white rounded-full border-none font-bold">
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>
        {/* Enterprise card */}
        <div className="card w-full bg-[#F2F2F2] shadow-sm rounded-2xl">
          <div className="card-body  flex flex-col">
            <div>
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className="text-gray-400 font-medium text-lg">
                For teams and businesses
              </p>
            </div>
            <span className="text-4xl font-bold text-black mt-5">
              $99 <span className="text-2xl text-gray-300">/Month</span>
            </span>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Everything in Pro
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Team collaboration
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Custom integrations
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Dedicated support
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  SLA guarantee
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-base text-gray-400">
                  Custom branding
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-1">
              <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-base rounded-full border-none">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
