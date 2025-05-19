import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-[#4A2C2A] mb-3">
        Made with ❤️ by{" "}
        <Link
          to={"https://x.com/prynsustwt"}
          className="underline font-semibold"
          target="_blank"
        >
          @prynsustwt
        </Link>
      </p>
      <div>
        <span className="text-[#4A2C2A]">
          Copyright © 2025 GiggleStream. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
