import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between  items-center px-2">
        
        {/* Left Section - Brand Name */}
        <h2 className="text-2xl md:text-4xl font-bold italic">
          Luxe-<span className="text-white">Property</span> Services
        </h2>

        {/* Middle Section - Contact */}
        <div className="bg-white text-black px-6 py-4 rounded-2xl shadow-md w-full md:w-auto text-center">
          <p className="font-medium">
            Contact Us: <span className="text-gray-500">EMAIL GOES HERE</span> /{" "}
            <span className="text-gray-400">PHONE GOES HERE</span>
          </p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-500 italic text-sm">
            © 2025 Luxe Property Services. All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Quick Links */}
        <div className="bg-white text-black px-4 py-3 rounded-2xl shadow-md mt-4 md:mt-0">
          <p className="font-bold text-sm text-center">Quick Links</p>
          <ul className="text-sm italic space-y-1 mt-2 text-center">
            <li>Home</li>
            <li>Pictures</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

