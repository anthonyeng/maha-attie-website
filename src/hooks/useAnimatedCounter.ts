import { useRef, useEffect, useState } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  suffix?: string;
}

export function useAnimatedCounter({
  end,
  duration = 2,
  suffix = "",
}: UseAnimatedCounterOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, end, {
      type: "spring",
      duration,
      bounce: 0,
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(`${latest}${suffix}`);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, end, duration, suffix, motionValue, rounded]);

  return { ref, display };
}
