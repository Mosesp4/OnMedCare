// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => (
  <div className="bg-green-200 text-primary p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Book Your Appointment Today</h1>
    <p className="mb-6">
      Convenient, reliable, and fast doctor's appointments at your fingertips.
    </p>
    <button className="bg-primary text-white py-2 px-4 rounded-lg">
      Get Started
    </button>
  </div>
);

export default Hero;
