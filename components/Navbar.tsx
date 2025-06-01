// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => (
  <nav className="bg-primary flex items-center justify-between p-4 text-white">
    <div className="text-2xl font-bold">OnMed Care</div>
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-md p-2 text-black"
      />
      <div className="relative">
        <button className="text-primary rounded-md bg-white p-2">Menu</button>
        <div className="absolute mt-2 rounded-md bg-white p-2 shadow-lg">
          <a href="#benefits" className="text-primary block p-2">
            Benefits
          </a>
          <a href="#testimonials" className="text-primary block p-2">
            Testimonials
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
