// components/CustomCursor.js
'use client'; // if using Next.js 13+

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e:MouseEvent) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate3d(${clientX-15}px, ${clientY-12}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 border-4 border-cyan-400 rounded-full pointer-events-none z-[500] transition-transform duration-75 mix-blend-difference"
      style={{ transform: 'translate3d(-9999px, -9999px, 0)' }}
    />
  );
}
