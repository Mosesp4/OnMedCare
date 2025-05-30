// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => (
  <section id="testimonials" className="p-8 bg-green-50">
    <h2 className="text-3xl font-bold text-primary mb-6">Testimonials</h2>
    <div className="space-y-4">
      <blockquote className="p-4 shadow-md rounded-md bg-white">
        <p>"Amazing service! Made my life so much easier."</p>
        <footer className="mt-2 text-sm text-gray-500">- Jane Doe</footer>
      </blockquote>
      <blockquote className="p-4 shadow-md rounded-md bg-white">
        <p>"Highly recommend to anyone looking for reliable doctors."</p>
        <footer className="mt-2 text-sm text-gray-500">- John Smith</footer>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;
