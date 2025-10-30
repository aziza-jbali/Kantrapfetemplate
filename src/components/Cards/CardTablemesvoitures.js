// import React from "react";
// import PropTypes from "prop-types";

// // components
// import TableDropdown from "components/Dropdowns/TableDropdown.js";

// // مثال بيانات ثابتة مؤقتة (يمكنك تبديلها ببيانات حقيقية)
// const exampleData = [
//   {
//     id: "1",
//     car: "Peugeot Partner",
//     price: "120 DT/يوم",
//     status: "available",
//     category: "Utilitaire",
//     year: 2022,
//   },
//   {
//     id: "2",
//     car: "Renault Kangoo",
//     price: "100 DT/يوم",
//     status: "rented",
//     category: "Utilitaire",
//     year: 2021,
//   },
// ];

// export default function CardTable({ color, data = exampleData }) {
//   return (
//     <div
//       className={
//         "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//         (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
//       }
//     >
//       {/* Header */}
//       <div className="rounded-t mb-0 px-4 py-3 border-0">
//         <div className="flex flex-wrap items-center">
//           <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//             <h3
//               className={
//                 "font-semibold text-lg " +
//                 (color === "light" ? "text-blueGray-700" : "text-white")
//               }
//             >
//               Table des voitures
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr>
//               <th className={headerClass(color)}>ID Véhicule</th>
//               <th className={headerClass(color)}>Marque / Modèle</th>
//               <th className={headerClass(color)}>Status</th>
//               <th className={headerClass(color)}>Catégorie</th>
//               <th className={headerClass(color)}>Année</th>
//               <th className={headerClass(color)}></th>
//             </tr>
//           </thead>

//           <tbody>
//             {data && data.length > 0 ? (
//               data.map((car) => (
//                 <tr key={car.id}>
//                   <td className="border-t-0 px-6 py-4">{car.id}</td>
//                   <td className="border-t-0 px-6 py-4">{car.car}</td>
//                   <td className="border-t-0 px-6 py-4">{car.status}</td>
//                   <td className="border-t-0 px-6 py-4">{car.category}</td>
//                   <td className="border-t-0 px-6 py-4">{car.year}</td>
//                   <td className="border-t-0 px-6 py-4 text-right">
//                     <TableDropdown />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   Aucune donnée disponible
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // Class helper
// function headerClass(color) {
//   return (
//     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//     (color === "light"
//       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
//   );
// }

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
//   data: PropTypes.array,
// };

//

// src/components/Cards/CardTablemesvoitures.js
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import TableDropdownmesvoiture from "components/Dropdowns/TableDropdownmesvoiture.js";
// import AddCarForm from "views/Agencedevoitureadmin/AddCarPage.jsx"; // رابط الفورم

// const bookingsData = [
//   {
//     id: "1",
//     car: "Peugeot Partner",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     datedebooking: "2025-09-04",
//     status: "venue",
//     customer: {
//       id: "1",
//       name: "محمد علي",
//       phone: "12345678",
//       email: "mohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       id: "1",
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner XL",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 50000,
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
//     },
//   },
//   {
//     id: "2",
//     car: "Renault Kangoo",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     datedebooking: "2025-09-10",
//     status: "venue",
//     customer: {
//       id: "2",
//       name: "سمد علي",
//       phone: "14345678",
//       email: "moohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       id: "2",
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modèle: "Kangoo Life",
//       année: 2021,
//       carburant: "Essence",
//       kilométrage: 60000,
//       sièges: 5,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: false,
//       élévateur: true,
//       commandeManuelle: false,
//       guide: true,
//       espaceFauteuil: "Moyen",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//     },
//   },
// ];

// export default function CardTable({ color }) {
//   const [booking, setBooking] = useState(bookingsData);
//   const [editingBooking, setEditingBooking] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const handleAction = (action, b) => {
//     if (action === "edit") {
//       setEditingBooking(b);
//       setShowEditModal(true);
//     } else if (action === "view") {
//       console.log("view", b.id);
//     } else if (action === "delete") {
//       if (window.confirm("Voulez-vous supprimer cette voiture ?")) {
//         setBooking((prev) => prev.filter((x) => x.id !== b.id));
//       }
//     }
//   };

//   const handleStatusChange = (id, newStatus) => {
//     setBooking((prev) =>
//       prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
//     );
//   };

//   return (
//     <>
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-blueGray-700" : "text-white")
//                 }
//               >
//                 Card Tables
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="block w-full overflow-x-auto">
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th className={headerClass(color)}>ID Voiture</th>
//                 <th className={headerClass(color)}>Marque / Modèle</th>
//                 <th className={headerClass(color)}>Catégorie</th>
//                 <th className={headerClass(color)}>Statut</th>
//                 <th className={headerClass(color)}>Année</th>
//                 <th className={headerClass(color)}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {booking.map((b) => (
//                 <tr key={b.id}>
//                   <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
//                     {b.carDetails.id}
//                   </td>
//                   <td>{b.carDetails.nom}</td>
//                   <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
//                     {b.carDetails.catégorie}
//                   </td>
//                   <td className="border p-2">
//                     {b.carDetails.status}
//                     <select
//                       value={b.status}
//                       onChange={(e) => handleStatusChange(b.id, e.target.value)}
//                       className="border rounded p-1 ml-2"
//                     >
//                       <option value="venir">À venir</option>
//                       <option value="Termine">Terminé</option>
//                       <option value="Annule">Annulé</option>
//                     </select>
//                   </td>
//                   <td>{b.carDetails.année}</td>
//                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//                     <TableDropdownmesvoiture
//                       booking={b}
//                       onAction={(action) => handleAction(action, b)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal / Edit Form */}
//       {showEditModal && editingBooking && (
//         <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center  z-[9999]">
//           <div className="modal-content bg-white w-full max-w-3xl p-6 rounded-lg relative">
//             <button
//               className="absolute top-2 right-2 text-xl font-bold"
//               onClick={() => {
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//             >
//               &times;
//             </button>
//             {/*
//             <AddCarForm
//               initialData={editingBooking.carDetails}
//               onSubmit={(updatedData) => {
//                 setBooking((prev) =>
//                   prev.map((b) =>
//                     b.id === editingBooking.id
//                       ? { ...b, carDetails: { ...updatedData } }
//                       : b
//                   )
//                 );
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//             /> */}
//             <AddCarForm
//               initialData={editingBooking.carDetails}
//               isModal={true} // يعلم الفورم أنه داخل Modal
//               onClose={() => {
//                 // يغلق الـ Modal عند الضغط على زر × أو بعد الحفظ
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//               onSubmit={(updatedData) => {
//                 setBooking((prev) =>
//                   prev.map((b) =>
//                     b.id === editingBooking.id
//                       ? { ...b, carDetails: { ...updatedData } }
//                       : b
//                   )
//                 );
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Helper for table header classes
// function headerClass(color) {
//   return (
//     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//     (color === "light"
//       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
//   );
// }

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };

// import React, { useState,useEffect } from "react";
// import PropTypes from "prop-types";
// import TableDropdownmesvoiture from "components/Dropdowns/TableDropdownmesvoiture.js";
// import AddCarForm from "views/Agencedevoitureadmin/AddCarPage.jsx"; // رابط الفورم
// import {getVehicules} from "../../service/apiGestionvehicules"

// const bookingsData = [
//   {
//     id: "1",
//     car: "Peugeot Partner",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     datedebooking: "2025-09-04",
//     status: "venue",
//     customer: {
//       id: "1",
//       name: "محمد علي",
//       phone: "12345678",
//       email: "mohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       id: "1",
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner XL",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 50000,
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
//        status: "Indisponible"
//     },
//   },
//   {
//     id: "2",
//     car: "Renault Kangoo",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     datedebooking: "2025-09-10",
//     status: "venue",
//     customer: {
//       id: "2",
//       name: "سمد علي",
//       phone: "14345678",
//       email: "moohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       id: "2",
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modèle: "Kangoo Life",
//       année: 2021,
//       carburant: "Essence",
//       kilométrage: 60000,
//       sièges: 5,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: false,
//       élévateur: true,
//       commandeManuelle: false,
//       guide: true,
//       espaceFauteuil: "Moyen",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//        status: "Disponible"
//     },
//   },
// ];

// export default function CardTable({ color }) {
//   const [booking, setBooking] = useState(bookingsData);
//   const [editingBooking, setEditingBooking] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const[Vehicules,setVehicules]=useState([])
// // hadhi mta3 el frontend getVehicule lazem tkon mo5talfa 3la hadha getVehicules mta3 el backend bach matsirich confision
//   const getVehicule = async () => {
//     try {
//       await getVehicules()
//         .then((response) => {
//           setVehicules(response.data);
//           console.log("Vehicules", response.data);
//         })
//         .catch((error) => {
//           console.log("Error while calling getUsers API ", error);
//         });
//     } catch (error) {
//       console.log("Error while calling getVehicules API ", error);
//     }
//   };
//   useEffect(()=>{
//     console.log("hello")
//     getVehicule()
//   },[])
//   const handleAction = (action, b) => {
//     if (action === "edit") {
//       setEditingBooking(b);
//       setShowEditModal(true);
//     } else if (action === "view") {
//       console.log("view", b.id);
//     } else if (action === "delete") {
//       if (window.confirm("Voulez-vous supprimer cette voiture ?")) {
//         setBooking((prev) => prev.filter((x) => x.id !== b.id));
//       }
//     }
//   };

//   // const handleStatusChange = (id, newStatus) => {
//   //   setBooking((prev) =>
//   //     prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
//   //   );
//   // };
//   const handleStatusChange = (id, newStatus) => {
//   setBooking((prev) =>
//     prev.map((b) =>
//       b.id === id
//         ? { ...b, carDetails: { ...b.carDetails, status: newStatus } } // ⚡ هنا
//         : b
//     )
//   );
// };

//   return (
//     <>
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-blueGray-700" : "text-white")
//                 }
//               >
//                 La table de véhicules :
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
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th className={headerClass(color)}>Image</th>
//                 <th className={headerClass(color)}>Marque / Modèle</th>
//                 <th className={headerClass(color)}>Catégorie</th>
//                 <th className={headerClass(color)}>Statut</th>
//                 <th className={headerClass(color)}>Année</th>
//                 <th className={headerClass(color)}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {booking.map((b) => (
//                 <tr key={b.id}>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2 ">
//                      <img
//                     // src={require("assets/img/bootstrap.jpg").default}
//                   src={`http://localhost:5000/images${Vehicules.image}`}

//                     className="h-12 w-12 bg-white rounded-full border"
//                     alt="..."
//                   ></img>{" "}
//                   </td>
//                   <td className="border p-2 text-xl  text-center ">{b.carDetails.nom}</td>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2 text-center">
//                     {b.carDetails.catégorie}
//                   </td>
//                   <td className="border p-2 text-xl">

//                     {b.carDetails.status}
//                     <select
//                       value={b.carDetails.status}
//                       onChange={(e) => handleStatusChange(b.id, e.target.value)}
//                       className="border rounded p-1 ml-2 bg-lightBlue-600 text-center"
//                     >
//                       <option value="Disponible">Disponible</option>
//                       <option value="Indisponible">Indisponible</option>
//                     </select>
//                   </td>
//                   <td className="border p-2 text-center ">{b.carDetails.année}</td>
//                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-center border p-2">
//                     <span>Supprimer/Modifier</span>
//                     <TableDropdownmesvoiture
//                       booking={b}
//                       onAction={(action) => handleAction(action, b)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal / Edit Form */}
//       {showEditModal && editingBooking && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//             padding: "20px",
//             overflowY: "auto",
//           }}
//         >
//           <div
//             style={{
//               background: "black",
//               borderRadius: "15px",
//               padding: "20px",
//               maxWidth: "900px",
//               width: "100%",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               boxShadow: "0 0 20px rgba(0,0,0,0.5)",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={() => {
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 fontSize: "24px",
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               &times;
//             </button>

//             {/* Render your existing AddCarForm */}
//             <AddCarForm
//               initialData={editingBooking.carDetails}
//               isModal={true}
//               onClose={() => {
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//               onSubmit={(updatedData) => {
//                 setBooking((prev) =>
//                   prev.map((b) =>
//                     b.id === editingBooking.id
//                       ? { ...b, carDetails: { ...updatedData } }
//                       : b
//                   )
//                 );
//                 setShowEditModal(false);
//                 setEditingBooking(null);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Helper for table header classes
// function headerClass(color) {
//   return (
//     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//     (color === "light"
//       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//   );
// }

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import TableDropdownmesvoiture from "components/Dropdowns/TableDropdownmesvoiture.js";
// import AddCarForm from "views/Agencedevoitureadmin/AddCarPage.jsx";
// import {
//   getVehicules,
//   deletevehiculeById,
// } from "../../service/apiGestionvehicules";
// import { useHistory } from "react-router-dom";

// export default function CardTable({ color }) {
//   const [Vehicules, setVehicules] = useState([]);

//   // ⚡ هنا تحط الـ ID متاع الوكالة (بصفة مؤقتة أو تجيبه من الـtoken)
//   const agenceId = "68f6aa0e912121c2e413dd49";
//   // getVehicule hadhi tmathel envolope
//   const getVehicule = async () => {
//     try {
//       const response = await getVehicules();
//       // ✅ نجيب فقط سيارات الوكالة الحالية
//       const filteredVehicules = response.data.filter(
//         (v) => v.idagencedevehicule === agenceId
//       );
//       setVehicules(filteredVehicules);
//       console.log("Vehicules filtrés:", filteredVehicules);
//     } catch (error) {
//       console.log("Error while calling getVehicules API ", error);
//     }
//   };

//   // useEffect(() => {
//   //   getVehicule();
//   // }, []);
//   // lhna njmo kol 5 second nzido vehicule
//   useEffect(() => {
//     // استدعاء أولي لجلب السيارات عند تحميل المكون
//     getVehicule();

//     // إنشاء interval لتحديث السيارات كل 5 ثواني
//     const interval = setInterval(() => {
//       getVehicule();
//     }, 5000); // 5000ms = 5 ثواني

//     // تنظيف interval عند إزالة المكون من DOM
//     return () => clearInterval(interval);
//   }, []);

//   // response هذا المتغير يمثل الرد الذي ترسله الـ API بعد نجاح الحذف. if this true kima {succes:true}
//   // const deletevehicule = async (id) => {
//   //   try {
//   //     await deletevehiculeById(id)
//   //       .then((response) => {
//   //             getVehicule();
//   //         console.log("vehicule supprimé");
//   //       })
//   //       .catch((error) => {
//   //         console.log("Error while calling deleteUserById API ", error);
//   //       });
//   //   } catch (error) {
//   //     console.log("Error while calling getVehicule API ", error);
//   //   }
//   // };
//   const deletevehicule = async (id) => {
//     try {
//       await deletevehiculeById(id);
//       getVehicule();
//       console.log("vehicule supprimé");
//     } catch (error) {
//       console.log("Erreur lors de la suppression", error);
//     }
//   };

//   const handleAction = (action, v) => {
//     if (action === "edit") {
//       console.log("edit", v._id);
//     } else if (action === "view") {
//       console.log("view", v._id);
//     } else if (action === "delete") {
//       if (window.confirm("Voulez-vous supprimer cette voiture ?")) {
//         setVehicules((prev) => prev.filter((x) => x._id !== v._id));
//       }
//     }
//   };
//   const history = useHistory();
// // لازم الأقواس () لأن useHistory هي hook (دالة) ترجّع object فيه push, replace, إلخ.
//   return (
//     <>
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-blueGray-700" : "text-white")
//                 }
//               >
//                 La table de véhicules :
//               </h3>
//               <div className="mb-3 pt-0">
//                 <input
//                   type="text"
//                   placeholder="search here"
//                   className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="block w-full overflow-x-auto">
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th className={headerClass(color)}>Image</th>
//                 <th className={headerClass(color)}>Marque / Modèle</th>
//                 <th className={headerClass(color)}>Catégorie</th>
//                 <th className={headerClass(color)}>Statut</th>
//                 <th className={headerClass(color)}>Année</th>
//                 <th className={headerClass(color)}>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {Vehicules.map((v) => (
//                 <tr key={v._id}>
//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
//                     <img
//                       // src={`http://localhost:5011/images/${v.image}`}
//                       src={`http://localhost:5011${v.image}`}
//                       className="h-12 w-12 bg-white rounded-full border"
//                       alt="voiture"
//                     />
//                   </td>

//                   <td className="border p-2 text-xl text-center">
//                     {v.nom} / {v.modele}
//                   </td>

//                   <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2 text-center">
//                     {v.carburant}
//                   </td>

//                   <td className="border p-2 text-xl text-center">
//                     {v.statusVehicule}
//                   </td>

//                   <td className="border p-2 text-center">{v.annee}</td>

//                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-center border p-2">
//                     <button
//                       className="bg-lightBlue-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg"
//                       type="button"
//                       onClick={() => history.push("/AddCarPage")}
//                     >
//                       Modifier
//                     </button>
//                     <button
//                       className="bg-red-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg"
//                       type="button"
//                       onClick={() => deletevehicule(v._id)}
//                     >
//                       Supprimer
//                     </button>
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

// // Helper for table header classes
// function headerClass(color) {
//   return (
//     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//     (color === "light"
//       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//   );
// }

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { getVehicules, deletevehiculeById, updateVehiculeWithImg } from "../../service/apiGestionvehicules";

// export default function CardTable({ color }) {
//   const [Vehicules, setVehicules] = useState([]);
//   const [editingVehicule, setEditingVehicule] = useState(null); // السيارة اللي باش نعدلها
//   const [formData, setFormData] = useState({});
//   const agenceId = "68f6aa0e912121c2e413dd49";

//   const getVehicule = async () => {
//     try {
//       const response = await getVehicules();
//       const filteredVehicules = response.data.filter(
//         (v) => v.idagencedevehicule === agenceId
//       );
//       setVehicules(filteredVehicules);
//     } catch (error) {
//       console.log("Error while calling getVehicules API ", error);
//     }
//   };

//   useEffect(() => {
//     getVehicule();
//     const interval = setInterval(() => getVehicule(), 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const deletevehicule = async (id) => {
//     try {
//       await deletevehiculeById(id);
//       getVehicule();
//     } catch (error) {
//       console.log("Erreur lors de la suppression", error);
//     }
//   };

//   const openEditPopup = (v) => {
//     setEditingVehicule(v);
//     setFormData({ ...v, file: null }); // نحضر الفورم بالبيانات الحالية
//   };

//   const closePopup = () => {
//     setEditingVehicule(null);
//     setFormData({});
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "file") {
//       if (formData.image) URL.revokeObjectURL(formData.image);
//       setFormData({
//         ...formData,
//         image: URL.createObjectURL(files[0]),
//         file: files[0],
//       });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       for (const key in formData) {
//         if (key === "file" && formData.file) data.append("image", formData.file);
//         else if (key !== "image" && key !== "file") data.append(key, formData[key]);
//       }
//       await updateVehiculeWithImg(editingVehicule._id, data); // نرسل التحديث للـ backend
//       getVehicule();
//       closePopup();
//       alert("🚗 Voiture modifiée avec succès !");
//     } catch (error) {
//       console.log("Erreur lors de la modification", error);
//     }
//   };

//   return (
//     <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")}>
//       <div className="rounded-t mb-0 px-4 py-3 border-0">
//         <h3 className={"font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white")}>
//           La table de véhicules :
//         </h3>
//       </div>

//       <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr>
//               <th className={headerClass(color)}>Image</th>
//               <th className={headerClass(color)}>Nom / Modèle</th>
//               <th className={headerClass(color)}>Catégorie</th>
//               <th className={headerClass(color)}>Statut</th>
//               <th className={headerClass(color)}>Année</th>
//               <th className={headerClass(color)}>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Vehicules.map((v) => (
//               <tr key={v._id}>
//                 <td className="border p-2 text-center">
//                   <img src={`http://localhost:5011${v.image}`} className="h-12 w-12 bg-white rounded-full border" alt="voiture"/>
//                 </td>
//                 <td className="border p-2 text-center">{v.nom} / {v.modele}</td>
//                 <td className="border p-2 text-center">{v.carburant}</td>
//                 <td className="border p-2 text-center">{v.statusVehicule}</td>
//                 <td className="border p-2 text-center">{v.annee}</td>
//                 <td className="border p-2 text-center">
//                   <button className="bg-lightBlue-500 text-white font-bold px-4 py-2 rounded mr-2" onClick={() => openEditPopup(v)}>Modifier</button>
//                   <button className="bg-red-500 text-white font-bold px-4 py-2 rounded" onClick={() => deletevehicule(v._id)}>Supprimer</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popup Modal */}
//       {editingVehicule && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-gray-900 p-6 rounded-lg w-11/12 max-w-3xl relative">
//             <button className="absolute top-2 right-2 text-white text-lg font-bold" onClick={closePopup}>×</button>
//             <h2 className="text-center text-xl text-white mb-4">Modifier la voiture</h2>
//             <form className="grid grid-cols-2 gap-4 text-white" onSubmit={handleSubmit}>
//               <div>
//                 <label>Nom</label>
//                 <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"/>
//               </div>
//               <div>
//                 <label>Modèle</label>
//                 <input type="text" name="modele" value={formData.modele} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"/>
//               </div>
//               <div>
//                 <label>Année</label>
//                 <input type="number" name="annee" value={formData.annee} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"/>
//               </div>
//               <div>
//                 <label>Catégorie</label>
//                 <input type="text" name="categorie" value={formData.categorie} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"/>
//               </div>
//               <div className="col-span-2">
//                 <label>Description</label>
//                 <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"></textarea>
//               </div>
//               <div className="col-span-2">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange}/>
//                 {formData.image && <img src={formData.image} className="w-full mt-2 h-40 object-cover rounded"/>}
//               </div>
//               <div className="col-span-2 text-center mt-4">
//                 <button type="submit" className="bg-green-500 px-6 py-2 rounded">Enregistrer</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function headerClass(color) {
//   return "px-6 py-3 text-xs uppercase font-semibold text-center border border-solid " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700");
// }

// CardTable.defaultProps = { color: "light" };
// CardTable.propTypes = { color: PropTypes.oneOf(["light", "dark"]) };

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getVehicules,
  deletevehiculeById,
  updateVehiculeWithImg,
  updateVehiculeStatus,
} from "../../service/apiGestionvehicules";

export default function CardTable({ color }) {
  const [Vehicules, setVehicules] = useState([]);
  const [editingVehicule, setEditingVehicule] = useState(null); // السيارة اللي باش نعدلها
  const [formData, setFormData] = useState({});
  const agenceId = "68f6aa0e912121c2e413dd49";

  const getVehicule = async () => {
    try {
      const response = await getVehicules();
      const filteredVehicules = response.data.filter(
        (v) => v.idagencedevehicule === agenceId
      );
      setVehicules(filteredVehicules);
    } catch (error) {
      console.log("Error while calling getVehicules API ", error);
    }
  };

  useEffect(() => {
    getVehicule();
    const interval = setInterval(() => getVehicule(), 5000);
    return () => clearInterval(interval);
  }, []);

  const deletevehicule = async (id) => {
    if (!window.confirm("Voulez-vous supprimer cette voiture ?")) return;
    try {
      await deletevehiculeById(id);
      getVehicule();
    } catch (error) {
      console.log("Erreur lors de la suppression", error);
    }
  };

  const openEditPopup = (v) => {
    setEditingVehicule(v);
    setFormData({ ...v, file: null }); // pre-fill الفورم
  };

  const closePopup = () => {
    setEditingVehicule(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      if (formData.image) URL.revokeObjectURL(formData.image);
      setFormData({
        ...formData,
        image: URL.createObjectURL(files[0]),
        file: files[0],
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      // for (const key in formData) {
      //   if (key === "file" && formData.file) data.append("image", formData.file);
      //   else if (key !== "image" && key !== "file") data.append(key, formData[key]);
      // }
      for (const key in formData) {
        if (key === "file" && formData.file) {
          data.append("image", formData.file);
        } else if (
          key !== "image" &&
          key !== "file" &&
          key !== "reservations"
        ) {
          data.append(key, formData[key]);
        }
      }
      await updateVehiculeWithImg(data, editingVehicule._id);
      getVehicule();
      closePopup();
      alert("🚗 Voiture modifiée avec succès !");
    } catch (error) {
      console.log("Erreur lors de la modification", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateVehiculeStatus(id, newStatus);
      setVehicules((prevVehicules) =>
        prevVehicules.map((vehicule) =>
          vehicule._id === id
            ? { ...vehicule, statusVehicule: newStatus }
            : vehicule
        )
      );
      alert("✅ Statut mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur de mise à jour du statut:", error);
      alert("❌ Une erreur s'est produite lors de la mise à jour.");
    }
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <h3
          className={
            "font-semibold text-xl " +
            (color === "light" ? "text-blueGray-700" : "text-white")
          }
        >
          La table de véhicules :
        </h3>
        <div className="mt-3">
          <input
            type="text"
            placeholder="search here"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
          />
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className={headerClass(color)}>Image</th>
              <th className={headerClass(color)}>Nom / Modèle</th>
              <th className={headerClass(color)}>Catégorie</th>
              <th className={headerClass(color)}>Statut</th>
              <th className={headerClass(color)}>Année</th>
              <th className={headerClass(color)}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Vehicules.map((v) => (
              <tr key={v._id}>
                <td className="border p-3 text-center">
                  <img
                    src={`http://localhost:5011${v.image}`}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="voiture"
                  />
                </td>
                <td className="border p-2 text-center text-xl">
                  {v.nom} / {v.modele}
                </td>
                <td className="border p-2 text-center text-xl">
                  {v.carburant}{" "}
                </td>
                <td className="border p-2 text-center text-xl">
                  {v.statusVehicule}
                  {
                    <select
                      value={v.statusVehicule}
                      onChange={(e) =>
                        handleStatusChange(v._id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-xl bg-lightBlue-500 ml-2"
                    >
                      <option value="disponible">disponible</option>
                      <option value="indisponible">indisponible</option>
                    </select>
                  }
                </td>
                <td className="border p-2 text-center text-xl">{v.annee}</td>
                <td className="border p-2 text-center">
                  <button
                    className="bg-lightBlue-500 text-white font-bold px-4 py-2 rounded mr-2"
                    onClick={() => openEditPopup(v)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold px-4 py-2 rounded"
                    onClick={() => deletevehicule(v._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      {/* Popup Modifier Vehicule */}
      {/* Popup Modifier Vehicule */}
      {editingVehicule && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "black",
              borderRadius: "10px",
              padding: "30px",
              width: "500px",
              maxHeight: "90vh",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Modifier la voiture
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom || ""}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  color: "grey",
                }}
              />

              <label>Modèle</label>
              <input
                type="text"
                name="modele"
                value={formData.modele || ""}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  color: "grey",
                }}
              />

              <label>Année</label>
              <input
                type="number"
                name="annee"
                value={formData.annee || ""}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  color: "grey",
                }}
              />

              <label>Catégorie</label>
              <input
                type="text"
                name="categorie"
                value={formData.categorie || ""}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  color: "grey",
                }}
              />

              <label>Description</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                rows={4}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  resize: "none",
                  color: "grey",
                }}
              />

              {/* Image preview */}
              <div
                style={{
                  position: "relative",
                  border: "2px dashed #6b7280",
                  borderRadius: "12px",
                  backgroundColor: "#f3f4f6",
                  minHeight: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
                {formData.image ? (
                  <>
                    <img
                      src={
                        formData.image.startsWith("http")
                          ? formData.image
                          : `http://localhost:5011${formData.image}`
                      }
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, image: null, file: null })
                      }
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "rgba(255,0,0,0.7)",
                        border: "none",
                        color: "white",
                        padding: "4px 8px",
                        cursor: "pointer",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }}
                    >
                      Supprimer
                    </button>
                  </>
                ) : (
                  <p>Glisser-déposer ou cliquer pour télécharger</p>
                )}
              </div>

              {/* أزرار Enregistrer و Fermer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "12px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Fermer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function headerClass(color) {
  return (
    "px-6 py-3 text-xl uppercase font-semibold text-center border border-solid " +
    (color === "light"
      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
      : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
  );
}

CardTable.defaultProps = { color: "light" };
CardTable.propTypes = { color: PropTypes.oneOf(["light", "dark"]) };
