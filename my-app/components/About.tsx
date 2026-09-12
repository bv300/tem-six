"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left side while scrolling through the right side
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
      });

      // Animate the dot down the vertical line
      gsap.to(dotRef.current, {
        y: () => {
          const sectionHeight = sectionRef.current?.offsetHeight || 0;
          return sectionHeight - 50; // Adjust for dot size
        },
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.left} ref={leftRef}>
          <div className={styles.stickyContent}>
            <h2 className="text-h2">
              Get A Full <span className="text-italic text-accent-blue">SaaS</span> Design Team...
            </h2>
            <p className={styles.description}>
              Instead of hiring freelancers or an expensive in-house team, get a dedicated squad of designers and developers ready to execute your vision fast.
            </p>
            <button className="pill-btn primary">See Our Process</button>
          </div>
        </div>
        
        <div className={styles.centerTrack}>
          <div className={styles.line}></div>
          <div className={styles.dot} ref={dotRef}></div>
        </div>

        <div className={styles.right}>
          <div className={styles.benefit}>
            <h3>Fast SaaS Product Builds</h3>
            <p>Go from idea to prototype in weeks, not months. We specialize in rapid execution without compromising quality.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Dedicated Product Team</h3>
            <p>Work with a hand-picked team that acts as an extension of your company. Full transparency and daily updates.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Scalable Architecture</h3>
            <p>We build with modern frameworks like Next.js and React so your product handles scale beautifully.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Premium UI/UX</h3>
            <p>User experience is everything in SaaS. We craft interfaces that reduce churn and delight your customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
