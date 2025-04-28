'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import $ from 'jquery';
import { usePathname } from 'next/navigation';

const MagicCursor: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices based on screen width
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Threshold for medium and small devices
    };

    // Check on initial render and on resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip initialization if on mobile devices

    const ball = ballRef.current;

    if (!ball) {
      console.error('Ball element not found');
      return;
    }

    const ballScale = 1;
    const ballOpacity = 1;

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      scale: ballScale,
      opacity: ballOpacity,
    });

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      gsap.set(ball, { x: pos.x, y: pos.y });
    };

    document.addEventListener('mousemove', handleMouseMove);
    gsap.ticker.add(updatePosition);

    const interactiveTags = 'a, button, input, textarea, select';
    $(document).on('mouseenter', interactiveTags, function () {
      gsap.to(ball, { scale: 0, opacity: 0, duration: 0.3 });
    });

    $(document).on('mouseleave', interactiveTags, function () {
      gsap.to(ball, { scale: ballScale, opacity: ballOpacity, duration: 0.3 });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(updatePosition);
      $(document).off('mouseenter', interactiveTags);
      $(document).off('mouseleave', interactiveTags);
    };
  }, [isMobile]);

  // Ensure the cursor resets when the route changes
  useEffect(() => {
    if (isMobile) return;

    const ball = ballRef.current;
    if (ball) {
      gsap.set(ball, { scale: 1, opacity: 1 });
    }
  }, [pathname, isMobile]); // Runs whenever the route changes or device type changes

  if (isMobile) {
    return null; // Do not render the cursor ball on mobile devices
  }

  return <div id="ball" ref={ballRef}></div>;
};

export default MagicCursor;
