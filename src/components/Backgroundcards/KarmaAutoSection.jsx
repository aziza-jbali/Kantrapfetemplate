import React from "react";
import img1 from "../../assets/img/chat.png";
import "../component.css"
export default function KarmaAutoSection() {
  return (
    <section className="karma-section">
      <div className="karma-content">
        {/* Left Text */}
        <div className="karma-text">
          <h2>Karma Auto – Accessible Car Rentals</h2>
          <p>
            <strong>Karma Auto</strong> is a platform dedicated to 
            <strong> renting adapted cars</strong> and 
            <strong> selling smart prosthetic devices</strong> for people with disabilities.  
            <br /><br />
            Our mission is to make mobility easier, safer, and more dignified, 
            by combining modern technology with practical solutions that empower independence.
          </p>
          <button className="style-button">Discover Our Cars</button>
        </div>

        {/* Right Image */}
        <div className="karma-image">
          <img src={img1} alt="Woman in wheelchair" />
        </div>
      </div>
    </section>
  );
  
}