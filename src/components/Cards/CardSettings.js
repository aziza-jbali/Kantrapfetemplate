


import React from "react";
import {updateclientWithImg} from "../../service/apiUsers"
export default function CardSettings() {
    const token = localStorage.getItem("token");
  console.log(token)
let userid = null;
if (token) {
  const payloadBase64 = token.split('.')[1]; // الجزء الأوسط
  const decoded = JSON.parse(atob(payloadBase64));
  console.log(decoded); // { id: "69038c6d461e87058cc89352", role: "annonceur", ... }
   userid = decoded.id;
     console.log("userid", userid);

} else {
  console.log("⚠️ لا يوجد توكن");
}
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-2xl font-bold">Mon compte</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Energistrer
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-xl mt-3 mb-6 font-bold uppercase">
              Informations de l'utilisateur
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="aziza.jbali"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="aziza@example.com"
                  />
                </div>
              </div>
              {/* <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Aziza"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Jbali"
                  />
                </div>
              </div> */}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-xl mt-3 mb-6 font-bold uppercase">
              Informations de contact
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Avenue Habib Bourguiba, Tunis"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Numéro de telephone
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Tunis"
                  />
                </div>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Pays
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Tunisie"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Code postal
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="1000"
                  />
                </div>
              </div> */}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-xl mt-3 mb-6 font-bold uppercase">
              À propos de moi
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xl font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 text-xl bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Je suis une utilisatrice passionnée par les solutions technologiques pour l'accessibilité et la mobilité."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
