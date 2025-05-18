// Video Camera SVG
export const VideoCamera = ({
  className = "",
  fill = "#B85C38",
  opacity = "0.2",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 10.5V7C17 6.44772 16.5523 6 16 6H4C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V13.5L21 17.5V6.5L17 10.5Z"
      fill={fill}
      fillOpacity={opacity}
    />
  </svg>
);

// Play Button SVG
export const PlayButton = ({
  className = "",
  fill = "#B85C38",
  opacity = "0.3",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#4A2C2A" fillOpacity="0.1" />
    <path d="M10 8L16 12L10 16V8Z" fill={fill} fillOpacity={opacity} />
  </svg>
);

// Comment Bubble SVG
export const CommentBubble = ({
  className = "",
  fill = "#DFCCAA",
  opacity = "0.3",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
      fill={fill}
      fillOpacity={opacity}
    />
  </svg>
);

// Star SVG
export const Star = ({ className = "", fill = "#B85C38", opacity = "0.2" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill={fill}
      fillOpacity={opacity}
    />
  </svg>
);

// Music Note SVG
export const MusicNote = ({
  className = "",
  fill = "#4A2C2A",
  opacity = "0.15",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12Z"
      fill={fill}
      fillOpacity={opacity}
    />
  </svg>
);

// Heart SVG
export const Heart = ({
  className = "",
  fill = "#B85C38",
  opacity = "0.2",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      fill={fill}
      fillOpacity={opacity}
    />
  </svg>
);

// Background Patterns SVG
export const BackgroundPatterns = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
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
    <circle cx="20" cy="20" r="5" fill="#4A2C2A" className="opacity-20" />
    <circle cx="80" cy="80" r="8" fill="#B85C38" className="opacity-20" />
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
);
