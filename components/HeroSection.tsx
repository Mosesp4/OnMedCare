// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => (
  <div className="text-primary bg-green-200 p-8 text-center">
    <h1 className="mb-4 text-4xl font-bold">Book Your Appointment Today</h1>
    <p className="mb-6">
      Convenient, reliable, and fast doctor&lsquo;s appointments at your fingertips.
    </p>
    <button className="bg-primary rounded-lg px-4 py-2 text-white">
      Get Started
    </button>
  </div>
);

export default Hero;
