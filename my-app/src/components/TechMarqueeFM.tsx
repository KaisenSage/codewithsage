"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./TechMarqueeFM.module.css";

type Logo = { src: string; alt?: string };

type Props = {
  logos?: Logo[];
  height?: number;
  gap?: number;
  speed?: number;
  title?: {
    eyebrow?: string;
    heading?: React.ReactNode;
    subheading?: string;
  };
};

const DEFAULT_LOGOS: Logo[] = [
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/nextjs.svg", alt: "Next.js" },
  { src: "/logos/typescript.svg", alt: "TypeScript" },
  { src: "/logos/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/logos/nodejs.svg", alt: "Node.js" },
  { src: "/logos/vercel.svg", alt: "Vercel" },
  { src: "/logos/aws.svg", alt: "AWS" },
];

export default function TechMarqueeFM({
  logos = DEFAULT_LOGOS,
  height = 96,
  gap = 24,
  speed = 18,
  title = {
    eyebrow: "OUR STACKS",
    heading: (
      <>
        Reliable tools for <span className={styles.headingEm}>Scalable Growth</span>
      </>
    ),
    subheading: "",
  },
}: Props) {
  const duplicated = useMemo(() => [...logos, ...logos], [logos]);
  const controls = useAnimation();
  const mounted = useRef(false);

  const [adjustedSpeed, setAdjustedSpeed] = useState<number>(speed);
  useEffect(() => {
    const calc = () => {
      if (typeof window === "undefined") return speed;
      const w = window.innerWidth;
      const factor = Math.max(0.7, Math.min(1.4, w / 1200));
      return Math.round(speed * factor * 100) / 100;
    };
    const update = () => setAdjustedSpeed(calc());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [speed]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      controls.stop();
      return;
    }

    const start = async () => {
      await controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: adjustedSpeed,
          repeatType: "loop",
        },
      });
    };

    if (!mounted.current) mounted.current = true;
    start();

    return () => controls.stop();
  }, [controls, adjustedSpeed]);

  const padding = Math.max(8, Math.round(height * 0.12));
  const small = Math.max(32, Math.round(height * 0.6));
  const medium = Math.max(48, Math.round(height * 0.8));
  const large = height;

  const cssVars: Record<string, string> = {
    "--tile-size": `${height}px`,
    "--tile-gap": `${gap}px`,
    "--tile-padding": `${padding}px`,
  };

  return (
    <section aria-label="Tech stacks" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <header className={styles.header}>
          {/* render eyebrow as a presentational button (disabled to prevent clicks) */}
          {title.eyebrow && (
            <button className={styles.eyebrowButton} type="button" disabled aria-disabled="true">
              {title.eyebrow}
            </button>
          )}
          <h2 className={styles.heading}>{title.heading}</h2>
          {title.subheading && <p className={styles.subheading}>{title.subheading}</p>}
        </header>

        {/* Marquee */}
        <motion.div
          className={styles.marqueeWrap}
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: adjustedSpeed,
                repeatType: "loop",
              },
            })
          }
        >
          <div className={styles.row} style={cssVars as React.CSSProperties}>
            {duplicated.map((logo, i) => {
              const isDecorative = !logo.alt || logo.alt.trim() === "";
              return (
                <div
                  key={i}
                  className={`${styles.tile} group`}
                  role={isDecorative ? undefined : "img"}
                  aria-label={isDecorative ? undefined : logo.alt}
                  tabIndex={0}
                  onFocus={() => controls.stop()}
                  onBlur={() =>
                    controls.start({
                      x: ["0%", "-50%"],
                      transition: {
                        repeat: Infinity,
                        ease: "linear",
                        duration: adjustedSpeed,
                        repeatType: "loop",
                      },
                    })
                  }
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? ""}
                    fill
                    sizes={`(max-width: 640px) ${small}px, (max-width: 1024px) ${medium}px, ${large}px`}
                    className={styles.logo}
                    style={{ objectFit: "contain" }}
                    onError={() => {
                      // development-only warning
                      if (process.env.NODE_ENV !== "production") {
                        console.warn("TechMarqueeFM: failed to load", logo.src);
                      }
                    }}
                  />

                  {logo.alt && <span className={styles.tileLabel}>{logo.alt}</span>}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}