import { useRef } from "react";

/**
 * Wraps a link/button so it gently shifts toward the cursor as it approaches,
 * and eases back on leave. Skips the effect under prefers-reduced-motion.
 */
function MagneticButton({ children, className, href, target, rel, strength = 0.3 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default MagneticButton;