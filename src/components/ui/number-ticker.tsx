"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  size = 100,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
        if (ref.current) {
          ref.current.style.setProperty('--progress', '1');
        }
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          const span = ref.current.querySelector('span');
          if (span) {
            span.textContent = Intl.NumberFormat("en-US", {
              minimumFractionDigits: decimalPlaces,
              maximumFractionDigits: decimalPlaces,
            }).format(Number(latest.toFixed(decimalPlaces)));
          }
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center rounded-full justify-center transition-all duration-1000 ease-in-out bg-gradient-to-l from-violet-200 to-fuchsia-100",
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <span className="inline-block tabular-nums text-transparent bg-clip-text bg-gradient-to-bl from-violet-950 via-violet-400 to-violet-950 text-2xl dark:text-white tracking-wider" /><span className="text-sm">K</span>
    </div>
  );
}