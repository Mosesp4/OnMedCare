// src/components/Doctors.tsx
import React from "react";

const Doctors: React.FC = () => (
  <section id="doctors" className="p-8">
    <h2 className="text-primary mb-6 text-3xl font-bold">Our Doctors</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-md bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold">Dr. Alice Johnson</h3>
        <p>Cardiologist</p>
      </div>
      <div className="rounded-md bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold">Dr. Mark Lee</h3>
        <p>Dermatologist</p>
      </div>
    </div>
  </section>
);

export default Doctors;
