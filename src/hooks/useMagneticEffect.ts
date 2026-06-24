import { useEffect } from "react";
import {
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import type { RefObject } from "react";

const MAX_OFFSET = 6;

export function useMagneticEffect(ref: RefObject<HTMLElement | null>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const clampedX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx * 0.15));
      const clampedY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy * 0.15));

      animate(x, clampedX, { type: "spring", stiffness: 300, damping: 20 });
      animate(y, clampedY, { type: "spring", stiffness: 300, damping: 20 });
    };

    const handlePointerLeave = () => {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
      animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [ref, prefersReduced, x, y]);

  return { x, y };
}
