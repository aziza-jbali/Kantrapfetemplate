// import React, { useState } from "react";
// import PropTypes from "prop-types";

// // بيانات المستخدمين (Agence Admin + Utilisateurs)
// const users = [
//   {
//     id: 1,
//     fullName: "Agence Carthage",
//     email: "carthage@agence.com",
//     motDePasse: "agence123",
//     role: "Agence Admin",
//   },
//   {
//     id: 2,
//     fullName: "Agence Monastir",
//     email: "monastir@agence.com",
//     motDePasse: "agence456",
//     role: "Agence Admin",
//   },
//   {
//     id: 3,
//     fullName: "Mohamed Ali",
//     email: "mohamed@example.com",
//     motDePasse: "user123",
//     role: "utilisateur",
//   },
//   {
//     id: 4,
//     fullName: "Sara Ben Salem",
//     email: "sara@example.com",
//     motDePasse: "user456",
//     role: "utilisateur",
//   },
// ];

// // بيانات السيارات المرتبطة بالوكالات
// const cars = [
//   {
//     id: 1,
//     userId: 1, // مضافة من Agence Carthage
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner XL",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 45000,
//       sièges: 3,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/peugeot-partner.jpg",
//       status: "Pending",
//     },
//   },
//   {
//     id: 2,
//     userId: 2, // مضافة من Agence Monastir
//     carDetails: {
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modèle: "Kangoo Maxi",
//       année: 2021,
//       carburant: "Essence",
//       kilométrage: 30000,
//       sièges: 4,
//       catégorie: "Utilitaire",
//       transmission: "Automatique",
//       description: "سيارة مناسبة للتأجير العائلي",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: false,
//       guide: true,
//       espaceFauteuil: "Medium",
//       support: "حزام أمان قياسي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//       status: "Approved",
//     },
//   },
// ];

// // بيانات الإعلانات (Publications)
// const publications = [
//   {
//     id: 1,
//     userId: 3, // مضاف من Mohamed Ali (Utilisateur)
//     img: "https://example.com/images/pub1.jpg",
//     description: "إعلان لكرسي متحرك ذكي",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     userId: 4, // مضاف من Sara Ben Salem (Utilisateur)
//     img: "https://example.com/images/pub2.jpg",
//     description: "إعلان لجهاز مساعد للتنقل",
//     status: "Approved",
//   },
// ];

// export { users, cars, publications };

// function CardsPublicationadminprincipale() {
//   return (
//     <>
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
//           <div className="flex flex-wrap items-center ">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-blueGray-700" : "text-white")
//                 }
//               >
//                 La table de utilisateur:
//               </h3>
//               <div class="mb-3 pt-0">
//                 <input
//                   type="text"
//                   placeholder="search here"
//                   class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="block w-full overflow-x-auto">
//           {/* Projects table */}
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   ID utilisateur
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   Nom complet
//                 </th>
//                     <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                  Email
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                 mot de passe
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   role de utilisateur
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   Status de  publication
//                 </th>
//                 <th
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {booking.map((booking) => (
//                 <tr key={booking.id}>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
//                     {booking.id}
//                   </td>
//                   <td className="border p-2 text-xl">
//                     {booking.carDetails.nom}
//                   </td>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
//                     {booking.startDate} - {booking.endDate}
//                   </td>
//                   {/* <td>{booking.status}</td> */}
//                   <td className="border p-2 text-xl ">
//                     {booking.status}
//                     <select
//                       value={booking.status}
//                       onChange={(e) =>
//                         handleStatusChange(booking.id, e.target.value)
//                       }
//                       className="border rounded p-1 ml-2 bg-lightBlue-600"
//                       style={{ paddingLeft: "15px" }}
//                     >
//                       <option value="venir">À venir</option>
//                       <option value="Termine">Terminé</option>
//                       <option value="Annule">Annulé</option>
//                     </select>
//                   </td>

//                   <td className="border p-2 text-xl">{booking.price}</td>
//                   <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border p-2 ">
//                     <span>Consulter</span>
//                     <TableDropdownagencedevoiture bookingId={booking.id} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CardsPublicationadminprincipale;



















// import React, { useState } from "react";

// // Fake Data كما بعثتها
// const users = [
//   {
//     id: 1,
//     fullName: "Agence Carthage",
//     email: "carthage@agence.com",
//     motDePasse: "agence123",
//     role: "Agence Admin",
//   },
//   {
//     id: 2,
//     fullName: "Agence Monastir",
//     email: "monastir@agence.com",
//     motDePasse: "agence456",
//     role: "Agence Admin",
//   },
//   {
//     id: 3,
//     fullName: "Mohamed Ali",
//     email: "mohamed@example.com",
//     motDePasse: "user123",
//     role: "Utilisateur",
//   },
//   {
//     id: 4,
//     fullName: "Sara Ben Salem",
//     email: "sara@example.com",
//     motDePasse: "user456",
//     role: "Utilisateur",
//   },
// ];

// const cars = [
//   {
//     id: 1,
//     userId: 1,
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner XL",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 45000,
//       sièges: 3,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/peugeot-partner.jpg",
//       status: "Pending",
//     },
//   },
//   {
//     id: 2,
//     userId: 2,
//     carDetails: {
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modèle: "Kangoo Maxi",
//       année: 2021,
//       carburant: "Essence",
//       kilométrage: 30000,
//       sièges: 4,
//       catégorie: "Utilitaire",
//       transmission: "Automatique",
//       description: "سيارة مناسبة للتأجير العائلي",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: false,
//       guide: true,
//       espaceFauteuil: "Medium",
//       support: "حزام أمان قياسي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//       status: "Approved",
//     },
//   },
// ];

// const publications = [
//   {
//     id: 1,
//     userId: 3,
//     img: "https://example.com/images/pub1.jpg",
//     description: "إعلان لكرسي متحرك ذكي",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     userId: 4,
//     img: "https://example.com/images/pub2.jpg",
//     description: "إعلان لجهاز مساعد للتنقل",
//     status: "Approved",
//   },
// ];

// function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   const filteredUsers = users.filter(
//     (user) =>
//       user.fullName.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase())
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
//               La table des utilisateurs
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//                 "Role de utilisateur",
//                 "Status de publication",
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
//             {filteredUsers.map((user) => {
//               const userPublication = publications.find(
//                 (pub) => pub.userId === user.id
//               );
//               const publicationStatus = userPublication
//                 ? userPublication.status === "Approved"
//                   ? "Approuvé"
//                   : "Rejeté"
//                 : "Aucune";

//               return (
//                 <tr key={user.id}>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                     {user.id}
//                   </td>
//                   <td className="border p-2 text-xl">{user.fullName}</td>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                     {user.email}
//                   </td>
//                   <td className="border p-2 text-xl">{user.motDePasse}</td>
//                   <td className="border p-2 text-xl">{user.role}</td>
//                   <td className="border p-2 text-xl">{publicationStatus}</td>
//                   <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                     <span>Consulter</span>
//                     {/* <TableDropdownagencedevoiture bookingId={user.id} /> */}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CardsPublicationadminprincipale;






































// import React, { useState } from "react";
// // import TableDropdownagencedevoiture from "./TableDropdownagencedevoiture";

// // Fake Data
// const users = [
//   {
//     id: 1,
//     fullName: "Agence Carthage",
//     email: "carthage@agence.com",
//     motDePasse: "agence123",
//   },
//   {
//     id: 2,
//     fullName: "Agence Monastir",
//     email: "monastir@agence.com",
//     motDePasse: "agence456",
//   },
//   {
//     id: 3,
//     fullName: "Mohamed Ali",
//     email: "mohamed@example.com",
//     motDePasse: "user123",
//   },
//   {
//     id: 4,
//     fullName: "Sara Ben Salem",
//     email: "sara@example.com",
//     motDePasse: "user456",
//   },
// ];

// const publications = [
//   {
//     id: 1,
//     userId: 3,
//     img: "https://example.com/images/pub1.jpg",
//     description: "إعلان لكرسي متحرك ذكي",
//     status: "Pending",
//     datePublication: "2025-10-03",
//   },
//   {
//     id: 2,
//     userId: 4,
//     img: "https://example.com/images/pub2.jpg",
//     description: "إعلان لجهاز مساعد للتنقل",
//     status: "Approved",
//     datePublication: "2025-10-01",
//   },
//    {
//     id: 3,
//     userId: 3,
//     img: "https://example.com/images/pub2.jpg",
//     description: "إعلان لجهاز مساعد للتنقل",
//     status: "Approved",
//     datePublication: "2025-10-11",
//   },
//    {
//     id: 4,
//     userId: 4,
//     img: "https://example.com/images/pub2.jpg",
//     description: "إعلان لجهاز مساعد للتنقل",
//     status: "Approved",
//     datePublication: "2025-11-20",
//   },
// ];

// function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   const filteredUsers = users.filter(
//     (user) =>
//       user.fullName.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase())
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
//               La table des utilisateurs
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//                 "Date de publication",
//                 "Status de publication",
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
//             {filteredUsers.map((user) => {
//               const userPublication = publications.find(
//                 (pub) => pub.userId === user.id
//               );

//               // حالة النشر فقط Approuvé أو Rejeté
//               const publicationStatus =
//                 userPublication && userPublication.status === "Approved"
//                   ? "Approuvé"
//                   : "Rejeté";

//               return (
//                 <tr key={user.id}>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                     {user.id}
//                   </td>
//                   <td className="border p-2 text-xl">{user.fullName}</td>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                     {user.email}
//                   </td>
//                   <td className="border p-2 text-xl">{user.motDePasse}</td>
//                   <td className="border p-2 text-xl">
//                     {userPublication && userPublication.datePublication}
//                   </td>
//                   <td className="border p-2 text-xl">{publicationStatus}</td>
//                   <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                     <span>Consulter</span>
//                     {/* <TableDropdownagencedevoiture bookingId={user.id} /> */}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CardsPublicationadminprincipale;


































// import React, { useState } from "react";
// // import TableDropdownagencedevoiture from "./TableDropdownagencedevoiture";

// // Fake Data
// const users = [
//   { id: 1, fullName: "Agence Carthage", email: "carthage@agence.com", motDePasse: "agence123" },
//   { id: 2, fullName: "Agence Monastir", email: "monastir@agence.com", motDePasse: "agence456" },
//   { id: 3, fullName: "Mohamed Ali", email: "mohamed@example.com", motDePasse: "user123" },
//   { id: 4, fullName: "Sara Ben Salem", email: "sara@example.com", motDePasse: "user456" },
// ];

// const publications = [
//   { id: 1, userId: 3, img: "https://example.com/images/pub1.jpg", description: "إعلان لكرسي متحرك ذكي", status: "Pending", datePublication: "2025-10-03" },
//   { id: 2, userId: 4, img: "https://example.com/images/pub2.jpg", description: "إعلان لجهاز مساعد للتنقل", status: "Approved", datePublication: "2025-10-01" },
//   { id: 3, userId: 3, img: "https://example.com/images/pub3.jpg", description: "إعلان جهاز تنقل جديد", status: "Approved", datePublication: "2025-10-11" },
//   { id: 4, userId: 4, img: "https://example.com/images/pub4.jpg", description: "إعلان كرسي كهربائي", status: "Approved", datePublication: "2025-11-20" },
// ];

// function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   // Filter users by search
//   const filteredUsers = users.filter(
//     (user) =>
//       user.fullName.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase())
//   );

//   // Generate table rows: one row per publication
//   const tableRows = [];
//   filteredUsers.forEach((user) => {
//     const userPublications = publications.filter((pub) => pub.userId === user.id);

//     userPublications.forEach((pub) => {
//       tableRows.push({
//         userId: user.id,
//         fullName: user.fullName,
//         email: user.email,
//         motDePasse: user.motDePasse,
//         datePublication: pub.datePublication,
//         status: pub.status === "Approved" ? "Approuvé" : "Rejeté",
//         publicationId: pub.id,
//       });
//     });
//   });

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
//               La table des publications
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//               {["ID utilisateur", "Nom complet", "Email", "Mot de passe", "Date de publication", "Status de publication", "Actions"].map((header) => (
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
//             {tableRows.map((row) => (
//               <tr key={`${row.userId}-${row.publicationId}`}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.userId}</td>
//                 <td className="border p-2 text-xl">{row.fullName}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.email}</td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.datePublication}</td>
//                 <td className="border p-2 text-xl">{row.status}</td>
//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                   <span>Consulter</span>
//                   {/* <TableDropdownagencedevoiture bookingId={row.publicationId} /> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CardsPublicationadminprincipale;








// import React, { useState } from "react";
// // import TableDropdownagencedevoiture from "./TableDropdownagencedevoiture";

// // Fake Data
// // const users = [
// //   { id: 1, fullName: "Agence Carthage", email: "carthage@agence.com", motDePasse: "agence123" },
// //   { id: 2, fullName: "Agence Monastir", email: "monastir@agence.com", motDePasse: "agence456" },
// //   { id: 3, fullName: "Mohamed Ali", email: "mohamed@example.com", motDePasse: "user123" },
// //   { id: 4, fullName: "Sara Ben Salem", email: "sara@example.com", motDePasse: "user456" },
// // ];

// // const publications = [
// //   { id: 1, userId: 1, img: "https://example.com/images/pub1.jpg", description: "إعلان لكرسي متحرك ذكي", status: "Pending", datePublication: "2025-10-03" },
// //   { id: 2, userId: 2, img: "https://example.com/images/pub2.jpg", description: "إعلان لجهاز مساعد للتنقل", status: "Approved", datePublication: "2025-10-01" },
// //   { id: 3, userId: 3, img: "https://example.com/images/pub3.jpg", description: "إعلان جهاز تنقل جديد", status: "Approved", datePublication: "2025-10-11" },
// //   { id: 4, userId: 4, img: "https://example.com/images/pub4.jpg", description: "إعلان كرسي كهربائي", status: "Approved", datePublication: "2025-11-20" },
// // ];

// // بيانات الوكالات
// const agences = [
//   { id: 1, nom: "Tunis Mobility", email: "contact@tunis-mobility.com" },
//   { id: 2, nom: "Carthage Auto", email: "contact@carthage-auto.com" },
// ];

// // بيانات السيارات المرتبطة بالوكالات
// const voitures = [
//   {
//     id: 101,
//     agenceId: 1,
//     nom: "Peugeot Partner",
//     modele: "Partner XL",
//     status: "Indisponible",
//   },
//   {
//     id: 102,
//     agenceId: 1,
//     nom: "Renault Kangoo",
//     modele: "Kangoo Life",
//     status: "Disponible",
//   },
//   {
//     id: 103,
//     agenceId: 2,
//     nom: "Citroën Berlingo",
//     modele: "Berlingo XL",
//     status: "Disponible",
//   },
// ];










// function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   // حفظ الـ status لكل publication في state
//   const [publicationStatus, setPublicationStatus] = useState(() =>
//     publications.reduce((acc, pub) => {
//       acc[pub.id] = pub.status === "Approved" ? "Approuvé" : "Rejeté";
//       return acc;
//     }, {})
//   );

//   // Filter users by search
//   const filteredUsers = users.filter(
//     (user) =>
//       user.fullName.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase()) 
//       // user.id.toLowerCase().includes(search.toLowerCase())

//   );

//   // Generate table rows: one row per publication
//   const tableRows = [];
//   filteredUsers.forEach((user) => {
//     const userPublications = publications.filter((pub) => pub.userId === user.id);
//     userPublications.forEach((pub) => {
//       tableRows.push({
//         userId: user.id,
//         fullName: user.fullName,
//         email: user.email,
//         motDePasse: user.motDePasse,
//         datePublication: pub.datePublication,
//         status: publicationStatus[pub.id],
//         publicationId: pub.id,
//       });
//     });
//   });

//   // Handler لتغيير Status
//   const handleStatusChange = (publicationId, newStatus) => {
//     setPublicationStatus((prev) => ({
//       ...prev,
//       [publicationId]: newStatus,
//     }));
//   };

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
//               La table des fournisseurs de véhicules
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//               {["ID utilisateur", "Nom complet", "Email", "Mot de passe", "Date de publication", "Status de publication", "Actions"].map((header) => (
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
//             {tableRows.map((row) => (
//               <tr key={`${row.userId}-${row.publicationId}`}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.userId}</td>
//                 <td className="border p-2 text-xl">{row.fullName}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.email}</td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.datePublication}</td>
//                 <td className="border p-2 text-xl">
//                   <select
//                     value={row.status}
//                     onChange={(e) => handleStatusChange(row.publicationId, e.target.value)}
//                     className="border rounded p-1 bg-lightBlue-600 text-white"
//                   >
//                     <option value="Approuvé">Approuvé</option>
//                     <option value="Rejeté">Rejeté</option>
//                   </select>
//                 </td>

//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                   <span>Consulter</span>
//                   {/* <TableDropdownagencedevoiture bookingId={row.publicationId} /> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CardsPublicationadminprincipale;



// import React, { useState } from "react";

// // بيانات الوكالات مع motDePasse
// const agences = [
//   { id: 1, nom: "Tunis Mobility", email: "contact@tunis-mobility.com", motDePasse: "Tunis123" },
//   { id: 2, nom: "Carthage Auto", email: "contact@carthage-auto.com", motDePasse: "Carthage456" },
// ];

// // بيانات السيارات المرتبطة بالوكالات
// const voitures = [
//   { id: 101, agenceId: 1, nom: "Peugeot Partner", modele: "Partner XL", status: "Indisponible", datePublication: "2025-10-01" },
//   { id: 102, agenceId: 1, nom: "Renault Kangoo", modele: "Kangoo Life", status: "Disponible", datePublication: "2025-10-02" },
//   { id: 103, agenceId: 2, nom: "Citroën Berlingo", modele: "Berlingo XL", status: "Disponible", datePublication: "2025-10-03" },
// ];

// export default function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   // إنشاء الصفوف لجدول الوكلاء مع الحالة وتاريخ النشر
//   const [tableRows, setTableRows] = useState(() =>
//     voitures.map((voiture) => {
//       const agence = agences.find((a) => a.id === voiture.agenceId);
//       return {
//         userId: agence.id,
//         fullName: agence.nom,
//         email: agence.email,
//         motDePasse: agence.motDePasse,
//         datePublication: voiture.datePublication,
//         status: voiture.status,
//         nomVoiture: voiture.nom,
//         modele: voiture.modele,
//         publicationId: voiture.id,
//       };
//     })
//   );

//   // Handler لتغيير Status
//   const handleStatusChange = (publicationId, newStatus) => {
//     setTableRows((prev) =>
//       prev.map((row) =>
//         row.publicationId === publicationId ? { ...row, status: newStatus } : row
//       )
//     );
//   };

//   // Filter rows by search input (search in name or email)
//   const filteredRows = tableRows.filter(
//     (row) =>
//       row.fullName.toLowerCase().includes(search.toLowerCase()) ||
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
//               La table des fournisseurs de véhicules
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//                 "Date de publication",
//                 "Status de publication",
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
//               <tr key={`${row.userId}-${row.publicationId}`}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                   {row.userId}
//                 </td>
//                 <td className="border p-2 text-xl">{row.fullName}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                   {row.email}
//                 </td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.datePublication}</td>
//                 <td className="border p-2 text-xl">
//                   <select
//                     value={row.status}
//                     onChange={(e) =>
//                       handleStatusChange(row.publicationId, e.target.value)
//                     }
//                     className="border rounded p-1 bg-lightBlue-600 text-white"
//                   >
//                     <option value="Disponible">Disponible</option>
//                     <option value="Indisponible">Indisponible</option>
//                   </select>
//                 </td>
//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                   <select className="border rounded p-1">
//                     <option>
//                       {row.nomVoiture} - {row.modele} ({row.status})
//                     </option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }









// import React, { useState } from "react";

// // بيانات الوكالات مع motDePasse
// const agences = [
//   { id: 1, nom: "Tunis Mobility", email: "contact@tunis-mobility.com", motDePasse: "Tunis123" },
//   { id: 2, nom: "Carthage Auto", email: "contact@carthage-auto.com", motDePasse: "Carthage456" },
// ];

// // بيانات السيارات المرتبطة بالوكالات
// const voitures = [
//   {
//     id: 101,
//     agenceId: 1,
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modele: "Partner XL",
//       annee: 2022,
//       carburant: "Diesel",
//       kilometrage: 50000,
//       sieges: 3,
//       categorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       elevateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/peugeot-partner.jpg",
//       status: "Indisponible",
//             datePublication: "2025-1-8"

//     }
//   },
//   {
//     id: 102,
//     agenceId: 1,
//     carDetails: {
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modele: "Kangoo Life",
//       annee: 2023,
//       carburant: "Essence",
//       kilometrage: 30000,
//       sieges: 4,
//       categorie: "Utilitaire",
//       transmission: "Automatique",
//       description: "سيارة صغيرة وعملية",
//       rampe: false,
//       elevateur: false,
//       commandeManuelle: false,
//       guide: false,
//       espaceFauteuil: "Medium",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//       status: "Disponible",
//       datePublication: "2025-10-8"
//     }
//   },
//   {
//     id: 103,
//     agenceId: 2,
//     carDetails: {
//       nom: "Citroën Berlingo",
//       marque: "Citroën",
//       modele: "Berlingo XL",
//       annee: 2021,
//       carburant: "Diesel",
//       kilometrage: 60000,
//       sieges: 5,
//       categorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة واسعة للركاب والبضائع",
//       rampe: true,
//       elevateur: true,
//       commandeManuelle: true,
//       guide: true,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/citroen-berlingo.jpg",
//       status: "Disponible",
//             datePublication: "2025-7-18"

//     }
//   }
// ];


// export default function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");

//   // إنشاء الصفوف لجدول الوكلاء مع الحالة وتاريخ النشر
//   const [tableRows, setTableRows] = useState(() =>
//     voitures.map((voiture) => {
//       const agence = agences.find((a) => a.id === voiture.agenceId);
//       return {
//         userId: agence.id,
//         fullName: agence.nom,
//         email: agence.email,
//         motDePasse: agence.motDePasse,
//         datePublication: voiture.datePublication,
//         status: "Approuvé", // Default status for publication
//         nomVoiture: voiture.nom,
//         modele: voiture.modele,
//         publicationId: voiture.id,
//       };
//     })
//   );

//   // Handler لتغيير Status de publication (Approuvé / Rejeté)
//   const handleStatusChange = (publicationId, newStatus) => {
//     setTableRows((prev) =>
//       prev.map((row) =>
//         row.publicationId === publicationId ? { ...row, status: newStatus } : row
//       )
//     );
//   };

//   // Filter rows by search input (search in name or email)
//   const filteredRows = tableRows.filter(
//     (row) =>
//       row.fullName.toLowerCase().includes(search.toLowerCase()) ||
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
//               La table des fournisseurs de véhicules
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
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
//                 "Date de publication",
//                 "Status de publication",
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
//               <tr key={`${row.userId}-${row.publicationId}`}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                   {row.userId}
//                 </td>
//                 <td className="border p-2 text-xl">{row.fullName}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">
//                   {row.email}
//                 </td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.datePublication}</td>
//                 <td className="border p-2 text-xl">
//                   <select
//                     value={row.status}
//                     onChange={(e) =>
//                       handleStatusChange(row.publicationId, e.target.value)
//                     }
//                     className="border rounded p-1 bg-lightBlue-600 text-white"
//                   >
//                     <option value="Approuvé">Approuvé</option>
//                     <option value="Rejeté">Rejeté</option>
//                   </select>
//                 </td>
//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                   <select className="border rounded p-1">
//                     <option>
//                       {row.nomVoiture} - {row.modele}
//                     </option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




















import React, { useState } from "react";
 import TableDropdowndelespublications1 from "../Dropdowns/TableDropdowndelespublications1"

// بيانات الوكالات مع motDePasse
const agences = [
  { id: 1, nom: "Tunis Mobility", email: "contact@tunis-mobility.com", motDePasse: "Tunis123" },
  { id: 2, nom: "Carthage Auto", email: "contact@carthage-auto.com", motDePasse: "Carthage456" },
];

// بيانات السيارات المرتبطة بالوكالات
const voitures = [
  {
    id: 101,
    agenceId: 1,
    carDetails: {
      nom: "Peugeot Partner",
      marque: "Peugeot",
      modele: "Partner XL",
      annee: 2022,
      carburant: "Diesel",
      kilometrage: 50000,
      sieges: 3,
      categorie: "Utilitaire",
      transmission: "Manuelle",
      description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
      rampe: true,
      elevateur: false,
      commandeManuelle: true,
      guide: false,
      espaceFauteuil: "Large",
      support: "حزام أمان إضافي",
      image: "https://example.com/images/peugeot-partner.jpg",
      status: "Indisponible",
      datePublication: "2025-1-8"
    }
  },
  {
    id: 102,
    agenceId: 1,
    carDetails: {
      nom: "Renault Kangoo",
      marque: "Renault",
      modele: "Kangoo Life",
      annee: 2023,
      carburant: "Essence",
      kilometrage: 30000,
      sieges: 4,
      categorie: "Utilitaire",
      transmission: "Automatique",
      description: "سيارة صغيرة وعملية",
      rampe: false,
      elevateur: false,
      commandeManuelle: false,
      guide: false,
      espaceFauteuil: "Medium",
      support: "حزام أمان إضافي",
      image: "https://example.com/images/renault-kangoo.jpg",
      status: "Disponible",
      datePublication: "2025-10-8"
    }
  },
  {
    id: 103,
    agenceId: 2,
    carDetails: {
      nom: "Citroën Berlingo",
      marque: "Citroën",
      modele: "Berlingo XL",
      annee: 2021,
      carburant: "Diesel",
      kilometrage: 60000,
      sieges: 5,
      categorie: "Utilitaire",
      transmission: "Manuelle",
      description: "سيارة واسعة للركاب والبضائع",
      rampe: true,
      elevateur: true,
      commandeManuelle: true,
      guide: true,
      espaceFauteuil: "Large",
      support: "حزام أمان إضافي",
      image: "https://example.com/images/citroen-berlingo.jpg",
      status: "Disponible",
      datePublication: "2025-7-18"
    }
  }
];

export default function CardsPublicationadminprincipale({ color = "light" }) {
  const [search, setSearch] = useState("");

  // إنشاء الصفوف لجدول الوكلاء مع الحالة وتاريخ النشر
  const [tableRows, setTableRows] = useState(() =>
    voitures.map((voiture) => {
      const agence = agences.find((a) => a.id === voiture.agenceId);
      return {
        userId: agence.id,
        fullName: agence.nom,
        email: agence.email,
        motDePasse: agence.motDePasse,
        datePublication: voiture.carDetails.datePublication,
        status: "Approuvé", // Default status for publication
        carDetails: voiture.carDetails,
        publicationId: voiture.id,
      };
    })
  );

  // Handler لتغيير Status de publication (Approuvé / Rejeté)
  const handleStatusChange = (publicationId, newStatus) => {
    setTableRows((prev) =>
      prev.map((row) =>
        row.publicationId === publicationId ? { ...row, status: newStatus } : row
      )
    );
  };

  // Filter rows by search input (search in name or email)
  const filteredRows = tableRows.filter(
    (row) =>
      row.fullName.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center ">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              La table des fournisseurs de véhicules
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search here"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {[
                "ID utilisateur",
                "Nom complet",
                "Email",
                "Mot de passe",
                "Date de publication",
                "Status de publication",
                "Actions",
              ].map((header) => (
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
            {filteredRows.map((row) => (
              <tr key={`${row.userId}-${row.publicationId}`}>
                <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.userId}</td>
                <td className="border p-2 text-xl">{row.fullName}</td>
                <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.email}</td>
                <td className="border p-2 text-xl">{row.motDePasse}</td>
                <td className="border p-2 text-xl">{row.datePublication}</td>
                <td className="border p-2 text-xl">
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.publicationId, e.target.value)}
                    className="border rounded p-1 bg-lightBlue-600 text-white"
                  >
                    <option value="Approuvé">Approuvé</option>
                    <option value="Rejeté">Rejeté</option>
                  </select>
                </td>
                <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
                   <span>Consulter</span>
                    <TableDropdowndelespublications1 />
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


