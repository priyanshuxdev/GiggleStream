import { Link } from "react-router-dom";

function Hero() {
  return (
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
        An Interactive video player so that you can Laugh, Learn, and Stream the
        Fun!
      </span>
      <Link to="/player" className="hero_explore_btn cta-button">
        Explore
      </Link>
    </div>
  );
}

export default Hero;
