import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8  shadow-lg">
        <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
          {/* Footer Logo and Copy */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">
              Luxury Stay
            </a>
            <p className="mt-2 text-sm text-gray-400">
              © 2024 Luxury Stay. All Rights Reserved.
            </p>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center md:justify-end items-center mt-3 text-sm font-medium text-gray-300">
            <li className="mx-4 md:mx-6">
              <a href="/about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li className="mx-4 md:mx-6">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li className="mx-4 md:mx-6">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Licensing
              </a>
            </li>
            <li className="mx-4 md:mx-6">
              <a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
