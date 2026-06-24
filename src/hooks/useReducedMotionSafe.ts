import { useReducedMotion } from "framer-motion";

interface ReducedMotionSafeResult {
  reduced: boolean;
  variants: (initial: object, animate: object) => { initial: object; animate: object };
}

export function useReducedMotionSafe(): ReducedMotionSafeResult {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;

  const variants = (initial: object, animate: object) => {
    if (reduced) {
      return { initial: {}, animate: {} };
    }
    return { initial, animate };
  };

  return { reduced, variants };
}
