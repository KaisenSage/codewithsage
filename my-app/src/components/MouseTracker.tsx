"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion"; // useSpring kept for scale/opacity

export default function MouseTracker() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);

  /* ── raw mouse position — both dot and ring snap here with zero lag */
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  /* ── scale / opacity springs for interaction feedback only */
  const dotScale    = useSpring(1,   { stiffness: 800, damping: 40 });
  const ringScale   = useSpring(1,   { stiffness: 600, damping: 36 });
  const ringOpacity = useSpring(0.7, { stiffness: 500, damping: 36 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    const onDown = () => {
      dotScale.set(0.45);
      ringScale.set(0.7);
    };
    const onUp = () => {
      dotScale.set(hoveringRef.current ? 0 : 1);
      ringScale.set(hoveringRef.current ? 2.4 : 1);
    };

    const onHoverIn = () => {
      hoveringRef.current = true;
      setHovering(true);
      dotScale.set(0);
      ringScale.set(2.4);
      ringOpacity.set(0.55);
    };
    const onHoverOut = () => {
      hoveringRef.current = false;
      setHovering(false);
      dotScale.set(1);
      ringScale.set(1);
      ringOpacity.set(0.7);
    };

    const attach = (root: Document | Element = document) => {
      root
        .querySelectorAll<Element>(
          "a, button, [role='button'], input, textarea, select, label, [tabindex]"
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", onHoverIn);
          el.addEventListener("mouseleave", onHoverOut);
        });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);
    attach();

    /* Re-attach when new elements appear (modals, drawers, etc.) */
    const observer = new MutationObserver(() => attach());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/*
        mix-blend-mode: difference + white =
          white on dark bg  → shows white
          white on light bg → inverts to dark/black
          white on blue bg  → shows yellow (complement)
        Result: cursor is always visible regardless of background colour.
      */}

      {/* DOT — exact position, no lag */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          scale: dotScale,
          opacity: visible ? 1 : 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#ffffff",
          mixBlendMode: "difference",
        }}
      />

      {/* RING — zero-lag follow, scale/opacity spring on hover/click */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: visible ? ringOpacity : 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid #ffffff",
          background: "transparent",
          mixBlendMode: "difference",
        }}
      />

      {/* GLOW HALO — soft ambient bloom on hover only (no blend mode, intentional) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden lg:block"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: visible && hovering ? 0.14 : 0,
          width: 72,
          height: 72,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, transparent 70%)",
          filter: "blur(10px)",
          transition: "opacity 0.25s",
        }}
      />
    </>
  );
}
