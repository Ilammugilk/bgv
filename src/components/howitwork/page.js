"use client";
import React from "react";
import Link from "next/link";

export default function HowItWorks(){
  const steps = [
    {
      number: "01",
      title: "Submit Request",
      description:
        "Fill out our simple form with the candidate's details or upload in bulk for multiple verifications.",
    },
    {
      number: "02",
      title: "Candidate Confirmation",
      description:
        "Candidates receive a secure link to confirm their consent and provide any additional information.",
    },
    {
      number: "03",
      title: "Verification Process",
      description:
        "Our experts conduct thorough checks using our network of verified sources and databases.",
    },
    {
      number: "04",
      title: "View Results",
      description:
        "Access detailed reports through our secure dashboard and make informed hiring decisions.",
    },
  ];

  return (
    <section className="py-16 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black-600">How It Works</h2>
          <p className="mt-4 text-black-600 text-lg">
            Our streamlined process makes background verification simple and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-black text-white text-xl font-bold">
                {step.number}
              </div>
              <h5 className="text-lg font-semibold text-black-600 mb-2">{step.title}</h5>
              <p className="text-black-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
            <a className="inline-block bg-black hover:bg-black text-white font-semibold px-6 py-3 rounded-lg text-lg transition">
              Start Your First Verification
            </a>
        </div>
      </div>
    </section>
  );
};
