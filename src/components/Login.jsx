import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center p-4 pt-24 h-[50vh]">
      <div className="flex flex-col justify-between w-full max-w-sm p-6  h-[20vh]">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-left mb-1">
              Sign in to your PopX account
            </h2>
            <p className="text-sm text-gray-500 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border outline-0 ps-4 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border outline-0 ps-4 py-2 text-sm"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-gray-800 py-2 rounded-lg font-semibold transition-all">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
