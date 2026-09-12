"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className="container">
        <div className={`${styles.content} hero-anim`}>
          <div className={styles.badge}>Teams Across USA, UAE & KSA</div>
          
          <h1 className="text-massive hero-anim">
            Product Design & Dev Agency For <span className="text-italic">SaaS</span> Companies
          </h1>
          
          <div className={`${styles.socialProof} hero-anim`}>
            <div className={styles.stars}>★★★★★</div>
            <span>4.9/5 on Clutch & Trustpilot</span>
          </div>
          
          <p className="subtitle hero-anim">
            We build fast, scalable, and beautifully designed web applications 
            that help your business convert and retain users.
          </p>
          
          <div className={`${styles.ctas} hero-anim`}>
            <button className="pill-btn primary">Book a Free 30-Min Call</button>
            <button className="pill-btn secondary">
              <span style={{ marginRight: '8px' }}>💬</span> Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>ACME Corp</span>
          <span>GlobalTech</span>
          <span>InnovateSaaS</span>
          <span>CloudSync</span>
          <span>NextLevel</span>
          <span>DataFlow</span>
          <span>ACME Corp</span>
          <span>GlobalTech</span>
          <span>InnovateSaaS</span>
          <span>CloudSync</span>
        </div>
      </div>
    </section>
  );
}
