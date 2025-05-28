import React from "react";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center p-2 pt-24 h-[50vh] ">
      <div className="flex flex-col justify-between h-[20vh] w-full max-w-sm p-6">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 text-left mb-1">
              Welcome to PopX
            </h1>
            <p className="text-sm text-gray-500 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-4">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-all">
              Create Account
            </button>
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-2 rounded-lg font-semibold transition-all">
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
