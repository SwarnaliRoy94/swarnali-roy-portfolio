"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  twinkle: number;
  hue: "white" | "teal" | "violet";
};

type Meteor = {
  x: number;
  y: number;
  length: number;
  speed: number;
  delay: number;
  opacity: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let frame = 0;

    const setSize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(180, Math.floor(window.innerWidth / 8));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.35,
        speed: Math.random() * 0.22 + 0.04,
        opacity: Math.random() * 0.7 + 0.25,
        twinkle: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.76 ? "teal" : Math.random() > 0.86 ? "violet" : "white",
      }));
      meteors = Array.from({ length: 5 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 4 + 3,
        delay: Math.random() * 260,
        opacity: Math.random() * 0.35 + 0.25,
      }));
    };

    const draw = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => {
        const twinkle = reduceMotion.matches
          ? 1
          : 0.7 + Math.sin(frame * 0.035 + star.twinkle) * 0.3;
        const color = isDarkMode
          ? star.hue === "teal"
            ? "94,234,212"
            : star.hue === "violet"
              ? "196,181,253"
              : "255,255,255"
          : star.hue === "teal"
            ? "37,143,153"
            : star.hue === "violet"
              ? "124,106,182"
              : "155,92,130";
        const starAlpha = isDarkMode
          ? star.opacity * twinkle
          : Math.min(0.82, star.opacity * twinkle * 0.96 + 0.12);

        context.fillStyle = `rgba(${color},${starAlpha})`;
        context.shadowBlur = star.radius > 1.4 ? (isDarkMode ? 9 : 10) : 5;
        context.shadowColor = `rgba(${color},${isDarkMode ? 0.65 : 0.42})`;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();

        if (!reduceMotion.matches) {
          star.y += star.speed;
          star.x += Math.sin(star.y * 0.01) * 0.04;

          if (star.y > window.innerHeight + 8) {
            star.y = -8;
            star.x = Math.random() * window.innerWidth;
          }
        }
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;

      meteors.forEach((meteor) => {
        if (frame < meteor.delay) {
          return;
        }

        const meteorOpacity = isDarkMode
          ? meteor.opacity
          : Math.min(0.82, meteor.opacity * 1.65);
        const meteorHead = isDarkMode ? "255,255,255" : "124,106,182";
        const meteorCore = isDarkMode ? "94,234,212" : "37,143,153";

        const gradient = context.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x + meteor.length,
          meteor.y - meteor.length * 0.45,
        );

        gradient.addColorStop(0, `rgba(${meteorHead},${meteorOpacity})`);
        gradient.addColorStop(0.24, `rgba(${meteorCore},${meteorOpacity})`);
        gradient.addColorStop(1, `rgba(${meteorCore},0)`);

        context.shadowBlur = isDarkMode ? 0 : 10;
        context.shadowColor = `rgba(${meteorCore},0.35)`;
        context.strokeStyle = gradient;
        context.lineWidth = isDarkMode ? 2 : 2.5;
        context.beginPath();
        context.moveTo(meteor.x, meteor.y);
        context.lineTo(meteor.x + meteor.length, meteor.y - meteor.length * 0.45);
        context.stroke();
        context.shadowBlur = 0;

        if (!reduceMotion.matches) {
          meteor.x -= meteor.speed;
          meteor.y += meteor.speed * 0.45;

          if (meteor.x < -meteor.length || meteor.y > window.innerHeight + 80) {
            meteor.x = window.innerWidth + Math.random() * 300;
            meteor.y = Math.random() * window.innerHeight * 0.45;
            meteor.delay = frame + Math.random() * 220;
          }
        }
      });

      frame += 1;

      if (!reduceMotion.matches) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    setSize();
    draw();
    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-95 dark:opacity-90"
      ref={canvasRef}
    />
  );
}
