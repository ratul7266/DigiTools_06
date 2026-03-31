import React from "react";

const User = () => {
  return (
   <div className="flex flex-col sm:flex-row items-center justify-around gap-8 px-8 sm:px-16 py-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">

  <div className="flex flex-col items-center sm:items-start gap-1">
    <span className="text-5xl font-bold text-white">50K+</span>
    <span className="text-base text-white/60">Active Users</span>
  </div>

  <div className="w-12 h-px sm:w-px sm:h-12 bg-white/25" />

  <div className="flex flex-col items-center sm:items-start gap-1">
    <span className="text-5xl font-bold text-white">200+</span>
    <span className="text-base text-white/60">Premium Tools</span>
  </div>

  <div className="w-12 h-px sm:w-px sm:h-12 bg-white/25" />

  <div className="flex flex-col items-center sm:items-start gap-1">
    <span className="text-5xl font-bold text-white">4.9</span>
    <span className="text-base text-white/60">Rating</span>
  </div>

</div>
  );
};

export default User;
