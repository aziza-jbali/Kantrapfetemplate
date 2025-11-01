// import React, { useState } from "react";
// import PopupPublication from "../../views/utilisateurfaitdespub/PopupPublication"
// import{getpubwithannonceur} from "../../service/apiGestionannonces"

// // بيانات المستخدمين
// const utilisateurs = [
//   { id: 1, nom: "Sara Ben Ali", email: "sara@example.com", motDePasse: "Sara123" },
//   { id: 2, nom: "Mohamed Ali", email: "mohamed@example.com", motDePasse: "Mohamed456" },
// ];

// // بيانات المنشورات المرتبطة بالمستخدمين
// const publications = [
//   {
//     id: 1,
//     userId: 1,
//     img: "https://example.com/images/auto-ecole-handicap.jpg",
//     description: "إعلان من جمعية الأمل بالتعاون مع مدرسة السياقة...",
//     status: "Pending",
//     datePublication: "2025-10-01"
//   },
//   {
//     id: 2,
//     userId: 1,
//     // img: "https://example.com/images/handicap-training.jpg",
//       img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Disability_training_workshop_3_(10692436714).jpg",

//     description: "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvبرنامج تدريبي جديد لمساعدة ذوي الإعاقة على استخدام السيارات الذكية.",
//     status: "Pending",
//     datePublication: "2025-10-03"
//   },
//   {
//     id: 3,
//     userId: 2,
//     img: "https://example.com/images/accessible-car.jpg",
//     description: "إعلان عن سيارة مجهزة لذوي الاحتياجات الخاصة متاحة للإيجار.",
//     status: "Pending",
//     datePublication: "2025-09-28"
//   }
// ];

// export default function CardAnnounceAdminPrincipale({ color = "light" }) {
//   const[pub,setpub]=useState([])
//   const [search, setSearch] = useState("");

//   // إنشاء الصفوف لكل منشور كمستقل
//   const [tableRows, setTableRows] = useState(() => {
//     const rows = [];
//     utilisateurs.forEach(user => {
//       publications
//         .filter(pub => pub.userId === user.id)
//         .forEach(pub => {
//           rows.push({
//             ...user,
//             publication: pub
//           });
//         });
//     });
//     return rows;
//   });

//   const handleStatusChange = (pubId, newStatus) => {
//     setTableRows(prev =>
//       prev.map(row =>
//         row.publication.id === pubId
//           ? { ...row, publication: { ...row.publication, status: newStatus } }
//           : row
//       )
//     );
//   };

//   const filteredRows = tableRows.filter(
//     row =>
//       row.nom.toLowerCase().includes(search.toLowerCase()) ||
//       row.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div
//       className={
//         "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//         (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
//       }
//     >
//       {/* Header و Search */}
//       <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
//         <div className="flex flex-wrap items-center">
//           <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//             <h3
//               className={
//                 "font-semibold text-xl " +
//                 (color === "light" ? "text-blueGray-700" : "text-white")
//               }
//             >
//               La table des utilisateurs et leurs publications :
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search by name or email"
//                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr className="">
//               {["IMAGE/NOM", "ADDRESS", "Email", "PHONES", "Date publication", "Status", "Actions"].map(header => (
//                 <th
//                   key={header}
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRows.map(row => (
//               <tr key={row.publication.id} className="text-center">
//                 <td className="border px-6 py-2 text-xl">{row.id}</td>
//                 <td className="border px-6 py-2 text-xl">{row.nom}</td>
//                 <td className="border px-6 py-2 text-xl">{row.email}</td>
//                 <td className="border px-6 py-2 text-xl">{row.motDePasse}</td>
//                 <td className="border px-6 py-2 text-xl">{row.publication.datePublication}</td>
//                 <td className="border px-6 py-2 text-xl">
//                   {row.publication.status}
//                   <select
//                     value={row.publication.status}
//                     onChange={e => handleStatusChange(row.publication.id, e.target.value)}
//                     className="border rounded p-1 bg-lightBlue-600 text-white text-xl ml-2 font-bold outline-none"
//                   >
//                     {row.publication.status} hhhhh
//                     <option value="Pending">Pending</option>
//                     <option value="Approuvé">Approuvé</option>
//                     <option value="Rejeté">Rejeté</option>
//                   </select>
//                 </td>
//                 <td className="border px-6 py-2">
//                   <PopupPublication publication={row.publication} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  getpubwithannonceur,
  updateAnnonceStatusByAdmin,
} from "../../service/apiGestionannonces";
import PopupPublication from "../../views/utilisateurfaitdespub/PopupPublication";

export default function CardAnnonceAdmin({ color = "light" }) {
  const [search, setSearch] = useState("");
  const [tableRows, setTableRows] = useState([]);

  const getData = async () => {
    try {
      const res = await getpubwithannonceur();
      const rows = res.data.map((annonce) => ({
        annonceId: annonce._id,
        annonceur: annonce.idannouncer || {},
        publication: annonce,
      }));
      setTableRows(rows);
      console.log("annonces",rows)
    } catch (error) {
      console.error("Erreur fetch annonces:", error);
    }
  };

  useEffect(() => {
    getData();
     const interval = setInterval(() => getData(), 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = async (annonceId, newStatus) => {
    try {
      const adminId = "68f66cc315232bd0cc4b943b";
      await updateAnnonceStatusByAdmin(annonceId, newStatus, adminId);

      setTableRows((prev) =>
        prev.map((row) =>
          row.annonceId === annonceId
            ? { ...row, publication: { ...row.publication, statut: newStatus } }
            : row
        )
      );
    } catch (error) {
      console.error("Erreur update statut:", error);
      alert("Erreur lors de la mise à jour du statut");
    }
  };

  const filteredRows = tableRows.filter(
    (row) =>
      row.annonceur.nom?.toLowerCase().includes(search.toLowerCase()) ||
      row.annonceur.email?.toLowerCase().includes(search.toLowerCase()) ||
      row.publication.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${
        color === "light" ? "bg-white" : "bg-blueGray-400 text-white"
      }`}
    >
      {/* Header و Search */}
      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={`font-semibold text-lg ${
                color === "light" ? "text-blueGray-700" : "text-white"
              }`}
            >
              La table des annonces et leurs annonceurs :
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="cherecher ici"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-xl shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
               <span
                className="text-lg font-bold text-white"
                style={{ marginLeft: "680px" }}
              >
                <i className="fas fa-calendar-check text-green-400 text-xl mr-1"></i>
                totale des Annonces :{tableRows.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {[
                "IMAGE/NOM",
                "ADDRESS",
                "Email",
                "PHONES",
                "Date publication",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className={`px-6 align-middle border border-solid py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center ${
                    color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.annonceId}>
                <td className="border px-6 py-3 text-xl whitespace-nowrap p-3 text-center flex items-center">
                  <img
                    src={`http://localhost:5011${row.annonceur.image}`}
                    alt="annonceur"
                    className="h-12 w-12 bg-white rounded-full border"
                  />
                  <span className="ml-2 font-bold text-xl">
                    {row.annonceur.nom} {row.annonceur.prenom}
                  </span>
                </td>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.annonceur.address || "—"}
                </td>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.annonceur.email}
                </td>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.annonceur.phones?.join(", ") || "—"}
                </td>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {new Date(
                    row.publication.datePublication
                  ).toLocaleDateString()}
                </td>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.publication.statut}
                  <select
                    value={row.publication.statut}
                    onChange={(e) =>
                      handleStatusChange(row.annonceId, e.target.value)
                    }
                    className="border rounded p-1 bg-lightBlue-600 text-white ml-2"
                  >
                    <option value="En attente">En attente</option>
                    <option value="Approuvé">Approuvé</option>
                    <option value="Rejeté">Rejeté</option>
                  </select>
                </td>
                <td className="border px-6 py-3 text-center">
                  <PopupPublication publication={row.publication} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
