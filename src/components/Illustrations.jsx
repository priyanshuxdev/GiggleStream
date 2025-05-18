import React from "react";
import {
  VideoCamera,
  PlayButton,
  CommentBubble,
  Star,
  MusicNote,
  Heart,
  BackgroundPatterns,
} from "../utils/svgElements";

const Illustrations = () => {
  return (
    <div className="illustrations-container absolute inset-0 pointer-events-none">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <BackgroundPatterns className="w-full h-full" />
      </div>

      {/* Floating Video Camera */}
      <VideoCamera className="absolute top-[15%] right-[10%] w-24 h-24 animate-float" />

      {/* Play Button */}
      <PlayButton className="absolute bottom-[25%] left-[8%] w-20 h-20 animate-bounce-slow" />

      {/* Comment Bubble */}
      <CommentBubble className="absolute top-[40%] left-[15%] w-16 h-16 animate-float-delayed" />

      {/* Star */}
      <Star className="absolute bottom-[35%] right-[20%] w-12 h-12 animate-spin-slow" />

      {/* Music Note */}
      <MusicNote className="absolute top-[60%] right-[15%] w-14 h-14 animate-float" />

      {/* Heart */}
      <Heart className="absolute top-[25%] left-[25%] w-10 h-10 animate-pulse" />
    </div>
  );
};

export default Illustrations;
