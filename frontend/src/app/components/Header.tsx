import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-black text-white p-4 fixed top-2 right-0 w-full max-w-6xl z-50 rounded-full shadow-md md:top-4">
      <nav className="flex items-center justify-between mx-auto px-4 rounded-full">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center">
            <span className="text-blue-400 mr-2">🌐</span> MyApp
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="block md:hidden" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Desktop Sign In and Try Out buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/login">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full">
              Sign In
            </button>
          </Link>
          <Link href="/signUp">
            <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full flex items-center">
              Try Out X <span>↗</span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 bg-black text-white z-50 flex flex-col items-start p-6 space-y-6 w-10/12 max-w-sm rounded-r-lg">
          <div className="flex justify-between items-center w-full mb-6">
            <h2 className="text-xl font-bold">MyApp Menu</h2>
            <button onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          <Link href="/login" className="w-full">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-full w-full text-left">
              Sign In
            </button>
          </Link>
          <Link href="/signUp" className="w-full">
            <button className="bg-white hover:bg-gray-200 text-black px-4 py-3 rounded-full w-full text-left flex justify-between items-center">
              Try Out X <span>↗</span>
            </button>
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 w-full">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 w-full">
            About
          </Link>
          <Link href="/pricing" className="text-white hover:text-gray-300 w-full">
            Pricing
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 w-full">
            Contact
          </Link>
          <div className="w-full">
            <button
              className="flex items-center justify-between w-full text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Resources</span>
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-white">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white">
                  Blog
                </Link>
                <Link href="/changelog" className="block text-gray-400 hover:text-white">
                  Changelog
                </Link>
              </div>
            )}
          </div>
          <Link href="/pricing" className="text-white hover:text-gray-300 w-full">
            Pricing
          </Link>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-full w-full text-left flex items-center mt-auto">
            <Moon size={16} className="mr-2" /> Dark
          </button>
        </div>
      )}
    </header>
  );
}

