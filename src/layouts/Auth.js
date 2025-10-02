import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import forget from "views/auth/forget";
import Register from "views/auth/Register.js";
import video1 from "assets/videos/xx.mp4";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          {/* <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div> */}
          <div
            className="absolute top-0 w-full h-full  bg-no-repeat bg-full"
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/register_bg_2.png").default + ")",
            // }}
          >
            <section
              style={{
                backgroundColor: "grey",
                // overflow: "hidden",
                width: "100vw",
                height: "100vh",
                position: "relative",
              }}
            >
              <video
                src={video1} // هذا متغير الفيديو المستورد
                autoPlay // تشغيل تلقائي
                loop // تكرار مستمر
                muted // بدون صوت (مهم لتشغيل autoplay في المتصفحات)
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </section>
          </div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/forget" exact component={forget} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
