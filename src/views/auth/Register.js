// import React from "react";
// import { Link } from "react-router-dom";
// import {ajouteragence,ajouterannonceur} from "../../service/apiUsers"

// export default function Register() {
//   return (
//     <>
//       <div className="container mx-auto px-4 h-full">
//         <div className="flex content-center items-center justify-center h-full">
//           <div className="w-full lg:w-6/12 px-4">
//             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-transparent border-0">
//               <div className="rounded-t mb-0 px-6 py-6">
//                 <div className="text-center mb-3">
//                   <h6 className="color-black text-xl font-bold">
//                     Sign up with
//                   </h6>
//                 </div>
//                 <div className="btn-wrapper text-center">
//                   {/* <button
//                     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     <img
//                       alt="..."
//                       className="w-5 mr-1"
//                       src={require("assets/img/github.svg").default}
//                     />
//                     Github
//                   </button> */}
//                   <button
//                     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     <img
//                       alt="..."
//                       className="w-5 mr-1"
//                       src={require("assets/img/google.svg").default}
//                     />
//                     Google
//                   </button>
//                 </div>
//                 <hr className="mt-6 border-b-1 border-blueGray-300" />
//               </div>
//               <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
//                 <div className="color-black text-center mb-3 font-bold">
//                   <small className="text-xl">Or sign up with credentials</small>
//                 </div>
//                 <form>
//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase color-black text-xl font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Name
//                     </label>
//                     {/* <input
//                       type="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 color-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Name"
//                     /> */}
//                        <input
//                         type="text"
//                         placeholder="votre nom"
//                         class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-transparent rounded color-white border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
//                       />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase color-black text-xl font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Email
//                     </label>
//                     {/* <input
//                       type="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 color-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                     /> */}
//                        <input
//                         type="email"
//                         placeholder="votre email"
//                         class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-transparent rounded color-white border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
//                       />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase color-black text-xl font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Password
//                     </label>
//                     {/* <input
//                       type="password"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 color-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Password"
//                     /> */}
//                        <input
//                         type="password"
//                         placeholder="votre mot de passe "
//                         class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-transparent rounded color-white border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
//                       />
//                   </div>

//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         id="customCheckLogin"
//                         type="checkbox"
//                         className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
//                       />
//                       <span className="ml-2 text-xl font-semibold color-black">
//                         I agree with the{" "}
//                         <a
//                           href="#pablo"
//                           className="text-lightBlue-500 text-xl "
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Privacy Policy
//                         </a>
//                       </span>
//                     </label>
//                   </div>

//                   <div className="text-center mt-6">
//                     <button
//                       className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                     >
//                       Create Account
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="flex flex-wrap mt-6 relative">
//               <div className="w-1/2">
//                 <Link 
//                   to="/auth/forget"
//                   className="color-white text-xl "
//                 >
//                   <small>Forgot password?</small>
//                 </Link>
//               </div>
//               <div className="w-1/2 text-right">
//                 <Link to="/auth/login" className="color-white text-xl">
//                   <small>Login</small>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



































import React, { useState } from "react";
import { Link, useLocation,useHistory } from "react-router-dom";
import { ajouteragence, ajouterannonceur } from "../../service/apiUsers";
export default function Register() {
    const history = useHistory();

  const location = useLocation();
  const role = location.state?.role; // peut être "agence" ou "annonceur"
  console.log("🔍 ROLE FROM STATE:", location.state?.role);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "", // ممكن تبقيه فاضي لو تحب
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      if (role === "agence") {
        await ajouteragence(formData);
        alert("✅ Agence créée avec succès !");
         history.push("/auth/login", { role });
      } else if (role === "annonceur") {
        await ajouterannonceur(formData);
        alert("✅ Annonceur créé avec succès !");
        history.push("/auth/login", { role });

      } else {
        alert("⚠️ Aucun rôle détecté !");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Erreur lors de la création du compte !");
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-transparent border-0">
              <div className="rounded-t mb-0 px-6 py-6 text-center">
                <h6 className="color-black text-xl font-bold">Sign up with</h6>
                <button
                  className="bg-white text-blueGray-700 font-normal px-4 py-2 rounded shadow hover:shadow-md uppercase text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1 inline"
                    src={require("assets/img/google.svg").default}
                  />
                  Google
                </button>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                <div className="color-black text-center mb-3 font-bold">
                  <small className="text-xl">Or sign up with credentials</small>
                </div>

                <form>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase color-black text-xl font-bold mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="votre nom"
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 bg-transparent rounded border border-blueGray-300 outline-none focus:outline-none w-full pl-10"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase color-black text-xl font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 bg-transparent rounded border border-blueGray-300 outline-none focus:outline-none w-full pl-10"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase color-black text-xl font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="votre mot de passe"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 bg-transparent rounded border border-blueGray-300 outline-none focus:outline-none w-full pl-10"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      onClick={handleRegister}
                      type="button"
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/forget" className="color-white text-xl">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="color-white text-xl">
                  <small>Login</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
