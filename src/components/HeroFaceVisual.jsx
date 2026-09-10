import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/human-ai-bg.png";
import cyborgPupil from "../assets/pupil-sprite.png";
import humanPupil from "../assets/human-eye-sprite.png";
import robotEyeCore from "../assets/robot-eye-sprite.png";

const NATIVE_W = 720;
const NATIVE_H = 809;


const EYES = [
  {
    name: "cyborg",
    src: cyborgPupil,
    cx: 361.65,
    cy: 355.28,
    spriteW: 58,
    spriteH: 58,
    maxMove: 11,
  },
  {
    name: "human",
    src: humanPupil,
    cx: 228,
    cy: 372,
    spriteW: 46,
    spriteH: 42,
    maxMove: 6,
  },
  {
    name: "robot",
    src: robotEyeCore,
    cx: 463,
    cy: 367,
    spriteW: 30,
    spriteH: 30,
    maxMove: 5,
  },
];

function HeroFaceVisual({ mouseX = 0, mouseY = 0 }) {
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(NATIVE_W);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setWidth(entry.contentRect.width);
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const height = width * (NATIVE_H / NATIVE_W);

  return (
    <div ref={wrapperRef} style={{ width: "100%", maxWidth: NATIVE_W }}>
      <div style={{ position: "relative", width: "100%", height }}>
        <img
          src={bgImage}
          alt="insan-AI üz"
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

        {EYES.map((eye) => {
          const dx = mouseX * eye.maxMove;
          const dy = mouseY * eye.maxMove;
          return (
            <img
              key={eye.name}
              src={eye.src}
              alt=""
              draggable={false}
              style={{
                position: "absolute",
                width: `${(eye.spriteW / NATIVE_W) * 100}%`,
                left: `${((eye.cx - eye.spriteW / 2) / NATIVE_W) * 100}%`,
                top: `${((eye.cy - eye.spriteH / 2) / NATIVE_H) * 100}%`,
                transform: `translate(${dx}px, ${dy}px)`,
                transition: "transform 80ms ease-out",
                willChange: "transform",
                pointerEvents: "none",
                filter:
                  eye.name === "cyborg"
                    ? "drop-shadow(0 0 4px rgba(80,180,255,0.5))"
                    : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeroFaceVisual;