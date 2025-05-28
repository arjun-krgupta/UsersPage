import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center p-4 pt-24 h-[70vh]">
      <div className="flex flex-col justify-between w-full max-w-sm p-6 h-[58vh]">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-left mb-1">
              Create your PopX account
            </h2>
            <p className="text-sm text-gray-500 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border outline-0 px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border outline-0 px-4 py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border outline-0 px-4 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border outline-0 px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Company name"
              className="w-full border outline-0 px-4 py-2 text-sm"
            />
          </div>

          {/* Radio */}
          <div className="text-sm text-left mt-2">
            <span className="block font-medium mb-1">Are you an Agency?*</span>
            <label className="mr-4">
              <input type="radio" name="agency" className="mr-1" /> Yes
            </label>
            <label>
              <input type="radio" name="agency" className="mr-1" /> No
            </label>
          </div>

          {/* Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-all">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
