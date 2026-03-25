"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with GSAP
const CinematicIntro = dynamic(() => import("./CinematicIntro"), { ssr: false });

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user already saw intro this session
    if (sessionStorage.getItem("oc-intro-seen") === "1") {
      setIntroComplete(true);
    }
  }, []);

  function handleComplete() {
    setIntroComplete(true);
    sessionStorage.setItem("oc-intro-seen", "1");
    // Scroll to top of actual site
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }

  // SSR: render children immediately
  if (!mounted) {
    return <>{children}</>;
  }

  // Intro already seen: render site directly
  if (introComplete) {
    return <>{children}</>;
  }

  // Show intro + hidden site underneath
  return (
    <>
      <CinematicIntro onComplete={handleComplete} />
      {/* Site is in the DOM but visually hidden behind the intro's fixed overlay */}
      <div style={{ visibility: "hidden", position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }}>
        {children}
      </div>
    </>
  );
}
