import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import FilmSection from "../components/FilmSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

import heroVideo from "../assets/Humanoid_robot_animation_sequence_202609071511.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const initVideoScroll = () => {
      let targetTime = 0;
      let currentTime = 0;
      let raf;

      const animate = () => {
        currentTime += (targetTime - currentTime) * 0.08;

        if (Math.abs(targetTime - currentTime) < 0.001) {
          currentTime = targetTime;
        }

        if (video.readyState >= 2) {
          video.currentTime = currentTime;
        }

        raf = requestAnimationFrame(animate);
      };

      animate();

      const trigger = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: () => "+=" + window.innerHeight * 2,
        pin: true,
        scrub: true,

        onUpdate: (self) => {
          const endHold = 0.08; 

          if (self.progress >= 1 - endHold) {
            targetTime = video.duration - 0.05;
          } else {
            targetTime =
              (self.progress / (1 - endHold)) * video.duration;
          }
        },
      });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(raf);
        trigger.kill();
        window.removeEventListener("resize", handleResize);
      };
    };

    if (video.readyState >= 1) {
      return initVideoScroll();
    }

    video.addEventListener("loadedmetadata", initVideoScroll);

    return () => {
      video.removeEventListener("loadedmetadata", initVideoScroll);
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