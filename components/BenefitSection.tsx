// src/components/Benefits.tsx
import React from "react";

const Benefits: React.FC = () => (
  <section id="benefits" className="p-8">
    <h2 className="text-primary mb-6 text-3xl font-bold">Why Choose Us?</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-md bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold">Easy Scheduling</h3>
        <p>Book appointments in just a few clicks.</p>
      </div>
      <div className="rounded-md bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold">Qualified Doctors</h3>
        <p>Access top-rated professionals in your area.</p>
      </div>
      <div className="rounded-md bg-white p-4 shadow-md">
        <h3 className="text-xl font-semibold">Secure Data</h3>
        <p>Your personal data is safe with us.</p>
      </div>
    </div>
  </section>
);

export default Benefits;
