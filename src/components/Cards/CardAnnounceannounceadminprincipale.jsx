// import React, { useState } from "react";
// import TableDropdowndelespublications1 from "../Dropdowns/TableDropdowndelespublications1";

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
//     description: "إعلان من جمعية الأمل بالتعاون مع مدرسة السياقة، برنامج خاص لتمكين الأشخاص ذوي الإعاقة من اجتياز امتحان رخصة السياقة باستخدام سيارات مجهزة. التسجيل مفتوح الآن.",
//     status: "Pending",
//     datePublication: "2025-10-01"
//   },
//   {
//     id: 2,
//     userId: 1,
//     img: "https://example.com/images/handicap-training.jpg",
//     description: "برنامج تدريبي جديد لمساعدة ذوي الإعاقة على استخدام السيارات الذكية.",
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

// export default function CardsPublicationUtilisateur({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   // إنشاء صفوف الجدول لكل مستخدم مع بيانات منشوراته
//   const tableRows = utilisateurs.map((user) => {
//     const userPublications = publications.filter((p) => p.userId === user.id);
//     return {
//       ...user,
//       publications: userPublications
//     };
//   });

//   // فلترة حسب الاسم أو البريد
//   const filteredRows = tableRows.filter(
//     (row) =>
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
//       <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
//         <div className="flex flex-wrap items-center ">
//           <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
//             <h3
//               className={
//                 "font-semibold text-lg " +
//                 (color === "light" ? "text-blueGray-700" : "text-white")
//               }
//             >
//               Table des utilisateurs et leurs publications
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search by name or email"
//                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr>
//               {[
//                 "ID utilisateur",
//                 "Nom complet",
//                 "Email",
//                 "Mot de passe",
//                 "Nombre de publications",
//                 "Actions",
//               ].map((header) => (
//                 <th
//                   key={header}
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
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
//             {filteredRows.map((row) => (
//               <tr key={row.id}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.id}</td>
//                 <td className="border p-2 text-xl">{row.nom}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.email}</td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.publications.length}</td>
//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                   <span>Consulter</span>
//                   <TableDropdowndelespublications1 publications={row.publications} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

//import PopupPublication from "../../views/utilisateurfaitdespub/PopupPublication"



import React, { useState } from "react";
import PopupPublication from "../../views/utilisateurfaitdespub/PopupPublication"

// بيانات المستخدمين
const utilisateurs = [
  { id: 1, nom: "Sara Ben Ali", email: "sara@example.com", motDePasse: "Sara123" },
  { id: 2, nom: "Mohamed Ali", email: "mohamed@example.com", motDePasse: "Mohamed456" },
];

// بيانات المنشورات المرتبطة بالمستخدمين
const publications = [
  {
    id: 1,
    userId: 1,
    img: "https://example.com/images/auto-ecole-handicap.jpg",
    description: "إعلان من جمعية الأمل بالتعاون مع مدرسة السياقة...",
    status: "Pending",
    datePublication: "2025-10-01"
  },
  {
    id: 2,
    userId: 1,
    img: "https://example.com/images/handicap-training.jpg",
    description: "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvبرنامج تدريبي جديد لمساعدة ذوي الإعاقة على استخدام السيارات الذكية.",
    status: "Pending",
    datePublication: "2025-10-03"
  },
  {
    id: 3,
    userId: 2,
    img: "https://example.com/images/accessible-car.jpg",
    description: "إعلان عن سيارة مجهزة لذوي الاحتياجات الخاصة متاحة للإيجار.",
    status: "Pending",
    datePublication: "2025-09-28"
  }
];

export default function CardAnnounceAdminPrincipale({ color = "light" }) {
  
  const [search, setSearch] = useState("");

  // إنشاء الصفوف لكل منشور كمستقل
  const [tableRows, setTableRows] = useState(() => {
    const rows = [];
    utilisateurs.forEach(user => {
      publications
        .filter(pub => pub.userId === user.id)
        .forEach(pub => {
          rows.push({
            ...user,
            publication: pub
          });
        });
    });
    return rows;
  });

  const handleStatusChange = (pubId, newStatus) => {
    setTableRows(prev =>
      prev.map(row =>
        row.publication.id === pubId
          ? { ...row, publication: { ...row.publication, status: newStatus } }
          : row
      )
    );
  };

  const filteredRows = tableRows.filter(
    row =>
      row.nom.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
      }
    >
      {/* Header و Search */}
      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              La table des utilisateurs et leurs publications
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search by name or email"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {["ID", "Nom", "Email", "Mot de passe", "Date publication", "Status", "Actions"].map(header => (
                <th
                  key={header}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(row => (
              <tr key={row.publication.id} className="text-center">
                <td className="border px-6 py-2">{row.id}</td>
                <td className="border px-6 py-2">{row.nom}</td>
                <td className="border px-6 py-2">{row.email}</td>
                <td className="border px-6 py-2">{row.motDePasse}</td>
                <td className="border px-6 py-2">{row.publication.datePublication}</td>
                <td className="border px-6 py-2">
                  <select
                    value={row.publication.status}
                    onChange={e => handleStatusChange(row.publication.id, e.target.value)}
                    className="border rounded p-1 bg-lightBlue-600 text-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approuvé">Approuvé</option>
                    <option value="Rejeté">Rejeté</option>
                  </select>
                </td>
                <td className="border px-6 py-2">
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

