import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const avatarRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Initial state
    gsap.set(headerRef.current, {
      y: -100,
      opacity: 0,
      scale: 0.8,
    });

    // Entrance animation
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    // Stagger animation for nav items
    const navItems = navRef.current?.querySelectorAll("a");
    if (navItems) {
      gsap.fromTo(
        navItems,
        {
          y: -20,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );
    }

    // Avatar animation
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        {
          x: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <nav
      ref={headerRef}
      className="header fixed top-4 left-1/2 -translate-x-1/2 w-[70%] max-w-6xl bg-white border-3 border-[#4A2C2A] rounded-full shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] z-50"
    >
      <div className="px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <Link
              to={"/"}
              className="text-2xl font-black bg-gradient-to-r from-[#4A2C2A] to-[#B85C38] text-transparent bg-clip-text hover:scale-105 transition-all duration-300 hover:rotate-1"
            >
              GiggleStream
            </Link>
          </div>

          {/* Navigation Links */}
          <div ref={navRef} className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to={"/"}
                className="text-base font-bold text-[#4A2C2A] hover:text-[#B85C38] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                Home
              </Link>
              <Link
                to={"/player"}
                className="text-base font-bold text-[#4A2C2A] hover:text-[#B85C38] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                Player
              </Link>
              <Link
                to={"/about"}
                className="text-base font-bold text-[#4A2C2A] hover:text-[#B85C38] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                About
              </Link>
            </div>
          </div>

          {/* Avatar */}
          <div ref={avatarRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-[#4A2C2A] text-white flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-lg font-bold">👤</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border-2 border-[#4A2C2A] shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-semibold text-[#4A2C2A]">
                    Guest User
                  </p>
                  <p className="text-xs text-gray-500">guest@example.com</p>
                </div>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#4A2C2A] hover:bg-[#DFCCAA] transition-colors duration-200"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#4A2C2A] hover:bg-[#DFCCAA] transition-colors duration-200"
                >
                  Settings
                </Link>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
