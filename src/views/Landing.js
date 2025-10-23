// import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import image1 from "../assets/img/handicaped.jpg";
import bb from "../assets/videos/bb.mp4"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cardsvehiculs from "components/Cards/Cardsvehiculs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import video from "../assets/videos/oo.mp4";
import Vistornavbar from "components/Navbars/Vistornavbar";
import carsofhandicaped from "../assets/img/carsofhandicaped.jpg";
import sss from "../assets/img/sss.jpg";
import SearchSection from "components/Navbars/SearchSection";
import OurServices from "components/Main/OurServices";
import vvcar from "assets/img/vvcar.jpg"; // import your local image

export default function Landing() {
  return (
    <>
       <Vistornavbar isTransparent={true} />
      {/* <Vistornavbar isTransparent={true}/> */}
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              
               backgroundImage: `url(${vvcar})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-25 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Aujourd’hui n’est pas un obstacle, mais un départ.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Réservez votre véhicule adapté et vivez pleinement chaque
                    instant. Chez <strong>Karama-Auto</strong>, nous croyons que
                    chaque trajet est une étape vers plus d’autonomie, de
                    liberté et de bonheur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Service 1: Véhicules adaptés */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-wheelchair"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Véhicules adaptés</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Nos véhicules sont spécialement conçus pour les personnes
                      à mobilité réduite, garantissant confort, sécurité et
                      autonomie lors de vos déplacements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Service d’assistance */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-hands-helping"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Service d’assistance
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Notre agence offre un accompagnement complet : aide à la
                      réservation, conseils personnalisés et assistance tout au
                      long de votre trajet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Agence certifiée */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Agence certifiée</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Nous sommes une agence reconnue et certifiée, dédiée à
                      offrir un service de qualité aux personnes en situation de
                      handicap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Voyager avec nous, c’est retrouver la liberté
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Notre agence met à votre disposition des véhicules
                  spécialement adaptés aux personnes à mobilité réduite, pour
                  vous offrir des trajets confortables, sécurisés et sans
                  limites.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Nous croyons que chaque déplacement est une nouvelle
                  opportunité de vivre pleinement, de découvrir, et de partager.
                  Réservez votre véhicule adapté dès aujourd’hui et prenez la
                  route vers plus d’autonomie.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Réserver maintenant →
                </Link>
              </div>
              <div
  className="w-full md:w-4/12 px-4 mr-auto ml-auto"
  style={{ position: "relative", height: "500px",  borderRadius: "1.5rem", // rounded corners
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)", // soft shadow
    overflow: "hidden" }} 
>
  <video
    src={bb} // your video import
    autoPlay
    muted
    loop
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover", // ensures video covers the container
    }}
  ></video>
</div>




            </div>
          </div>
        </section>

        {/* hadh nhar 10/21/2025 */}
        {/* Cards تحت الصورة */}
        <section>
          {/* <div style={{ width: "100%",height:"200px", border:"1px solid red" }}>
             <div
              style={{
                maxWidth: "1200px",
                margin: "auto",
                paddingBottom: "10px",
              }}
            >
              <SearchSection />
            </div> 
          </div> */}
        </section>
        <div style={{ marginTop: "50px" }}>
          <Cardsvehiculs />
          {/* <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div>
          <OurServices />
        </div> */}

        {/* <Cardsvehiculs /> */}
        {/* 
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Nos partenaires d’agences
                </h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Nous collaborons avec plusieurs agences partenaires pour
                  offrir des véhicules adaptés et accessibles à tous. Vous êtes
                  une agence ?
                  <br />
                  <span className="font-semibold text-blue-600">
                    N’hésitez pas à ajouter vos véhicules et rejoindre notre
                    communauté !
                  </span>
                </p>
         <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{padding:"14px"}}>
    Ajouter un véhicule
</button>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
          Fondatrice & CEO - Agence AutoLuxe
        </p>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                Agence spécialisée dans la location de voitures de luxe et sportives, avec un service premium pour les clients

                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      CEO - Agence AutoRapide
                    </p>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
          Agence orientée vers la location de voitures économiques et rapides, avec un service rapide et efficace,grande

                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      CEO - Agence Mobilité
                    </p>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                Agence spécialisée dans les véhicules adaptés aux personnes à mobilité réduite, avec accompagnement personnalisé.

                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                CEO - Agence AutoClassique

                    </p>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                Agence spécialisée dans la vente et location de voitures classiques et anciennes pour passionnés,service rapide,grande

                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       <section className="pb-20 relative block bg-blueGray-800">
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        className="text-blueGray-800 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-white">
          Nos Services de Mobilité Adaptée
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
          Chaque déplacement est une opportunité de vivre pleinement et de partager. Nos véhicules adaptés permettent aux personnes à mobilité réduite de se déplacer facilement et en toute sécurité.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-wheelchair text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Accessibilité
        </h6>
        <p className="mt-2 mb-4 text-blueGray-400">
          Nos véhicules sont conçus pour les personnes à mobilité réduite, garantissant un accès facile et sécurisé.
        </p>
      </div>

      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-hand-holding-heart text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Assistance Personnalisée
        </h5>
        <p className="mt-2 mb-4 text-blueGray-400">
          Notre équipe accompagne chaque client avec attention et bienveillance.
        </p>
      </div>

      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-clock text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Disponibilité Rapide
        </h5>
        <p className="mt-2 mb-4 text-blueGray-400">
          Réservez rapidement et profitez de véhicules adaptés disponibles immédiatement.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="relative block py-24 lg:pt-0 bg-blueGray-800">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              Contactez-nous
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Remplissez ce formulaire et notre équipe vous répondra dans les 24 heures.
            </p>

            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Nom complet
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Nom complet"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows="4"
                cols="80"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Tapez votre message..."
              />
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  );
}
