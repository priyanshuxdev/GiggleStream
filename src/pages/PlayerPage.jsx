import React, { useEffect, useRef } from "react";
import VideoPlayerComp from "../components/VideoPlayerComp";
import CommentSection from "../components/CommentSection";
import { VideoProvider } from "../context/VideoContext";
import {
  initFloatingElements,
  initSVGAnimations,
  cleanupFloatingElements,
} from "../utils/playerPageAnimations";

function PlayerPage() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Initialize floating elements
    initFloatingElements(containerRef.current);

    // Initialize SVG animations
    initSVGAnimations(svgRef);

    return () => {
      cleanupFloatingElements(containerRef.current);
    };
  }, []);

  return (
    <VideoProvider>
      <div className="bg-[#DFCCAA] min-h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover relative overflow-hidden p-8 pt-24">
        {/* Animated background container */}
        <div ref={containerRef} className="absolute inset-0 z-0" />

        {/* SVG Background Elements */}
        <div ref={svgRef} className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Abstract shapes */}
            <path
              d="M10,50 Q25,20 40,50 T70,50 T100,50"
              fill="none"
              stroke="#4A2C2A"
              strokeWidth="0.5"
              className="opacity-20"
            />
            <path
              d="M0,30 Q50,0 100,30 T100,70 T0,70"
              fill="none"
              stroke="#B85C38"
              strokeWidth="0.5"
              className="opacity-20"
            />
            <circle
              cx="20"
              cy="20"
              r="5"
              fill="#4A2C2A"
              className="opacity-20"
            />
            <circle
              cx="80"
              cy="80"
              r="8"
              fill="#B85C38"
              className="opacity-20"
            />
            <rect
              x="60"
              y="10"
              width="10"
              height="10"
              fill="#4A2C2A"
              className="opacity-20"
            />
            <rect
              x="10"
              y="60"
              width="15"
              height="15"
              fill="#B85C38"
              className="opacity-20"
            />

            {/* Decorative patterns */}
            <path
              d="M0,0 L100,100 M0,100 L100,0"
              stroke="#4A2C2A"
              strokeWidth="0.3"
              className="opacity-10"
            />
            <path
              d="M50,0 L50,100 M0,50 L100,50"
              stroke="#B85C38"
              strokeWidth="0.3"
              className="opacity-10"
            />

            {/* Wave patterns */}
            <path
              d="M0,25 Q25,15 50,25 T100,25"
              fill="none"
              stroke="#4A2C2A"
              strokeWidth="0.5"
              className="opacity-15"
            />
            <path
              d="M0,75 Q25,85 50,75 T100,75"
              fill="none"
              stroke="#B85C38"
              strokeWidth="0.5"
              className="opacity-15"
            />
          </svg>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <VideoPlayerComp />
          </div>

          {/* Comments Section */}
          <div>
            <CommentSection />
          </div>
        </div>
      </div>
    </VideoProvider>
  );
}

export default PlayerPage;
