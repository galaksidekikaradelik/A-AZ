import { useEffect, useRef } from "react";
import bgImage from "../assets/human-ai-bg.png";
import pupilImage from "../assets/pupil-sprite.png";

// Native pixel dimensions of the background image
const NATIVE_W = 720;
const NATIVE_H = 809;

// Pupil geometry measured on the native image
const PUPIL_CENTER_X_RATIO = 361.65 / NATIVE_W;
const PUPIL_CENTER_Y_RATIO = 355.28 / NATIVE_H;
const SPRITE_SIZE = 58; // px at native scale
const MAX_MOVE = 11; // px the pupil can shift at native scale
const IDLE_DELAY_MS = 2500;

export default function EyeTracker() {
  const stageRef = useRef(null);
  const pupilRef = useRef(null);
  const lastInteractRef = useRef(Date.now());
  const idleAngleRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const pupil = pupilRef.current;
    if (!stage || !pupil) return;

    const moveTo = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      const scaleFactor = rect.width / NATIVE_W;

      const eyeX = rect.left + PUPIL_CENTER_X_RATIO * rect.width;
      const eyeY = rect.top + PUPIL_CENTER_Y_RATIO * rect.height;

      let dx = clientX - eyeX;
      let dy = clientY - eyeY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = MAX_MOVE * scaleFactor;

      if (dist > maxDist) {
        const ratio = maxDist / dist;
        dx *= ratio;
        dy *= ratio;
      }
      pupil.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const handleMouseMove = (e) => {
      lastInteractRef.current = Date.now();
      moveTo(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        lastInteractRef.current = Date.now();
        moveTo(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const idleLoop = () => {
      if (Date.now() - lastInteractRef.current > IDLE_DELAY_MS) {
        idleAngleRef.current += 0.01;
        const rect = stage.getBoundingClientRect();
        const scaleFactor = rect.width / NATIVE_W;
        const amt = MAX_MOVE * 0.5 * scaleFactor;
        const angle = idleAngleRef.current;
        pupil.style.transform = `translate(${Math.cos(angle) * amt}px, ${
          Math.sin(angle * 1.3) * amt
        }px)`;
      }
      rafRef.current = requestAnimationFrame(idleLoop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    rafRef.current = requestAnimationFrame(idleLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: NATIVE_W,
        aspectRatio: `${NATIVE_W} / ${NATIVE_H}`,
        margin: "0 auto",
      }}
    >
      <img
        src={bgImage}
        alt="human-ai face"
        draggable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
      <img
        ref={pupilRef}
        src={pupilImage}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          width: `${(SPRITE_SIZE / NATIVE_W) * 100}%`,
          left: `${((361.65 - SPRITE_SIZE / 2) / NATIVE_W) * 100}%`,
          top: `${((355.28 - SPRITE_SIZE / 2) / NATIVE_H) * 100}%`,
          willChange: "transform",
          pointerEvents: "none",
          filter: "drop-shadow(0 0 4px rgba(80,180,255,0.5))",
        }}
      />
    </div>
  );
}