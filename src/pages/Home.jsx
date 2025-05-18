import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundSVG from "../components/BackgroundSVG";
import { runHomeAnimations } from "../utils/homeAnimations";
import Feature from "../components/sections/Feature";
import HowToUse from "../components/sections/HowToUse";
import Footer from "../components/sections/Footer";

function Home() {
  useEffect(() => {
    const cleanup = runHomeAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-[#DFCCAA] relative overflow-hidden">
      {/* Animated background container */}
      <div className="absolute inset-0 z-0 background-container" />

      {/* SVG Background Elements */}
      <div className="background-svg">
        <BackgroundSVG />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10 mt-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] mb-16">
          <h1 className="text-[65px] font-black text-[#4A2C2A] leading-tight cursor-default drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)] text-center">
            <span className="welcome-text">Welcome to </span>
            <span className="bg-[#B85C38] text-white px-3 py-1 rounded-md inline-block">
              <span className="title-char">G</span>
              <span className="title-char">i</span>
              <span className="title-char">g</span>
              <span className="title-char">g</span>
              <span className="title-char">l</span>
              <span className="title-char">e</span>
              <span className="title-char">S</span>
              <span className="title-char">t</span>
              <span className="title-char">r</span>
              <span className="title-char">e</span>
              <span className="title-char">a</span>
              <span className="title-char">m</span>
            </span>
          </h1>
          <span className="text-[#4A2C2A] text-xl mt-4 font-medium text-center max-w-2xl subtitle-text">
            An Interactive video player so that you can Laugh, Learn, and Stream
            the Fun!
          </span>
          <Link
            to="/player"
            className="mt-8 px-8 py-3 text-xl font-bold text-white bg-[#B85C38] border-4 border-[#4A2C2A] rounded-xl shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(74,44,42,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#4A2C2A] cta-button"
          >
            Explore
          </Link>
        </div>

        {/* Features Section */}
        <Feature />

        {/* How to Use Section */}
        <HowToUse />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
