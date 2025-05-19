import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function runHomeAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Background animation
  const colors = ["#4A2C2A", "#B85C38", "#DFCCAA"];
  const container = document.querySelector(".background-container");

  // Create floating elements
  for (let i = 0; i < 15; i++) {
    const element = document.createElement("div");
    const size = Math.random() * 100 + 50;
    const color = colors[Math.floor(Math.random() * colors.length)];

    element.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? "50%" : "30%"};
      opacity: 0.1;
      filter: blur(8px);
    `;

    container.appendChild(element);

    gsap.to(element, {
      x: Math.random() * window.innerWidth - size,
      y: Math.random() * window.innerHeight - size,
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 10,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }

  // SVG Background Elements animation
  const svgElements = document.querySelectorAll(
    ".background-svg path, .background-svg circle, .background-svg rect"
  );
  if (svgElements) {
    svgElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0,
          rotation: -45,
        },
        {
          opacity: 0.15,
          scale: 1,
          rotation: 0,
          duration: 2,
          delay: index * 0.2,
          ease: "elastic.out(1, 0.5)",
        }
      );

      gsap.to(element, {
        y: "+=20",
        rotation: "+=10",
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }

  // Create timeline for text animations
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animate welcome text
  tl.fromTo(
    ".welcome-text",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
    }
  )
    .fromTo(
      ".title-char",
      {
        y: 100,
        opacity: 0,
        rotation: 15,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.03,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    )
    .fromTo(
      [".subtitle-text", ".cta-button"],
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
      },
      "-=0.5"
    );

  // Features animation
  gsap.utils.toArray(".feature-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // How to Use animation
  gsap.utils.toArray(".step-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Cleanup for background elements
  return () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
}
