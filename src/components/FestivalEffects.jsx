import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}#@$%&*";

function scrambleHeading(element) {
  if (!element || element.dataset.scrambled === "true") return;

  const originalHTML = element.innerHTML;
  const originalText = element.textContent;

  if (!originalText.trim()) return;

  element.dataset.scrambled = "true";

  let frame = 0;
  const totalFrames = Math.max(14, originalText.length + 8);

  const interval = setInterval(() => {
    const progress = frame / totalFrames;

    let output = "";

    for (let i = 0; i < originalText.length; i++) {
      const char = originalText[i];

      if (char === " " || char === "\n") {
        output += char;
        continue;
      }

      if (i / originalText.length < progress) {
        output += char;
      } else {
        output +=
          SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
      }
    }

    element.textContent = output;

    frame++;

    if (frame > totalFrames) {
      clearInterval(interval);
      element.innerHTML = originalHTML;
    }
  }, 30);
}

function FestivalEffects() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(
        ".festival-hero, .festival-about, .festival-categories, .festival-rules, .festival-awards, .festival-cta"
      );

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 80,
            scale: 0.94,
            rotateX: 3,
          },
          {
            y: -20,
            scale: 1,
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              end: "bottom 15%",
              scrub: 1.2,
            },
          }
        );
      });

      const headings = gsap.utils.toArray(
        ".festival-page h1, .festival-page h2"
      );

      headings.forEach((heading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 82%",
          once: true,
          onEnter: () => scrambleHeading(heading),
        });
      });

      const cursor = document.querySelector(".festival-cursor-glow");

      if (cursor && window.matchMedia("(pointer: fine)").matches) {
        const moveX = gsap.quickTo(cursor, "x", {
          duration: 0.45,
          ease: "power3",
        });

        const moveY = gsap.quickTo(cursor, "y", {
          duration: 0.45,
          ease: "power3",
        });

        const handleMouseMove = (event) => {
          moveX(event.clientX);
          moveY(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}

export default FestivalEffects;