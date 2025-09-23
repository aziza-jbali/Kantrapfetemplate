import React from "react";
import videoBg from "../../assets/videos/ss.mp4"; // ضع مسار الفيديو المحلي هنا
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdCarRepair } from "react-icons/md";
import ii from "../../assets/img/ii.png"

function OurServices() {
  return (
    <div
      className="relative w-full h-screen my-5"
      style={{ border: "3px solid red" }}
    >
      {/* الفيديو يغطي كامل مساحة الأب */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "15px solid green",
        }}
        className="absolute inset-0 w-full h-full "
      />
      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full " ></div> */}

      <div className="container relative z-10 text-white " style={{borde:"12px solid pink",paddingTop:"400px"}}>
        {/* Title */}
        <div className="row" style={{borde:"12px solid pink"}}>
          <div className="col-12 text-center mb-12">
            <h2 className="text-4xl font-bold">Our Services</h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="service-1  text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4">
                <MdCarRepair />
              </span>
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Repair</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati, laboriosam.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-1  text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4"><img style={{backgroundColor:"white",width:"100px",height:"100px",aspectRatio:"1",borderRadius:"50%"}} src={ii} alt="hh"/></span> 
              
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Car Accessories</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati, laboriosam.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-1 bg-white text-black p-6 rounded-xl shadow-lg flex flex-col items-center">
              <span className="service-1-icon text-4xl mb-4">♿</span>
              <div className="service-1-contents text-center">
                <h3 className="text-xl font-semibold mb-2">Adapted Cars</h3>
                <p>
                  Cars equipped for people with disabilities to ensure comfort
                  and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
{
  /* <div
          style={{
            backgroundColor: "grey",
            // overflow: "hidden",
            width: "100vw",
            height: "900px",
            border: "1px red solid",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${carsofhandicaped})`,
              // backgroundSize: "cover",
              backgroundPosition: "top", // يحافظ على الرأس
            }}
          ></div>
        </div> */
}
