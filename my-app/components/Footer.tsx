import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className="text-h2">Agency.</h2>
            <p className={styles.brandDesc}>
              Building the next generation of SaaS products.
            </p>
          </div>
          
          <div className={styles.linksContainer}>
            <div className={styles.col}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Web App Dev</a></li>
                <li><a href="#">Mobile App Dev</a></li>
                <li><a href="#">Branding</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Process</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Socials</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter (X)</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.locations}>
            <div className={styles.location}>
              <span className={styles.flag}>🇺🇸</span>
              <div>
                <h5>New York</h5>
                <p>123 Tech Ave, Suite 400</p>
              </div>
            </div>
            <div className={styles.location}>
              <span className={styles.flag}>🇦🇪</span>
              <div>
                <h5>Dubai</h5>
                <p>Internet City, Building 9</p>
              </div>
            </div>
            <div className={styles.location}>
              <span className={styles.flag}>🇸🇦</span>
              <div>
                <h5>Riyadh</h5>
                <p>King Abdullah Financial District</p>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
