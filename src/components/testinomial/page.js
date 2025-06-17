"use client";
import React from "react";

const testimonials = [
  {
    quote:
      "The Hiring Partner has transformed our recruitment process. We now have confidence in every hire with thorough background checks that are both fast and accurate.",
    author: "Sarah Johnson",
    title: "HR Director, TechSolutions Inc.",
  },
  {
    quote:
      "As a fast-growing startup, we need reliable verification that doesn't slow us down. The Hiring Partner's platform provides exactly that, with an intuitive dashboard that keeps us informed throughout the process.",
    author: "Michael Chen",
    title: "COO, InnovateTech",
  },
  {
    quote:
      "The level of detail in the verification reports is impressive. We've caught several discrepancies that would have been problematic down the line. Worth every penny for the peace of mind.",
    author: "David Rodriguez",
    title: "Talent Acquisition Manager, Global Finance Group",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">
            Trusted by companies of all sizes for reliable background verification
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-stone-900 p-6 rounded-lg shadow-lg h-full border-1 border-stone-600">
              <p className="italic text-gray-100 text-lg">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-stone-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-3 grid-cols-4 sm:grid-cols-6 gap-6 justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-stone-800 rounded-lg h-14 w-24 flex items-center justify-center"
              >
                <span className="text-white opacity-75 font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
