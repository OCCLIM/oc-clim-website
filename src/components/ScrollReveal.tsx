"use client";

import { useEffect, useRef } from "react";

// Single shared observer for ALL ScrollReveal instances
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          callbacks.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "50px" }
  );
  return sharedObserver;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();

    callbacks.set(el, () => {
      if (delay > 0) {
        setTimeout(() => el.classList.add("visible"), delay);
      } else {
        el.classList.add("visible");
      }
    });
    obs.observe(el);

    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
