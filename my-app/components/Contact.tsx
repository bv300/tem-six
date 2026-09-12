"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import styles from "./Contact.module.css";

const faqs = [
  {
    question: "How long does a typical SaaS build take?",
    answer: "Most MVP builds take between 4 to 8 weeks, depending on the complexity of the feature set and integrations required."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer ongoing retainer packages for maintenance, feature additions, and performance optimization."
  },
  {
    question: "What tech stack do you use?",
    answer: "We specialize in React, Next.js, Node.js, and modern CSS practices. We ensure your product is scalable and fast."
  },
  {
    question: "Can you redesign an existing product?",
    answer: "Absolutely. We often help SaaS companies revamp their UI/UX to decrease churn and improve user satisfaction."
  }
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      // Close the currently open one
      gsap.to(contentRefs.current[index], { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
      setOpenIndex(null);
    } else {
      // Close previous
      if (openIndex !== null) {
        gsap.to(contentRefs.current[openIndex], { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
      }
      // Open new
      setOpenIndex(index);
      gsap.fromTo(
        contentRefs.current[index],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h2 className="text-h2">Got Questions? <br/> <span className="text-italic text-accent-blue">We've Got Answers</span></h2>
          
          <div className={styles.ctaCard}>
            <h3>Ready to scale your product?</h3>
            <p>Let's discuss your requirements and see if we're a good fit.</p>
            <button className="pill-btn primary" style={{ width: '100%', marginTop: '16px' }}>
              Book an Intro Call
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${openIndex === index ? styles.active : ""}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
                </button>
                <div 
                  className={styles.accordionContent}
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{ height: index === 0 ? "auto" : 0, opacity: index === 0 ? 1 : 0, overflow: 'hidden' }}
                >
                  <div className={styles.answerText}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
