import React, { useEffect, useRef } from 'react';

export default function HeroCanvas({ activeEvent = 'all' }) {
  const canvasRef = useRef(null);
  const activeEventRef = useRef(activeEvent);

  // Keep ref synchronized with prop
  useEffect(() => {
    activeEventRef.current = activeEvent;
  }, [activeEvent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates
    const mouse = {
      x: window.innerWidth * 0.5,
      y: 250,
      targetX: window.innerWidth * 0.5,
      targetY: 250,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const width = () => (canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    const height = () => (canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight);

    // --- 1. PROMPT-X: Neural Synaptic Network Nodes ---
    const neuralNodes = [];
    const neuralCount = 28;
    for (let i = 0; i < neuralCount; i++) {
      neuralNodes.push({
        x: Math.random() * 1200,
        y: Math.random() * 600,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2.5,
        pulseOffset: Math.random() * Math.PI * 2,
        connections: [],
      });
    }

    const promptTokens = ['[prompt]', '[latent:z]', 'f(x)', '[seed:849]', '{tensor}', '[diffuse]', '8k', 'α:0.85'];
    const floatingTokens = promptTokens.map((txt, i) => ({
      text: txt,
      x: 100 + (i * 140) % 1100,
      y: 80 + ((i * 73) % 400),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: 0.18 + (i % 3) * 0.08,
    }));

    // --- 2. DESIGN-XPO: Vector Wireframe Boxes & Control Points ---
    const wireframes = [
      { x: 120, y: 140, w: 180, h: 110, rx: 8, label: '375 × 812' },
      { x: 780, y: 180, w: 220, h: 130, rx: 12, label: '1440 × 900' },
      { x: 440, y: 320, w: 160, h: 80, rx: 6, label: 'Button: 48dp' },
    ];

    // --- 3. CLUEX: Cryptic Waypoints & Sonar Radar Sweep ---
    const clueWaypoints = [
      { x: 140, y: 340, label: '01', code: '0x7F' },
      { x: 320, y: 220, label: '02', code: 'CIPHER' },
      { x: 580, y: 180, label: '03', code: 'LAT 11°N' },
      { x: 860, y: 280, label: '04', code: 'KEY:4B' },
      { x: 980, y: 130, label: '★', code: 'CACHE' },
    ];

    let radarAngle = 0;
    let time = 0;

    const render = () => {
      time += 0.02;
      radarAngle += 0.015;
      const w = width();
      const h = height();

      const isLight =
        document.documentElement.getAttribute('data-theme') === 'light' ||
        (!document.documentElement.getAttribute('data-theme') &&
          window.matchMedia &&
          !window.matchMedia('(prefers-color-scheme: dark)').matches);

      const mode = activeEventRef.current || 'all';

      // Mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, w, h);

      // Color Palettes
      const pxColor = isLight ? 'rgba(30, 64, 175, ' : 'rgba(56, 189, 248, ';
      const dxColor = isLight ? 'rgba(190, 24, 93, ' : 'rgba(236, 72, 153, ';
      const cxColor = isLight ? 'rgba(4, 120, 87, ' : 'rgba(16, 185, 129, ';
      const goldColor = isLight ? 'rgba(180, 130, 40, ' : 'rgba(245, 158, 11, ';
      const subLineColor = isLight ? 'rgba(30, 41, 59, 0.05)' : 'rgba(255, 255, 255, 0.04)';

      // -------------------------------------------------------------
      // SUB-GRID: Subtle futuristic blueprint matrix
      // -------------------------------------------------------------
      ctx.lineWidth = 1;
      ctx.strokeStyle = subLineColor;
      const gridSize = 60;
      for (let x = (time * 10) % gridSize; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // -------------------------------------------------------------
      // MODE 1: PROMPT-X (AI Neural Latent Synapse Diffusion)
      // Shown when mode === 'promptx' OR mode === 'all'
      // -------------------------------------------------------------
      if (mode === 'all' || mode === 'promptx') {
        const pxOpacityMult = mode === 'promptx' ? 1.4 : 0.8;

        // Draw Neural Synaptic Links
        for (let i = 0; i < neuralNodes.length; i++) {
          const n1 = neuralNodes[i];
          if (!prefersReducedMotion) {
            n1.x += n1.vx;
            n1.y += n1.vy;
            if (n1.x < 0) n1.x = w;
            if (n1.x > w) n1.x = 0;
            if (n1.y < 0) n1.y = h;
            if (n1.y > h) n1.y = 0;
          }

          for (let j = i + 1; j < neuralNodes.length; j++) {
            const n2 = neuralNodes[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              const alpha = (1 - dist / 140) * 0.16 * pxOpacityMult;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `${pxColor}${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();

              // Moving synaptic action-potential pulses along link
              if (dist < 100 && (i + j) % 3 === 0) {
                const pulseT = ((time * 0.8 + i) % 1);
                const px = n1.x + (n2.x - n1.x) * pulseT;
                const py = n1.y + (n2.y - n1.y) * pulseT;
                ctx.beginPath();
                ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = `${pxColor}${alpha * 2})`;
                ctx.fill();
              }
            }
          }

          // Draw Neural Node
          const pulse = Math.sin(time * 2 + n1.pulseOffset) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(n1.x, n1.y, n1.radius + pulse * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `${pxColor}${0.2 + pulse * 0.25})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n1.x, n1.y, n1.radius * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? '#1E40AF' : '#38BDF8';
          ctx.fill();
        }

        // Floating Prompt AI Tokens
        ctx.font = '10px "JetBrains Mono", monospace';
        floatingTokens.forEach((t) => {
          if (!prefersReducedMotion) {
            t.x += t.vx;
            t.y += t.vy;
            if (t.x < 0) t.x = w;
            if (t.x > w) t.x = 0;
            if (t.y < 0) t.y = h;
            if (t.y > h) t.y = 0;
          }
          ctx.fillStyle = `${pxColor}${t.alpha * pxOpacityMult})`;
          ctx.fillText(t.text, t.x, t.y);
        });

        // Interactive Generative Latent Wave from Mouse
        const mDist = 180;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40 + Math.sin(time * 3) * 10, 0, Math.PI * 2);
        ctx.strokeStyle = `${pxColor}${0.18 * pxOpacityMult})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // -------------------------------------------------------------
      // MODE 2: DESIGN-XPO (Bézier Vector Curves & Wireframe Frames)
      // Shown when mode === 'designxpo' OR mode === 'all'
      // -------------------------------------------------------------
      if (mode === 'all' || mode === 'designxpo') {
        const dxOpacityMult = mode === 'designxpo' ? 1.5 : 0.75;

        // Animated Bézier Spline Curves (Vector Pen Tool Curves)
        const curveOffset = Math.sin(time * 0.7) * 35;
        const p0 = { x: 40, y: h * 0.6 + curveOffset * 0.5 };
        const p1 = { x: w * 0.35, y: h * 0.3 - curveOffset };
        const p2 = { x: w * 0.65, y: h * 0.75 + curveOffset };
        const p3 = { x: w - 40, y: h * 0.4 - curveOffset * 0.5 };

        // Draw Bézier Curve
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.strokeStyle = `${dxColor}${0.35 * dxOpacityMult})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Control Handle Tangent Lines
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `${dxColor}${0.2 * dxOpacityMult})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Vector Anchor Handles
        [p0, p1, p2, p3].forEach((pt, idx) => {
          ctx.beginPath();
          if (idx === 1 || idx === 2) {
            // Control handles (Circles)
            ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `${dxColor}${0.7 * dxOpacityMult})`;
            ctx.fill();
          } else {
            // Endpoints (Vector squares)
            ctx.rect(pt.x - 3.5, pt.y - 3.5, 7, 7);
            ctx.fillStyle = isLight ? '#BE185D' : '#EC4899';
            ctx.fill();
            ctx.strokeStyle = `${dxColor}${0.8 * dxOpacityMult})`;
            ctx.stroke();
          }
        });

        // Floating Blueprint Wireframes (Figma/Product Layout Frames)
        wireframes.forEach((wf, i) => {
          const shiftY = Math.sin(time * 0.8 + i) * 6;
          const shiftX = Math.cos(time * 0.6 + i) * 6;
          const curX = ((wf.x + shiftX) % (w - 200)) + 50;
          const curY = ((wf.y + shiftY) % (h - 150)) + 40;

          // Wireframe Rect
          ctx.beginPath();
          ctx.roundRect(curX, curY, wf.w, wf.h, wf.rx);
          ctx.strokeStyle = `${dxColor}${0.16 * dxOpacityMult})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Header Bar of Wireframe
          ctx.beginPath();
          ctx.moveTo(curX, curY + 20);
          ctx.lineTo(curX + wf.w, curY + 20);
          ctx.strokeStyle = `${dxColor}${0.12 * dxOpacityMult})`;
          ctx.stroke();

          // Corner alignment dots
          ctx.fillStyle = `${dxColor}${0.4 * dxOpacityMult})`;
          ctx.fillRect(curX - 2, curY - 2, 4, 4);
          ctx.fillRect(curX + wf.w - 2, curY - 2, 4, 4);

          // Dimension Callout Label
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = `${dxColor}${0.4 * dxOpacityMult})`;
          ctx.fillText(wf.label, curX + 8, curY + 14);
        });
      }

      // -------------------------------------------------------------
      // MODE 3: CLUEX (Cryptic Treasure Hunt Radar & Cipher Trail)
      // Shown when mode === 'cluex' OR mode === 'all'
      // -------------------------------------------------------------
      if (mode === 'all' || mode === 'cluex') {
        const cxOpacityMult = mode === 'cluex' ? 1.5 : 0.75;

        // Sonar Radar Center (positioned gracefully in lower right or center)
        const radarCenterX = mode === 'cluex' ? w * 0.5 : Math.min(w - 180, w * 0.82);
        const radarCenterY = mode === 'cluex' ? h * 0.48 : 220;
        const maxRadarRadius = mode === 'cluex' ? 240 : 130;

        // Radar Sonar Rings
        for (let r = 35; r <= maxRadarRadius; r += 35) {
          ctx.beginPath();
          ctx.arc(radarCenterX, radarCenterY, r, 0, Math.PI * 2);
          ctx.strokeStyle = `${cxColor}${0.1 * cxOpacityMult})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Radar Crosshairs
        ctx.beginPath();
        ctx.moveTo(radarCenterX - maxRadarRadius - 10, radarCenterY);
        ctx.lineTo(radarCenterX + maxRadarRadius + 10, radarCenterY);
        ctx.moveTo(radarCenterX, radarCenterY - maxRadarRadius - 10);
        ctx.lineTo(radarCenterX, radarCenterY + maxRadarRadius + 10);
        ctx.strokeStyle = `${cxColor}${0.12 * cxOpacityMult})`;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Rotating Sonar Sweep Beam
        ctx.save();
        ctx.translate(radarCenterX, radarCenterY);
        ctx.rotate(radarAngle);

        const sweepGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadarRadius);
        sweepGrad.addColorStop(0, `${cxColor}${0.35 * cxOpacityMult})`);
        sweepGrad.addColorStop(1, `${cxColor}0)`);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadarRadius, 0, Math.PI * 0.28);
        ctx.closePath();
        ctx.fillStyle = sweepGrad;
        ctx.fill();
        ctx.restore();

        // Cryptic Waypoints & Treasure Trails
        ctx.beginPath();
        clueWaypoints.forEach((wp, idx) => {
          const shiftX = Math.sin(time * 0.5 + idx) * 8;
          const shiftY = Math.cos(time * 0.5 + idx) * 8;
          const curX = ((wp.x + shiftX) % (w - 100)) + 40;
          const curY = ((wp.y + shiftY) % (h - 100)) + 40;

          if (idx === 0) ctx.moveTo(curX, curY);
          else ctx.lineTo(curX, curY);
        });
        ctx.strokeStyle = `${cxColor}${0.24 * cxOpacityMult})`;
        ctx.lineWidth = 1.4;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Waypoint Markers
        clueWaypoints.forEach((wp, idx) => {
          const shiftX = Math.sin(time * 0.5 + idx) * 8;
          const shiftY = Math.cos(time * 0.5 + idx) * 8;
          const curX = ((wp.x + shiftX) % (w - 100)) + 40;
          const curY = ((wp.y + shiftY) % (h - 100)) + 40;

          // Outer pulse ring
          ctx.beginPath();
          ctx.arc(curX, curY, 12, 0, Math.PI * 2);
          ctx.fillStyle = `${cxColor}${0.1 * cxOpacityMult})`;
          ctx.fill();

          // Target Dot
          ctx.beginPath();
          ctx.arc(curX, curY, 4, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? '#047857' : '#10B981';
          ctx.fill();

          // Cryptic Coordinate Text
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = `${goldColor}${0.7 * cxOpacityMult})`;
          ctx.fillText(`${wp.label} • ${wp.code}`, curX + 8, curY + 3);
        });
      }

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
    <div className={`hero-canvas-container event-mode-${activeEvent}`} aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
