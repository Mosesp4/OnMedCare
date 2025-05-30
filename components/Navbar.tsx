// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => (
  <nav className="bg-primary text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">OnMed Care</div>
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-md text-black"
      />
      <div className="relative">
        <button className="p-2 bg-white text-primary rounded-md">Menu</button>
        <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2">
          <a href="#benefits" className="block p-2 text-primary">
            Benefits
          </a>
          <a href="#testimonials" className="block p-2 text-primary">
            Testimonials
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
