"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      
      // Horizontal scrolling animation
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (containerRef.current?.offsetWidth || 1000) * panels.length,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <section className={styles.servicesContainer} ref={containerRef}>
      <div className={styles.panelsContainer} ref={panelsContainerRef}>
        
        {/* Panel 1 */}
        <div 
          className={`${styles.panel} ${styles.panelBlue}`} 
          ref={addToRefs}
        >
          <div className={styles.panelContent}>
            <div className={styles.indicator}>01</div>
            <h2 className="text-massive text-italic">UI UX Design</h2>
            <p className={styles.description}>
              We craft intuitive, user-centric interfaces that convert.
            </p>
          </div>
        </div>

        {/* Panel 2 */}
        <div 
          className={`${styles.panel} ${styles.panelOrange}`} 
          ref={addToRefs}
        >
          <div className={styles.panelContent}>
            <div className={styles.indicator}>02</div>
            <h2 className="text-massive text-italic">Web App Dev</h2>
            <p className={styles.description}>
              Robust, scalable Next.js and React applications tailored for your SaaS.
            </p>
          </div>
        </div>

        {/* Panel 3 */}
        <div 
          className={`${styles.panel} ${styles.panelPurple}`} 
          ref={addToRefs}
        >
          <div className={styles.panelContent}>
            <div className={styles.indicator}>03</div>
            <h2 className="text-massive text-italic">Logo & Branding</h2>
            <p className={styles.description}>
              Establish trust instantly with premium visual identities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
