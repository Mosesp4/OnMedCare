// src/components/Doctors.tsx
import React from "react";

const Doctors: React.FC = () => (
  <section id="doctors" className="p-8">
    <h2 className="text-3xl font-bold text-primary mb-6">Our Doctors</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 shadow-md rounded-md bg-white">
        <h3 className="text-xl font-semibold">Dr. Alice Johnson</h3>
        <p>Cardiologist</p>
      </div>
      <div className="p-4 shadow-md rounded-md bg-white">
        <h3 className="text-xl font-semibold">Dr. Mark Lee</h3>
        <p>Dermatologist</p>
      </div>
    </div>
  </section>
);

export default Doctors;
