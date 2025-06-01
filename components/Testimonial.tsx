// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => (
  <section id="testimonials" className="bg-green-50 p-8">
    <h2 className="text-primary mb-6 text-3xl font-bold">Testimonials</h2>
    <div className="space-y-4">
      <blockquote className="rounded-md bg-white p-4 shadow-md">
        <p>&quot;Amazing service! Made my life so much easier.&quot;</p>
        <footer className="mt-2 text-sm text-gray-500">- Jane Doe</footer>
      </blockquote>
      <blockquote className="rounded-md bg-white p-4 shadow-md">
        <p>&quot;Highly recommend to anyone looking for reliable doctors.&quot;</p>
        <footer className="mt-2 text-sm text-gray-500">- John Smith</footer>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;
