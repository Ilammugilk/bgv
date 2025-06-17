'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            Background Verification Team
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavItem href="/" label="Home" />
            <NavItem href="/verification" label="Verification" />
            <NavItem href="/dashboard" label="Dashboard" />
            <NavItem href="/about" label="About" />
            <NavItem href="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-500 hover:text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
          <MobileNavItem href="/" label="Home" />
          <MobileNavItem href="/verification" label="Verification" />
          <MobileNavItem href="/dashboard" label="Dashboard" />
          <MobileNavItem href="/about" label="About" />
          <MobileNavItem href="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, label }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ href, label }) => (
  <Link
    href={href}
    className="block text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition"
  >
    {label}
  </Link>
);


