// import React from "react";

// // components

// export default function CardProfile() {
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
//         <div className="px-6">
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full px-4 flex justify-center">
//               <div className="relative">
//                 <img
//                   alt="..."
//                   src={require("assets/img/team-2-800x800.jpg").default}
//                   className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
//                 />
//               </div>
//             </div>
//             <div className="w-full px-4 text-center mt-20">
//               <div className="flex justify-center py-4 lg:pt-4 pt-8">
//                 <div className="mr-4 p-3 text-center">
//                   <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                     22
//                   </span>
//                   <span className="text-sm text-blueGray-400">Friends</span>
//                 </div>
//                 <div className="mr-4 p-3 text-center">
//                   <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                     10
//                   </span>
//                   <span className="text-sm text-blueGray-400">Photos</span>
//                 </div>
//                 <div className="lg:mr-4 p-3 text-center">
//                   <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
//                     89
//                   </span>
//                   <span className="text-sm text-blueGray-400">Comments</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//               Jenna Stones
//             </h3>
//             <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//               <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
//               Los Angeles, California
//             </div>
//             <div className="mb-2 text-blueGray-600 mt-10">
//               <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
//               Solution Manager - Creative Tim Officer
//             </div>
//             <div className="mb-2 text-blueGray-600">
//               <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//               University of Computer Science
//             </div>
//           </div>
//           <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
//             <div className="flex flex-wrap justify-center">
//               <div className="w-full lg:w-9/12 px-4">
//                 <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
//                   An artist of considerable range, Jenna the name taken by
//                   Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
//                   and records all of his own music, giving it a warm, intimate
//                   feel with a solid groove structure. An artist of considerable
//                   range.
//                 </p>
//                 <a
//                   href="#pablo"
//                   className="font-normal text-lightBlue-500"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   Show more
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






// import React from "react";

// export default function CardProfile() {
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl mt-16">
//         <div className="px-6">
//           {/* Avatar Section */}
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full px-4 flex justify-center">
//               <div className="relative">
//                 <img
//                   alt="Avatar utilisateur"
//                   src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
//                   className="shadow-xl rounded-full h-44 w-44 object-cover align-middle border-4 border-blue-500 absolute -m-16 -ml-20 lg:-ml-16 transition-transform duration-300 hover:scale-110 hover:rotate-3"
//                 />
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="w-full px-4 text-center mt-24">
//               <div className="flex justify-center py-4 lg:pt-4 pt-8">
//                 <div className="mr-4 p-3 text-center">
//                   <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                     22
//                   </span>
//                   <span className="text-md text-blueGray-400">Amis</span>
//                 </div>
//                 <div className="mr-4 p-3 text-center">
//                   <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                     10
//                   </span>
//                   <span className="text-md text-blueGray-400">Photos</span>
//                 </div>
//                 <div className="lg:mr-4 p-3 text-center">
//                   <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                     89
//                   </span>
//                   <span className="text-md text-blueGray-400">Commentaires</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Profile Info */}
//           <div className="text-center mt-12">
//             <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-800">
//               Aziza Jbali
//             </h3>
//             <div className="text-md leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//               <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
//               Tunis, Tunisie
//             </div>
//             <div className="mb-2 text-blueGray-700 mt-10 text-lg">
//               <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
//               Développeuse Full Stack
//             </div>
//             <div className="mb-2 text-blueGray-700 text-lg">
//               <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//               Université des Sciences Informatiques
//             </div>
//           </div>

//           {/* About Section */}
//           <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
//             <div className="flex flex-wrap justify-center">
//               <div className="w-full lg:w-9/12 px-4">
//                 <p className="mb-4 text-xl leading-relaxed text-blueGray-700">
//                   Passionnée par la technologie et l’innovation, j’aime créer des
//                   applications accessibles et intuitives. Mon objectif est de
//                   développer des solutions qui facilitent la vie quotidienne des
//                   utilisateurs, tout en rendant le web plus inclusif.
//                 </p>
//                 <a
//                   href="#plus"
//                   className="font-semibold text-lightBlue-500 hover:text-lightBlue-700 transition-colors text-lg"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   Voir plus
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
















// import React, { useState } from "react";

// export default function CardProfile() {
//   const defaultAvatar = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
//   const [avatar, setAvatar] = useState(defaultAvatar);

//   function handleImageUpload(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => {
//       setAvatar(reader.result);
//     };
//     reader.readAsDataURL(file);
//   }

//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl mt-16">
//         <div className="px-6">
//           {/* Avatar Section - centered and visible */}
//           <div className="flex flex-col items-center">
//             <div className="relative">
//               <img
//                 alt="Avatar utilisateur"
//                 src={avatar}
//                 className="shadow-xl rounded-full h-44 w-44 object-cover border-4 border-blue-500 -mt-20"
//               />
//             </div>

//             {/* upload button */}
//             <div className="mt-4">
//               <label className="cursor-pointer inline-block bg-lightBlue-500 text-white px-4 py-2 rounded-lg text-xl font-medium">
//                 Changer l'avatar
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="w-full px-4 text-center mt-6">
//             <div className="flex justify-center py-4 lg:pt-4 pt-8 gap-6">
//               <div className="p-3 text-center">
//                 <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                   22
//                 </span>
//                 <span className="text-md text-blueGray-400">Amis</span>
//               </div>
//               <div className="p-3 text-center">
//                 <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                   10
//                 </span>
//                 <span className="text-md text-blueGray-400">Photos</span>
//               </div>
//               <div className="p-3 text-center">
//                 <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
//                   89
//                 </span>
//                 <span className="text-md text-blueGray-400">Commentaires</span>
//               </div>
//             </div>
//           </div>

//           {/* Profile Info */}
//           <div className="text-center mt-6">
//             <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-800">
//               Aziza Jbali
//             </h3>
//             <div className="text-md leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//               <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
//               Tunis, Tunisie
//             </div>
//             <div className="mb-2 text-blueGray-700 mt-4 text-lg">
//               <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
//               Développeuse Full Stack
//             </div>
//             <div className="mb-2 text-blueGray-700 text-lg">
//               <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//               Université des Sciences Informatiques
//             </div>
//           </div>

//           {/* About Section */}
//           <div className="mt-8 py-8 border-t border-blueGray-200 text-center">
//             <div className="w-full lg:w-9/12 px-4 mx-auto">
//               <p className="mb-4 text-xl leading-relaxed text-blueGray-700">
//                 Passionnée par la technologie et l’innovation, j’aime créer des
//                 applications accessibles et intuitives. Mon objectif est de
//                 développer des solutions qui facilitent la vie quotidienne des
//                 utilisateurs.
//               </p>
//               <a
//                 href="#plus"
//                 className="font-semibold text-lightBlue-500 hover:text-lightBlue-700 transition-colors text-lg"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Voir plus
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





import React, { useState } from "react";

export default function CardProfile() {
  const defaultAvatar = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  const [avatar, setAvatar] = useState(defaultAvatar);

  function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl mt-16" style={{borderRadius:"10px"}}>
        <div className="px-6">
          {/* Avatar Section */}
          {/* <div className="flex flex-col items-center">
  <div className="relative">
    <div className="h-44 w-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl -mt-20 flex items-center justify-center bg-gray-100">
      <img
        alt="Avatar utilisateur"
        src={avatar}
        className="max-h-full max-w-full object-contain block"
      />
    </div>
  </div> */}

  {/* Upload button */}
  {/* <div className="mt-4">
    <label className="cursor-pointer inline-block bg-lightBlue-500 text-white px-4 py-2 rounded-lg text-xl font-medium">
      Changer l'avatar
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>
  </div>
</div> */}





<div className="flex flex-col items-center">
  <div className="relative">
    <div
      style={{
        height: "250px",
        width: "250px",
        borderRadius: "50%",
        overflow: "hidden",
        // border: "4px solid #3b82f6",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginTop: "-80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={avatar}
        alt="Avatar utilisateur"
        style={{
          height: "250px",
          width: "250px",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={e => e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"}
        onMouseOut={e => e.currentTarget.style.transform = "scale(1) rotate(0deg)"}
      />
    </div>
  </div>

  {/* Upload button */}
  <div style={{ marginTop: "20px" }}>
    <label
      style={{
        cursor: "pointer",
        backgroundColor: "#3b82f6",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        // fontSize: "16px",
        display: "inline-block",
      }}
      className="text-xl"
    >
      Changer l'avatar
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </label>
  </div>
</div>


          {/* Stats */}
          <div className="w-full px-4 text-center mt-6">
            <div className="flex justify-center py-4 lg:pt-4 pt-8 gap-6">
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
                  22
                </span>
                <span className="text-md text-blueGray-400">Amis</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
                  10
                </span>
                <span className="text-md text-blueGray-400">Photos</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-700">
                  89
                </span>
                <span className="text-md text-blueGray-400">Commentaires</span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center mt-6">
            <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-800">
              Aziza Jbali
            </h3>
            <div className="text-md leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Tunis, Tunisie
            </div>
            <div className="mb-2 text-blueGray-700 mt-4 text-lg">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Développeuse Full Stack
            </div>
            <div className="mb-2 text-blueGray-700 text-lg">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Université des Sciences Informatiques
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8 py-8 border-t border-blueGray-200 text-center">
            <div className="w-full lg:w-9/12 px-4 mx-auto">
              <p className="mb-4 text-xl leading-relaxed text-blueGray-700">
                Passionnée par la technologie et l’innovation, j’aime créer des
                applications accessibles et intuitives. Mon objectif est de
                développer des solutions qui facilitent la vie quotidienne des
                utilisateurs.
              </p>
              <a
                href="#plus"
                className="font-semibold text-lightBlue-500 hover:text-lightBlue-700 transition-colors text-lg"
                onClick={(e) => e.preventDefault()}
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
