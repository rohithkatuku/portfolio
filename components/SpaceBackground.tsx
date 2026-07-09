"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  glow: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT = 420;
const GLOW_STAR_RATIO = 0.04;
const PARALLAX_STRENGTH = 26;
const BAND_PARALLAX_STRENGTH = 10;

function makeStar(width: number, height: number): Star {
  const z = 0.2 + Math.random() * 0.8;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z,
    r: 0.4 + z * 1.6,
    baseOpacity: 0.25 + Math.random() * 0.55,
    twinkleSpeed: 0.4 + Math.random() * 1.6,
    twinklePhase: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 0.05 * z,
    vy: (Math.random() - 0.5) * 0.05 * z,
    glow: Math.random() < GLOW_STAR_RATIO,
  };
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => makeStar(width, height));
    const shootingStars: ShootingStar[] = [];
    let nextShootAt = 3 + Math.random() * 5;

    const mouse = { x: width / 2, y: height / 2 };
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      target.x = (mouse.x - width / 2) / (width / 2);
      target.y = (mouse.y - height / 2) / (height / 2);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    function drawStar(s: Star, px: number, py: number, opacity: number) {
      if (!ctx) return;
      if (s.glow) {
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, s.r * 5);
        gradient.addColorStop(0, `rgba(226, 232, 255, ${opacity})`);
        gradient.addColorStop(1, "rgba(226, 232, 255, 0)");
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(px, py, s.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(226, 232, 255, ${opacity})`;
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        drawStar(s, s.x, s.y, s.baseOpacity);
      }
    }

    let frameId: number;
    const start = performance.now();
    let lastT = 0;

    function tick(now: number) {
      if (!ctx) return;
      const t = (now - start) / 1000;
      const dt = lastT ? t - lastT : 0;
      lastT = t;

      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;

      if (bandRef.current) {
        bandRef.current.style.transform = `translate(${current.x * BAND_PARALLAX_STRENGTH}px, ${current.y * BAND_PARALLAX_STRENGTH}px)`;
      }

      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const px = s.x + current.x * PARALLAX_STRENGTH * s.z;
        const py = s.y + current.y * PARALLAX_STRENGTH * s.z;

        const twinkle = 0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
        const opacity = s.baseOpacity * (0.5 + 0.5 * twinkle);

        drawStar(s, px, py, opacity);
      }

      nextShootAt -= dt;
      if (nextShootAt <= 0) {
        const fromLeft = Math.random() < 0.5;
        shootingStars.push({
          x: fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3,
          y: Math.random() * height * 0.4,
          vx: (fromLeft ? 1 : -1) * (500 + Math.random() * 300),
          vy: 260 + Math.random() * 160,
          life: 0,
          maxLife: 0.7 + Math.random() * 0.3,
        });
        nextShootAt = 6 + Math.random() * 9;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.life += dt;
        if (sh.life >= sh.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }
        const progress = sh.life / sh.maxLife;
        const headX = sh.x + sh.vx * sh.life;
        const headY = sh.y + sh.vy * sh.life;
        const tailX = headX - sh.vx * 0.12;
        const tailY = headY - sh.vy * 0.12;
        const opacity = 1 - progress;

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
        gradient.addColorStop(0, "rgba(226, 232, 255, 0)");
        gradient.addColorStop(1, `rgba(226, 232, 255, ${opacity})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();
      }

      frameId = requestAnimationFrame(tick);
    }

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div ref={bandRef} className="milkyway">
        <div className="dust-lane dust-lane-a" />
        <div className="dust-lane dust-lane-b" />
      </div>
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
}
