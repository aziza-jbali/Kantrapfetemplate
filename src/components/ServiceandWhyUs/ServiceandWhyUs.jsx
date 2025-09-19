import React from "react";

function ServicesAndWhyUs() {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9",height:"900px" }}>
      {/* Our Services Section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Our Services
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "40px" }}>🚗</span>
            <h3 style={{ margin: "10px 0" }}>Accessible Car Rentals</h3>
            <p>We provide fully equipped cars for people with disabilities.</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "40px" }}>🦾</span>
            <h3 style={{ margin: "10px 0" }}>Smart Medical Devices</h3>
            <p>The latest medical devices to support your daily life.</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "40px" }}>📖</span>
            <h3 style={{ margin: "10px 0" }}>Health Articles</h3>
            <p>Useful tips and articles to help you make better decisions.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Why Choose Us?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>⚡</span>
            <h4>Fast Service</h4>
            <p>We guarantee a quick and efficient service.</p>
          </div>
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>🚙</span>
            <h4>Variety of Cars</h4>
            <p>A wide range of fully equipped vehicles.</p>
          </div>
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>📞</span>
            <h4>24/7 Support</h4>
            <p>Our support team is always here to help you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesAndWhyUs;
