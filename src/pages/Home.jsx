import React, { useEffect } from "react";
import BackgroundSVG from "../components/BackgroundSVG";
import { runHomeAnimations } from "../utils/homeAnimations";
import Feature from "../components/sections/Feature";
import HowToUse from "../components/sections/HowToUse";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";

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
        <Hero />

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
