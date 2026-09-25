import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import FilmSection from "../components/FilmSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";

import heroDesktopVideo from "../assets/hero-desktop.mp4";
import heroMobileVideo from "../assets/hero-mobile.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { t } = useLanguage();

  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const video = mq.matches
      ? mobileVideoRef.current
      : desktopVideoRef.current;

    if (!video) return;

    let cleanup;
    let cancelled = false;

    // Mobil brauzerlərdə (xüsusən iOS) video "unlock" edilməyibsə
    // readyState 2-dən yuxarı qalxmır və currentTime təsir etmir.
    // Səssiz play + dərhal pause bunu aktivləşdirir.
    const unlockVideo = () =>
      new Promise((resolve) => {
        video.muted = true;
        const p = video.play();

        const finish = () => {
          video.pause();
          resolve();
        };

        if (p && typeof p.then === "function") {
          p.then(finish).catch(() => resolve());
        } else {
          finish();
        }
      });

    const waitForData = () =>
      new Promise((resolve) => {
        if (video.readyState >= 2) {
          resolve();
          return;
        }
        const onData = () => {
          video.removeEventListener("loadeddata", onData);
          resolve();
        };
        video.addEventListener("loadeddata", onData, { once: true });
        // Bəzi mobil brauzerlərdə preload aktivləşdirmək üçün load() lazımdır
        video.load();
      });

    const initVideoScroll = () => {
      let targetTime = 0;
      let currentTime = 0;
      let raf;

      const animateVideo = () => {
        currentTime += (targetTime - currentTime) * 0.08;

        if (Math.abs(targetTime - currentTime) < 0.001) {
          currentTime = targetTime;
        }

        // readyState >= 1 (HAVE_METADATA) kifayətdir; 2-ni gözləmək
        // mobil videonu "donmuş" göstərirdi
        if (video.readyState >= 1 && !Number.isNaN(video.duration)) {
          video.currentTime = currentTime;
        }

        raf = requestAnimationFrame(animateVideo);
      };

      animateVideo();

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

      // Mobil address bar üzündən innerHeight tez-tez dəyişdiyi üçün
      // visualViewport varsa onu üstün tuturuq
      const getViewportHeight = () =>
        window.visualViewport?.height || window.innerHeight;

      const trigger = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: () => "+=" + getViewportHeight() * 2,
        pin: true,
        scrub: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progress = self.progress;

          const endHold = 0.08;

          if (progress >= 1 - endHold) {
            targetTime = video.duration - 0.05;
          } else {
            targetTime = (progress / (1 - endHold)) * video.duration;
          }

          const textStart = 0.05;
          const textEnd = 0.6;

          let textProgress = (progress - textStart) / (textEnd - textStart);

          textProgress = Math.max(0, Math.min(1, textProgress));

          textAnimation.progress(textProgress);
        },
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);
      window.visualViewport?.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(raf);
        trigger.kill();
        textAnimation.kill();

        window.removeEventListener("resize", handleResize);
        window.visualViewport?.removeEventListener("resize", handleResize);
      };
    };

    const init = async () => {
      await unlockVideo();
      await waitForData();
      if (cancelled) return;
      cleanup = initVideoScroll();
    };

    init();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <video
            ref={desktopVideoRef}
            className="hero-video desktop-video"
            muted
            playsInline
            preload="auto"
          >
            <source src={heroDesktopVideo} type="video/mp4" />
          </video>

          <video
            ref={mobileVideoRef}
            className="hero-video mobile-video"
            muted
            playsInline
            preload="auto"
          >
            <source src={heroMobileVideo} type="video/mp4" />
          </video>

          <div className="hero-overlay" />

          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-line">{t.hero.line1}</span>
              <span className="hero-line">{t.hero.line2}</span>
              <span className="hero-line">{t.hero.line3}</span>
              <span className="hero-line">{t.hero.line4}</span>
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