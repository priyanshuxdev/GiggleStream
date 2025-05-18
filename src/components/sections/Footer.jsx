import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-[#4A2C2A] mb-4">Made with ❤️ for kids everywhere</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/player"
          className="text-[#4A2C2A] hover:text-[#B85C38] transition-colors"
        >
          Player
        </Link>
        <Link
          to="/about"
          className="text-[#4A2C2A] hover:text-[#B85C38] transition-colors"
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Footer;
