"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h5 className="text-lg font-semibold mb-2">Background Verification Team</h5>
                        <p className="text-sm text-gray-300">
                            Trusted background verification services for organizations and individuals worldwide.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold mb-2">Company</h5>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li><a href="/about" className="hover:text-teal-400">About Us</a></li>
                            <li><a href="/contact" className="hover:text-teal-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-teal-400">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold mb-2">Services</h5>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li><a href="/verification" className="hover:text-teal-400">Background Checks</a></li>
                            <li><a href="#" className="hover:text-teal-400">Identity Verification</a></li>
                            <li><a href="#" className="hover:text-teal-400">Employment Screening</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold mb-2">Resources</h5>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li><a href="#" className="hover:text-teal-400">Blog</a></li>
                            <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-black my-6" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; 2024 Background Verification Team. All rights reserved.
                    </p>
                    <div className="flex flex-row md:flex-col gap-4">
                        <a href="#" className="text-gray-400 hover:text-white text-lg">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-lg">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-lg">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
