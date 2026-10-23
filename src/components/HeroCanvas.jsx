import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle high DPI display
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.parentElement.clientWidth * dpr;
      canvas.height = canvas.parentElement.clientHeight * dpr;
      canvas.style.width = `${canvas.parentElement.clientWidth}px`;
      canvas.style.height = `${canvas.parentElement.clientHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates with smooth damping
    let mouse = {
      x: canvas.parentElement.clientWidth * 0.7,
      y: canvas.parentElement.clientHeight * 0.45,
      targetX: canvas.parentElement.clientWidth * 0.7,
      targetY: canvas.parentElement.clientHeight * 0.45,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate floating geometric particles
    const particleCount = window.innerWidth < 768 ? 24 : 45;
    const particles = [];
    const width = () => canvas.parentElement.clientWidth;
    const height = () => canvas.parentElement.clientHeight;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width(),
        y: Math.random() * height(),
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.4),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.4),
        size: Math.random() * 4 + 2,
        type: Math.random() > 0.65 ? 'polygon' : Math.random() > 0.4 ? 'square' : 'circle',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.015,
        colorType: i % 2 === 0 ? 'px' : 'dx', // PromptX Cobalt or DesignXpo Orange
        baseAlpha: Math.random() * 0.25 + 0.1,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      const w = width();
      const h = height();

      // Damped mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, w, h);

      // Draw subtle connective lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.14;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(18, 19, 22, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw line towards cursor if close
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = particles[i].colorType === 'px' 
            ? `rgba(59, 80, 223, ${mAlpha})` 
            : `rgba(255, 92, 0, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw floating geometric particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.vRot;

          // Wrap edges
          if (p.x < -30) p.x = w + 30;
          if (p.x > w + 30) p.x = -30;
          if (p.y < -30) p.y = h + 30;
          if (p.y > h + 30) p.y = -30;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const color = p.colorType === 'px' 
          ? `rgba(59, 80, 223, ${p.baseAlpha})` 
          : `rgba(255, 92, 0, ${p.baseAlpha})`;

        ctx.fillStyle = color;
        ctx.strokeStyle = p.colorType === 'px' ? 'rgba(59, 80, 223, 0.4)' : 'rgba(255, 92, 0, 0.4)';
        ctx.lineWidth = 1;

        if (p.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'square') {
          ctx.beginPath();
          ctx.rect(-p.size, -p.size, p.size * 2, p.size * 2);
          ctx.stroke();
          ctx.fill();
        } else {
          // Polygon triangle / diamond
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.5);
          ctx.lineTo(p.size * 1.3, p.size * 1.2);
          ctx.lineTo(-p.size * 1.3, p.size * 1.2);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
