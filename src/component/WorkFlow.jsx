import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-28 mt-30 text-center">
      <div>
        <h1 className="text-white font-extrabold text-4xl mb-4">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-base opacity-90 text-white mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
      </div>
      <div className="mb-4">
        <button className="btn rounded-full border-none font-bold mr-5">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
            Explore Products
          </span>
        </button>
        <button className="btn btn-soft bg-transparent text-white rounded-full font-bold py-4 px-6">
          View Pricing
        </button>
      </div>
      <p className="text-base opacity-90 text-white">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlow;
