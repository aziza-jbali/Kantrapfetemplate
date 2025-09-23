import React from "react";
import videoBg from "../../assets/videos/ss.mp4"; // ضع مسار الفيديو المحلي هنا
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function OurServices() {
  return (
    <div className=" w-full h-screen">
      {/* Background Video */}
      <video
        className=" top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full "></div>

      <div className="container relative z-10 text-white py-24">
        {/* Title */}
        <div className="row">
          <div className="col-12 text-center mb-12">
            <h2 className="text-4xl font-bold">Our Services</h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="service-1 bg-white text-black p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4">🚗</span>
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Repair</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-1 bg-white text-black p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4">🛠️</span>
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Car Accessories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-1 bg-white text-black p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4">♿</span>
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Adapted Cars</h3>
                <p>Cars equipped for people with disabilities to ensure comfort and safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
