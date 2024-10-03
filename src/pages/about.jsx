import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import AboutImage from "../images/About_image.jpg";

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-400 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-16">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="Luxury Hotel"
            className="rounded-3xl shadow-2xl w-full max-w-xl transform hover:scale-105 transition-transform duration-500" // Increased image size here
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            About Us
          </h1>
          <h2 className="text-3xl font-semibold text-gray-300 mb-6">
            Experience Luxury & Comfort
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At our hotel booking website, we believe that your comfort is our
            top priority. We strive to offer you the best options, whether
            you're traveling for business or leisure. Our platform connects you
            to a wide range of accommodations—from luxurious resorts to
            affordable stays—guaranteeing you an unforgettable experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            With our 24/7 customer support and a user-friendly booking
            interface, we ensure that you have access to the most exclusive
            deals and updated information. Let us help you make your travel
            dreams come true with ease and convenience.
          </p>
          <div className="flex gap-6">
            <button className="bg-black text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-400 transition-colors duration-300 hover:shadow-xl">
              Learn More
            </button>
            <Link to="/contact"> {/* Link component for navigation */}
              <button className="bg-white text-gray-800 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-300 hover:shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
