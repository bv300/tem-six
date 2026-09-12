"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Process.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate dot down the line
      gsap.to(dotRef.current, {
        y: () => (lineRef.current?.offsetHeight || 0) - 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate each step content
      stepsRef.current.forEach((step) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top center+=100", // triggers when element is slightly below center
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToSteps = (el: HTMLDivElement | null) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  return (
    <section className={styles.process} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2 text-italic">Our Process</h2>
          <p className="subtitle">How we turn ideas into reality, fast.</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.lineTrack} ref={lineRef}>
            <div className={styles.line}></div>
            <div className={styles.dot} ref={dotRef}></div>
          </div>

          <div className={styles.steps}>
            
            {/* Step 1 */}
            <div className={styles.step} ref={addToSteps}>
              <div className={styles.stepContent}>
                <div className={styles.stepLabel}>Step 1: Plan</div>
                <h3>Discovery & Wireframing</h3>
                <p>We dive deep into your product requirements, mapping out user journeys and low-fidelity wireframes.</p>
              </div>
              <div className={styles.stepMockup}>
                <div className={styles.placeholderBox}>
                  Wireframe Mockup
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.step} ref={addToSteps}>
              <div className={styles.stepContent}>
                <div className={styles.stepLabel}>Step 2: Structure</div>
                <h3>UI/UX Design</h3>
                <p>Establishing the visual language. We apply high-end aesthetics tailored for SaaS conversion.</p>
              </div>
              <div className={styles.stepMockup}>
                <div className={styles.placeholderBox} style={{backgroundColor: '#0ea5e9'}}>
                  UI Design Mockup
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.step} ref={addToSteps}>
              <div className={styles.stepContent}>
                <div className={styles.stepLabel}>Step 3: Build</div>
                <h3>Frontend Engineering</h3>
                <p>Pixel-perfect implementation using Next.js, React, and seamless GSAP animations.</p>
              </div>
              <div className={styles.stepMockup}>
                <div className={styles.placeholderBox} style={{backgroundColor: '#f97316'}}>
                  Code / App Mockup
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
