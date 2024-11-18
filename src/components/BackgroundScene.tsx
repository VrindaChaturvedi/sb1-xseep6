import React from 'react';

export default function BackgroundScene() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2342')] bg-cover opacity-10"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-purple-500/5 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-teal-500/5 to-transparent transform translate-x-1/2 translate-y-1/2" />
    </>
  );
}