import gsap from "gsap";

export const initHeaderAnimations = () => {
  // Initial state
  gsap.set(".header", {
    y: -100,
    opacity: 0,
    scale: 0.8,
  });

  // Entrance animation
  gsap.to(".header", {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });

  // Stagger animation for nav items
  gsap.fromTo(
    ".nav-link",
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

  // Avatar animation
  gsap.fromTo(
    ".avatar-button",
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
};
