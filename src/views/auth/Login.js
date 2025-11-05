// import React from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <>
//       <div className="container mx-auto px-4 h-full">
//         <div className="flex content-center items-center justify-center h-full">
//           <div className="w-full lg:w-4/12 px-4">
//             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
//               <div className="rounded-t mb-0 px-6 py-6">
//                 <div className="text-center mb-3">
//                   <h6 className="text-blueGray-500 text-sm font-bold">
//                     Sign in with
//                   </h6>
//                 </div>
//                 <div className="btn-wrapper text-center">
//                   <button
//                     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     <img
//                       alt="..."
//                       className="w-5 mr-1"
//                       src={require("assets/img/github.svg").default}
//                     />
//                     Github
//                   </button>
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
//               <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                 <div className="text-blueGray-400 text-center mb-3 font-bold">
//                   <small>Or sign in with credentials</small>
//                 </div>
//                 <form>
//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         id="customCheckLogin"
//                         type="checkbox"
//                         className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
//                       />
//                       <span className="ml-2 text-sm font-semibold text-blueGray-600">
//                         Remember me
//                       </span>
//                     </label>
//                   </div>

//                   <div className="text-center mt-6">
//                     <button
//                       className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                     >
//                       Sign In
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="flex flex-wrap mt-6 relative">
//               <div className="w-1/2">
//                 <Link 
//                   to="/auth/forget"
//                   className="text-blueGray-200"
//                 >
//                   <small>Forgot password?</small>
//                 </Link>
//               </div>
//               <div className="w-1/2 text-right">
//                 <Link to="/auth/register" className="text-blueGray-200">
//                   <small>Create new account</small>
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
import { Link ,useHistory,useLocation} from "react-router-dom";
import {connexion} from "../../service/apiUsers"
export default function Login() {
const location = useLocation();
const roleFromRegister = location.state?.role;
console.log("🧭 Role reçu depuis Register:", roleFromRegister);

  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const LoginUser = async () => {
  //   try {
  //     await connexion(user)
  //       .then((response) => {
  // const userRole = response.data.user.role || roleFromRegister;
  //   localStorage.setItem("token", response.data.token);
  //   localStorage.setItem("role", userRole);

  //   if (userRole === "agence") {
  //     history.push("/Adminagencedevoiture/settings");
  //   } else if (userRole === "annonceur") {
  //     history.push("/Utilisateur/settings");
  //   } 
  //    else {
  //     history.push("/landing");
  //   }
  //       })
  //       .catch((error) => {
  //         console.log("Error while calling addUser API ", error);
  //       });
  //   } catch (error) {
  //     console.log("Error while calling getUsers API ", error);
  //   }
  // };

//   const LoginUser = async () => {
//   try {
//     const response = await connexion(user);
//     console.log("hello world")

//     // استخراج الدور مباشرة من response
//     const userRole = response.data.user.role; // أو response.data.user.role حسب ما يعيد السيرفر

//     localStorage.setItem("token", response.data.token);
//     localStorage.setItem("role", userRole);

//     // توجيه المستخدم حسب الدور
//     if (userRole === "agence") {
//       history.push("/Adminagencedevoiture/settings");
//     } else if (userRole === "annonceur") {
//       history.push("/landing");
//     } else {
//       history.push("/");
//     }

//   } catch (error) {
//     console.error("Error while logging in:", error);
//   }
// };
















const LoginUser = async () => {
  try {
    const response = await connexion(user);
    console.log("response:", response.data);

    const token = response.data.token;
    const userRole = response.data.user.role;

    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole);

    if (userRole === "agence") history.push("/Adminagencedevoiture/settings");
    else if (userRole === "annonceur") history.push("/Utilisateur/Mes-Annonces");
    else history.push("/");
    // window.history.pushState(null, "", window.location.href);
    // window.onpopstate = function () {
    // window.history.go(1);
    // };
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
  }
};


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="color-black text-xl font-bold">
                    Sign in with
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300 " />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {/* <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div> */}
                <form>
                  <div className="relative w-full mb-3 ">
                    <label
                      className="block uppercase  color-black text-xl font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <div class="relative flex w-full flex-wrap items-stretch mb-3">
                      <span class="z-10 h-full leading-normal font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
                        {/* <i class="fas fa-lock"></i> */}
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="votre email"
                        class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative  bg-transparent rounded color-black border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                      onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase color-black text-xl font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                       <div class="relative flex w-full flex-wrap items-stretch mb-3">
                      <span class="z-10 h-full leading-normal font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
                        {/* <i class="fas fa-lock"></i> */}
                      </span>
                      <input
                        type="password"
                        name="password"
                        placeholder="votre mot de passe "
                        class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-transparent rounded color-black border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-xl font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                       onClick={() => LoginUser()}

                    >
                      Sign In
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
                <Link to="/auth/register" className="color-white text-xl">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
