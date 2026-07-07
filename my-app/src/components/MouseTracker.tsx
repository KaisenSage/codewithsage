"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [tabindex]:not([tabindex='-1'])";

export default function MouseTracker() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const rafId = useRef(0);
  const hovering = useRef(false);
  const pressed = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    document.documentElement.classList.add("custom-cursor");

    const dotScale = () => {
      if (hovering.current) return 0;
      if (pressed.current) return 0.45;
      return 1;
    };

    const ringScale = () => {
      if (hovering.current) return 2.4;
      if (pressed.current) return 0.7;
      return 1;
    };

    const paint = () => {
      rafId.current = 0;
      const { x, y } = pos.current;
      const base = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      dot.style.transform = `${base} scale(${dotScale()})`;
      const rs = ringScale();
      ring.style.transform = `${base} scale(${rs})`;
      glow.style.transform = `${base} scale(${rs})`;
    };

    const schedulePaint = () => {
      if (!rafId.current) rafId.current = requestAnimationFrame(paint);
    };

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dot.style.opacity !== "1") {
        dot.style.opacity = "1";
        ring.style.opacity = hovering.current ? "0.55" : "0.7";
      }
      schedulePaint();
    };

    const setHover = (active: boolean) => {
      if (hovering.current === active) return;
      hovering.current = active;
      ring.style.opacity = active ? "0.55" : "0.7";
      glow.style.opacity = active ? "0.14" : "0";
      schedulePaint();
    };

    const onDown = () => {
      pressed.current = true;
      schedulePaint();
    };

    const onUp = () => {
      pressed.current = false;
      schedulePaint();
    };

    const onLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const onEnterWindow = () => {
      if (pos.current.x >= 0) {
        dot.style.opacity = "1";
        ring.style.opacity = hovering.current ? "0.55" : "0.7";
        glow.style.opacity = hovering.current ? "0.14" : "0";
      }
    };

    const attached = new WeakSet<Element>();

    const attach = () => {
      document.querySelectorAll<Element>(INTERACTIVE).forEach((el) => {
        if (attached.has(el)) return;
        attached.add(el);
        el.addEventListener("mouseenter", () => setHover(true));
        el.addEventListener("mouseleave", (e) => {
          const related = e.relatedTarget as Element | null;
          if (related?.closest(INTERACTIVE)) return;
          setHover(false);
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);
    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden will-change-transform lg:block"
        style={{
          opacity: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#ffffff",
          mixBlendMode: "difference",
          transition: "opacity 0.15s ease",
        }}
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden will-change-transform lg:block"
        style={{
          opacity: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid #ffffff",
          background: "transparent",
          mixBlendMode: "difference",
          transition: "opacity 0.15s ease",
        }}
      />

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden will-change-transform lg:block"
        style={{
          opacity: 0,
          width: 72,
          height: 72,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, transparent 70%)",
          filter: "blur(10px)",
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
