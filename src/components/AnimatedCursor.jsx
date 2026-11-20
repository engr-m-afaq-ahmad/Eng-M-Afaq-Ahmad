import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [data-cursor], input, textarea, select, label";

const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-active");

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pointer };
    let frame = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      show();
    };

    const onOver = (e) => {
      const target = e.target.closest(INTERACTIVE);
      const active = Boolean(target);
      ring.classList.toggle("is-hover", active);
      dot.classList.toggle("is-hover", active);
    };

    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const render = () => {
      ringPos.x += (pointer.x - ringPos.x) * 0.16;
      ringPos.y += (pointer.y - ringPos.y) * 0.16;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    dot.style.opacity = "0";
    ring.style.opacity = "0";
    frame = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default AnimatedCursor;
