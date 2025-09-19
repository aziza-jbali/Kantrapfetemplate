import React from "react";
import video1 from "../../assets/videos/dd.mp4";
import TextType from "components/AnimatedText/AnimatedText";
function Backgroundscards({ video ,whyofrendrenig }) {
  return ( 
    <div>{whyofrendrenig ?(<div
      style={{
        display: "flex",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      {/* Left Side with Text + Button */}
      <div
        style={{
          textAlign: "left",
          paddingTop: "60px",
          paddingLeft: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "50px", // adjust distance between elements
          position: "relative",
        }}
      >
        <div style={{ position: "relative", minHeight: "200px" }}>
          <TextType
            text={[
              "Tu es un héros,\nnon pas parce que la vie est facile,\nmais parce que tu affrontes chaque défi avec courage.\nTa valeur brille au-delà des limites.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#1E293B", "#333333", "#555555"]}
          />

          {/* Button stays fixed under text */}
          {/* <button
            style={{
              position: "absolute",
              bottom: "-50px", // adjust vertical position
              left: "20px",
              padding: "10px 20px",
              backgroundColor: "#1E293B",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Découvrir
          </button> */}
          <button
            style={{
              position: "absolute",
              bottom: "-50px", // adjust vertical position
              left: "20px",
              padding: "10px 20px",
              backgroundColor: "#1E293B",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Découvrir Plus
          </button>
        </div>
      </div>

      {/* Right Side with Video */}
      <div
        style={{
          width: "400px",
          height: "400px",
          marginLeft: "auto",
          borderRadius: "30px",
          overflow: "hidden",
          marginRight: "70px",
          boxShadow:
            "0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
          flexShrink: 0,
        }}
      >
        <video
          src={video}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          muted
          loop
        />
      </div>
    </div>):( <div
          style={{
            display: "flex",
            width: "100%",
            gap: "240px",
            paddingLeft: "30px",
            paddingTop: "20px",
          }}
        >
          {/* الفيديو */}
          <div
            style={{
              width: "400px",
              height: "400px",
              marginLeft: "auto",
              borderRadius: "30px",
              overflow: "hidden",
              marginLeft: "70px",
              boxShadow:
                "0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
            }}
          >
            <video
              src={video}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              autoPlay
              muted
              loop
            />
          </div>
    
          {/* النص + الزر */}
          <div
            style={{
              textAlign: "left",
              paddingTop: "60px",
              paddingRight: "10px",
              position: "relative", // مهم
              minHeight: "250px", // يعطي مساحة للزر
            }}
          >
            <TextType
              text={[
                "Tu es un héros,\nnon pas parce que la vie est facile,\nmais parce que tu affrontes chaque défi avec courage.\nTa valeur brille au-delà des limites.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#1E293B", "#333333", "#555555"]}
            />
    
            {/* الزر */}
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#1E293B",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                position: "absolute",
                bottom: "-2px", // يحدد مكان الزر
                left: "0",
              }}
              className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Découvrir Plus
            </button>
          </div>
        </div>)}</div>);
}

export default Backgroundscards;


  