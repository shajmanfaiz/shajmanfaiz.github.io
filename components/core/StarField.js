import React, { useMemo } from 'react';

// Lightweight CSS starfield + SVG moon — visible only in dark mode via CSS
export default function StarField() {
  const stars = useMemo(() => {
    // deterministic pseudo-random to avoid hydration mismatch
    const arr = [];
    let seed = 42;
    const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let i = 0; i < 90; i++) {
      arr.push({
        top: `${(rand() * 100).toFixed(2)}%`,
        left: `${(rand() * 100).toFixed(2)}%`,
        dur: `${(2 + rand() * 4).toFixed(2)}s`,
        delay: `${(rand() * 5).toFixed(2)}s`,
        size: rand() > 0.85 ? 2 : 1,
        opacity: 0.3 + rand() * 0.7,
      });
    }
    return arr;
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {/* SVG Moon */}
      <div className="moon-wrap">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* subtle glow */}
          <circle cx="44" cy="44" r="44" fill="white" fillOpacity="0.04" />
          <circle cx="44" cy="44" r="32" fill="white" fillOpacity="0.06" />
          {/* moon body - crescent via mask */}
          <path d="M44 14 A 30 30 0 1 0 44 74 A 20 20 0 1 1 44 14 Z" fill="#fafafa" fillOpacity="0.95" />
          {/* craters - very subtle grey */}
          <circle cx="36" cy="36" r="6.5" fill="#e5e5e5" fillOpacity="0.5" />
          <circle cx="52" cy="48" r="4" fill="#e5e5e5" fillOpacity="0.35" />
          <circle cx="42" cy="58" r="3" fill="#e5e5e5" fillOpacity="0.3" />
          <circle cx="38" cy="38.5" r="2" fill="#d4d4d4" fillOpacity="0.4" />
        </svg>
      </div>

      {/* shooting star - occasional */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '-10%',
          width: '120px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
          animation: 'shoot 9s ease-in-out infinite',
          animationDelay: '2s',
          opacity: 0.6,
        }}
      />
      <style>{`@keyframes shoot { 0% { transform: translateX(0) translateY(0); opacity:0; } 5% { opacity:0.7; } 12% { transform: translateX(650px) translateY(220px); opacity:0; } 100% { opacity:0; } }`}</style>

      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size + 'px',
            height: s.size + 'px',
            '--dur': s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
