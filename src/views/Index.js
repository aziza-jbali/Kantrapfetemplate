/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// import Carousel from "components/Carousel/Carousel";
import VideoCarousel from "components/Carousel/Carousel";

import Backgroundscards from "components/Backgroundcards/Backgroundscards";
import video1 from "../assets/videos/dd.mp4";
import video2 from "../assets/videos/hh.mp4";
import video3 from "../assets/videos/bb.mp4";
import Vistornavbar from "components/Navbars/Vistornavbar";
import KarmaAutoSection from "components/Backgroundcards/KarmaAutoSection";
import ServicesAndWhyUs from "components/ServiceandWhyUs/ServiceandWhyUs";

export default function Index() {
  const history = useHistory();

  const goToRegister = (role) => {
    history.push({
      pathname: "/auth/register",
      state: { role },
    });
  };

  return (
    <>
      {/* <IndexNavbar fixed /> */}

      {/* <section>
        <KarmaAutoSection />
      </section> */}
      <Vistornavbar />
      <section>
        <KarmaAutoSection />
        <ServicesAndWhyUs />
      </section>
      <div style={{ width: "100%" }}>
        {/* <div
          style={{ maxWidth: "1200px", margin: "auto", paddingBottom: "10px" }}
        ></div> */}
        <section></section>
      </div>
      <div style={{ width: "100%" }} className="bago">
        <div
          style={{ maxWidth: "1200px", margin: "auto", paddingBottom: "20px" }}
        >
          <section>
            <Backgroundscards video={video1} whyofrendrenig={0} />
          </section>
          <section>
            {/* <Carousel/> */}
            <Backgroundscards video={video2} whyofrendrenig={1} />
          </section>

          <section>
            {" "}
            <Backgroundscards video={video3} whyofrendrenig={0} />
          </section>
        </div>
      </div>

      <section
        className="pb-40 relative bg-blueGray-100"
        style={{ paddingTop: "8px" }}
      >
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              Découvrez Nos Pages Inspirantes
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Explorez une sélection de pages modernes et élégantes conçues avec
              soin. Chacune illustre notre savoir-faire en matière de design,
              d’expérience utilisateur et d’innovation web. Inspirez-vous et
              imaginez vos futurs projets avec nous.
            </p>
          </div>
        </div>
      </section>

      <section
        className="block relative z-1 "
        style={{ backgroundColor: "#F3F2F3" }}
      >
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Page de Connexion
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        style={{ height: "274px" }}
                        alt="..."
                        className="align-middle border-none max-w-full  rounded-lg"
                        src={require("assets/img/connexion.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Page de Profil
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        style={{ height: "274px" }}
                        className="align-middle border-none max-w-full  rounded-lg"
                        src={require("assets/img/annonces.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Page de Véhicules
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full h-[1000px] mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        style={{ height: "274px" }}
                        alt="..."
                        className="align-middle border-none max-w-full  rounded-lg"
                        src={require("assets/img/Cars.png").default}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20  overflow-hidden"
        style={{ backgroundColor: "#F3F2F3" }}
      ></section>
      {/* #bbbbbf */}
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Vous aimez notre platforme
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Rejoignez notre communauté et accédez à toutes nos ressources
                pour créer des projets modernes, accessibles et performants.
                Laissez libre cours à votre créativité et transformez vos idées
                en réalité.
              </p>
              <div className="sm:block flex flex-col mt-10">
                {/* onClick={()=>{ history.push("/auth/register");}} */}
                <button
                  onClick={() => goToRegister("agence")}
                  // href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  // target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i className="fas fa-car text-lg mr-1"></i>

                  <span>Ajouter Véhicule</span>
                </button>
                <button
                  onClick={() => goToRegister("annonceur")}
                  // to="/auth/register"
                  // state={{ role: "annonceur" }}
                  // href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  // target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fas fa-bullhorn text-lg mr-1"></i>
                  <span>Publier une annonce</span>
                </button>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
