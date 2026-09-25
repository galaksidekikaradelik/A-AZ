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

// Bir video elementi üçün pin + scrub + mətn animasiyasını qurur.
// Cleanup funksiyası qaytarır.
function initVideoScroll(video) {
  let targetTime = 0;
  let currentTime = 0;
  let raf;

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

  const trigger = ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: () => "+=" + window.innerHeight * 2,
    pin: true,
    scrub: true,

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

  return () => {
    cancelAnimationFrame(raf);
    trigger.kill();
    textAnimation.kill();
    window.removeEventListener("resize", handleResize);
  };
}

function Home() {
  const { t } = useLanguage();
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    let cleanup;
    let cancelled = false;
    let activeVideo = null;

    const teardown = () => {
      cleanup?.();
      cleanup = undefined;

      // Söndürülən video-nu təmiz vəziyyətə qaytar ki, digərinə
      // keçəndə köhnə oynatma vəziyyəti qalmasın.
      if (activeVideo) {
        activeVideo.pause();
      }
      activeVideo = null;
    };

    const setupVideo = async (video) => {
      if (!video) return;

      try {
        await video.play();
      } catch (e) {
        console.log("[hero-video] play() xətası:", e);
      } finally {
        video.pause();
        video.currentTime = 0;
      }

      if (cancelled) return;

      activeVideo = video;
      cleanup = initVideoScroll(video);
    };

    const startForCurrentBreakpoint = () => {
      teardown();

      const video = mq.matches
        ? mobileVideoRef.current
        : desktopVideoRef.current;

      if (!video) return;

      if (video.readyState >= 1) {
        setupVideo(video);
      } else {
        const onLoaded = () => setupVideo(video);
        video.addEventListener("loadedmetadata", onLoaded, { once: true });
      }
    };

    startForCurrentBreakpoint();

    // Breakpoint dəyişəndə (desktop↔mobil) köhnə instansiyanı söndürüb
    // düzgün video üçün yenidən qur. Bu, əvvəlki bug-ı düzəldir: köhnə
    // kodda video seçimi yalnız mount zamanı edilirdi, resize zamanı
    // JS köhnə (artıq gizli) video-nu idarə etməyə davam edirdi və
    // görünən video donmuş qalırdı.
    const handleBreakpointChange = () => {
      startForCurrentBreakpoint();
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handleBreakpointChange);
    } else {
      // Safari-nin köhnə versiyaları üçün fallback
      mq.addListener(handleBreakpointChange);
    }

    return () => {
      cancelled = true;
      teardown();

      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleBreakpointChange);
      } else {
        mq.removeListener(handleBreakpointChange);
      }
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