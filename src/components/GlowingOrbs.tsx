import React from 'react';

export default function GlowingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="absolute w-32 h-32 rounded-full animate-float-slow"
          style={{
            background: `radial-gradient(circle, ${
              index % 2 ? 'rgba(147, 51, 234, 0.1)' : 'rgba(20, 184, 166, 0.1)'
            } 0%, transparent 70%)`,
            left: `${(index * 20) + Math.random() * 10}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}