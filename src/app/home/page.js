"use client"
import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaRegBuilding, FaUserAlt } from 'react-icons/fa';
import {
  BsPeopleFill,
  BsInboxFill,
  BsClipboardData,
  BsPersonLinesFill,
  BsBriefcaseFill,
  BsShieldLockFill,
} from 'react-icons/bs';
import HowItWorks from "../../components/howitwork/page";
import Whychoose from "../../components/whychoose/page";
import Testimonials from "../../components/testinomial/page";
import { useRouter } from "next/navigation";

export default function BVHome(){
  const router = useRouter();
  const handleClick = ()=>{
    router.push('../dash/organization')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-5" style={{maxWidth:500}}>
              Trusted Background Verification for Confident Hiring
            </h1>
            <p className="text-xl text-white mb-8">
              Our comprehensive background verification services help you make informed hiring decisions with speed, accuracy, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
                Start a Verification
              </button>
              <button className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </div>
          </div>
           
          <div className="container mb-15 mt-14">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Background verification" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-black rounded-full h-3 w-3 mr-2"></div>
                  <span className="text-black font-bold">Trusted by 1,000+ Companies</span>
                </div>
                <span className="text-gray-500 text-sm">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with BGV Platform</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Access Dashboard
            </button>
            <button className="border border-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition">
              Start Verification
            </button>
          </div>
        </div>
      </section>
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-3">Tailored Solutions for Every Client</h2>
              <p className="text-gray-600 mb-12">``
                Whether you're an organization managing multiple users or an individual seeking personal verification, we have the right solution for you.
              </p>
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Organization Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:border">
                  <FaRegBuilding size={48} className="text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Organizations</h3>
                  <p className="text-gray-500 mb-4">Complete workforce verification management</p>
                  <ul className="text-left w-full px-4 text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><BsPeopleFill className="mr-2 text-gray-800" />Multi-user management</li>
                    <li className="flex items-center"><BsInboxFill className="mr-2 text-gray-800" />Bulk verification requests</li>
                    <li className="flex items-center"><BsClipboardData className="mr-2 text-gray-800" />Team collaboration tools</li>
                  </ul>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition" onClick={handleClick}>
                    Get Started for Organizations
                  </button>
                </div>
      
                {/* Individuals Card */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center">
                  <FaUserAlt size={48} className="text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Individuals</h3>
                  <p className="text-gray-500 mb-4">Personal background verification services</p>
                  <ul className="text-left w-full px-4 text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><BsPersonLinesFill className="mr-2 text-gray-800" />Personal verification</li>
                    <li className="flex items-center"><BsBriefcaseFill className="mr-2 text-gray-800" />Professional checks</li>
                    <li className="flex items-center"><BsShieldLockFill className="mr-2 text-gray-800" />Criminal background</li>
                  </ul>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                    Get Started for Individuals
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Whychoose/>
          <HowItWorks/>
          <Testimonials/>
    </div>
  );
};
