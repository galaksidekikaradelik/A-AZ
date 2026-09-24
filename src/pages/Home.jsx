import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import FilmSection from "../components/FilmSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";

import heroVideo from "../assets/Humanoid_robot_animation_sequence_202609071511.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { t } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cleanup;

    const initVideoScroll = () => {
      let targetTime = 0;
      let currentTime = 0;
      let raf;

      // VIDEO: scroll-a görə hamar irəli/geri
      const animateVideo = () => {
        currentTime += (targetTime - currentTime) * 0.08;

        if (Math.abs(targetTime - currentTime) < 0.001) {
          currentTime = targetTime;
        }

        if (video.readyState >= 2) {
          video.currentTime = currentTime;
        }

        raf = requestAnimationFrame(animateVideo);
      };

      animateVideo();

      // HERO TEXT: hər sətir ayrı-ayrı gəlir
      const lines = gsap.utils.toArray(".hero-line");

      gsap.set(lines, {
        x: -120,
        opacity: 0,
      });

      const textAnimation = gsap.timeline({ paused: true });

      textAnimation.to(lines, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.8,
        ease: "power2.out",
      });

      // HERO SCROLL
      const trigger = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: () => "+=" + window.innerHeight * 2,
        pin: true,
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress;

          // VIDEO
          const endHold = 0.08;

          if (progress >= 1 - endHold) {
            targetTime = video.duration - 0.05;
          } else {
            targetTime =
              (progress / (1 - endHold)) * video.duration;
          }

          // TEXT
          const textStart = 0.05;
          const textEnd = 0.6;

          let textProgress =
            (progress - textStart) / (textEnd - textStart);

          textProgress = Math.max(
            0,
            Math.min(1, textProgress)
          );

          textAnimation.progress(textProgress);
        },
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(raf);
        trigger.kill();
        textAnimation.kill();
        window.removeEventListener("resize", handleResize);
      };
    };

    const init = () => {
      cleanup = initVideoScroll();
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init, {
        once: true,
      });
    }

    return () => {
      video.removeEventListener("loadedmetadata", init);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <video
            ref={videoRef}
            className="hero-video"
            muted
            playsInline
            preload="auto"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="hero-overlay" />

          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-line">
                {t.hero.line1}
              </span>

              <span className="hero-line">
                {t.hero.line2}
              </span>

              <span className="hero-line">
                {t.hero.line3}
              </span>

              <span className="hero-line">
                {t.hero.line4}
              </span>
            </h1>
          </div>
        </section>

        <FilmSection />
        <NewsSection />
        <PartnersSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;