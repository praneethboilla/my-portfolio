import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlowCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.25 });

  useEffect(() => {
    const canUseCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;

    if (!canUseCursor) return;

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/50 bg-teal/10 shadow-[0_0_32px_rgb(var(--color-teal)/0.3)] md:block"
      style={{ x: smoothX, y: smoothY }}
    >
      <span className="absolute inset-2 rounded-full bg-teal/40" />
    </motion.div>
  );
}