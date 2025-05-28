import React from "react";
import profileImg from "../assets/pic.png";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center p-4 pt-24 h-[50vh]">
      <div className="flex flex-col justify-between w-full max-w-sm p-6 h-[30vh]">
        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-left mb-1">
              Account Settings
            </h2>
            <p className="text-sm text-gray-500 text-left">
              Manage your PopX profile and preferences
            </p>
          </div>

          {/* Profile Info */}
          <div className="flex items-start gap-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">Arjun Kumar</p>
              <p className="text-sm text-gray-500">akarjun1050@gmail.com</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
