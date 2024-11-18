import React from 'react';

const runeSymbols = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ'];

export default function MysticRunes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {runeSymbols.map((rune, index) => (
        <div
          key={index}
          className="absolute text-purple-500/10 text-6xl font-runes animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          {rune}
        </div>
      ))}
    </div>
  );
}