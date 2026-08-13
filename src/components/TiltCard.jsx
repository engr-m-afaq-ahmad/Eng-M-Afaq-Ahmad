import React, { useRef } from "react";

/**
 * Wraps any content in a 3D perspective tilt card.
 * Tracks the cursor and rotates the card in 3D space while
 * projecting a light glare toward the pointer position.
 */
const TiltCard = ({
  children,
  className = "",
  maxTilt = 8,
  zDepth = 30,
}) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rx = (0.5 - py) * maxTilt * 2;
    const ry = (px - 0.5) * maxTilt * 2;

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-glare" />
      <div className="tilt-pop" style={{ transform: `translateZ(${zDepth}px)` }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;