"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseTracker() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const hoveringRef = useRef(false);

  /* ── raw mouse position (dot snaps instantly) */
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  /* ── ring follows with spring physics */
  const rx = useSpring(mx, { stiffness: 140, damping: 20, mass: 0.55 });
  const ry = useSpring(my, { stiffness: 140, damping: 20, mass: 0.55 });

  /* ── scale springs for hover / click feedback */
  const dotScale = useSpring(1, { stiffness: 500, damping: 30 });
  const ringScale = useSpring(1, { stiffness: 200, damping: 22 });
  const ringOpacity = useSpring(0.5, { stiffness: 200, damping: 24 });

  useEffect(() => {
    /* Only activate on pointer:fine (mouse) devices */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    /* Hide the default OS cursor via a class on <html> */
    document.documentElement.classList.add("custom-cursor");

    /* ── mouse move */
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    /* ── mouse leave / enter window */
    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    /* ── mouse down / up */
    const onDown = () => {
      setClicking(true);
      dotScale.set(0.5);
      ringScale.set(0.75);
    };
    const onUp = () => {
      setClicking(false);
      dotScale.set(hoveringRef.current ? 0 : 1);
      ringScale.set(hoveringRef.current ? 2.4 : 1);
    };

    /* ── attach hover listeners to all interactive elements */
    const attach = (root: Document | Element = document) => {
      root.querySelectorAll<Element>(
        "a, button, [role='button'], input, textarea, select, label, [tabindex]"
      ).forEach((el) => {
        el.addEventListener("mouseenter", onHoverIn);
        el.addEventListener("mouseleave", onHoverOut);
      });
    };

    const onHoverIn = () => {
      hoveringRef.current = true;
      setHovering(true);
      dotScale.set(0);
      ringScale.set(2.4);
      ringOpacity.set(0.22);
    };
    const onHoverOut = () => {
      hoveringRef.current = false;
      setHovering(false);
      dotScale.set(1);
      ringScale.set(1);
      ringOpacity.set(0.5);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);
    attach();

    /* Re-attach when new interactive elements are added (e.g. modals) */
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
      {/* ── DOT — snaps to exact cursor position ── */}
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
          background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
          boxShadow: "0 0 10px 2px rgba(99,102,241,0.45)",
        }}
      />

      {/* ── RING — spring-lag follow ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: visible ? ringOpacity : 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(99,102,241,0.85)",
          background: hovering
            ? "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)"
            : "transparent",
          backdropFilter: hovering ? "none" : "none",
          transition: "background 0.2s",
        }}
      />

      {/* ── GLOW HALO — ambient ring on hover only ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden lg:block"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: visible && hovering ? 0.18 : 0,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.9) 0%, transparent 70%)",
          filter: "blur(8px)",
          transition: "opacity 0.25s",
        }}
      />
    </>
  );
}
