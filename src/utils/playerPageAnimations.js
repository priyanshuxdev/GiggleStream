import gsap from "gsap";

export const initFloatingElements = (container) => {
  if (!container) return;

  const colors = ["#4A2C2A", "#B85C38", "#DFCCAA"];

  // Create 15 floating elements
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
};

export const initSVGAnimations = (svgRef) => {
  if (!svgRef?.current) return;

  const svgElements = svgRef.current.querySelectorAll("path, circle, rect");
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
};

export const cleanupFloatingElements = (container) => {
  if (!container) return;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
