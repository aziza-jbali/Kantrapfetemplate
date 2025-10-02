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

import React, { useState } from "react";
import PropTypes from "prop-types";
import TableDropdownmesvoiture from "components/Dropdowns/TableDropdownmesvoiture.js";
import AddCarForm from "views/Agencedevoitureadmin/AddCarPage.jsx"; // رابط الفورم

const bookingsData = [
  {
    id: "1",
    car: "Peugeot Partner",
    price: "120 DT/يوم",
    startDate: "2025-10-02",
    endDate: "2025-10-05",
    datedebooking: "2025-09-04",
    status: "venue",
    customer: {
      id: "1",
      name: "محمد علي",
      phone: "12345678",
      email: "mohamed@example.com",
      address: "تونس، شارع الحبيب بورقيبة",
    },
    carDetails: {
      id: "1",
      nom: "Peugeot Partner",
      marque: "Peugeot",
      modèle: "Partner XL",
      année: 2022,
      carburant: "Diesel",
      kilométrage: 50000,
      sièges: 3,
      catégorie: "Utilitaire",
      transmission: "Manuelle",
      description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
      rampe: true,
      élévateur: false,
      commandeManuelle: true,
      guide: false,
      espaceFauteuil: "Large",
      support: "حزام أمان إضافي",
      image: "https://example.com/images/peugeot-partner.jpg",
       status: "Indisponible"
    },
  },
  {
    id: "2",
    car: "Renault Kangoo",
    price: "120 DT/يوم",
    startDate: "2025-10-02",
    endDate: "2025-10-05",
    datedebooking: "2025-09-10",
    status: "venue",
    customer: {
      id: "2",
      name: "سمد علي",
      phone: "14345678",
      email: "moohamed@example.com",
      address: "تونس، شارع الحبيب بورقيبة",
    },
    carDetails: {
      id: "2",
      nom: "Renault Kangoo",
      marque: "Renault",
      modèle: "Kangoo Life",
      année: 2021,
      carburant: "Essence",
      kilométrage: 60000,
      sièges: 5,
      catégorie: "Utilitaire",
      transmission: "Manuelle",
      description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
      rampe: false,
      élévateur: true,
      commandeManuelle: false,
      guide: true,
      espaceFauteuil: "Moyen",
      support: "حزام أمان إضافي",
      image: "https://example.com/images/renault-kangoo.jpg",
       status: "Disponible"
    },
  },
];

export default function CardTable({ color }) {
  const [booking, setBooking] = useState(bookingsData);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAction = (action, b) => {
    if (action === "edit") {
      setEditingBooking(b);
      setShowEditModal(true);
    } else if (action === "view") {
      console.log("view", b.id);
    } else if (action === "delete") {
      if (window.confirm("Voulez-vous supprimer cette voiture ?")) {
        setBooking((prev) => prev.filter((x) => x.id !== b.id));
      }
    }
  };

  // const handleStatusChange = (id, newStatus) => {
  //   setBooking((prev) =>
  //     prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
  //   );
  // };
  const handleStatusChange = (id, newStatus) => {
  setBooking((prev) =>
    prev.map((b) =>
      b.id === id
        ? { ...b, carDetails: { ...b.carDetails, status: newStatus } } // ⚡ هنا
        : b
    )
  );
};


  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                La table de véhicules :
              </h3>
              <div class="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="search here"
                  class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className={headerClass(color)}>ID Voiture</th>
                <th className={headerClass(color)}>Marque / Modèle</th>
                <th className={headerClass(color)}>Catégorie</th>
                <th className={headerClass(color)}>Statut</th>
                <th className={headerClass(color)}>Année</th>
                <th className={headerClass(color)}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((b) => (
                <tr key={b.id}>
                  <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
                    {b.carDetails.id}
                  </td>
                  <td className="border p-2 text-xl ">{b.carDetails.nom}</td>
                  <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
                    {b.carDetails.catégorie}
                  </td>
                  <td className="border p-2 text-xl">
                    
                    {b.carDetails.status}
                    <select
                      value={b.carDetails.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      className="border rounded p-1 ml-2 bg-lightBlue-600"
                    >
                      <option value="Disponible">Disponible</option>
                      <option value="Indisponible">Indisponible</option>
                    </select>
                  </td>
                  <td className="border p-2">{b.carDetails.année}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-center border p-2">
                    <span>Supprimer/Modifier</span>
                    <TableDropdownmesvoiture
                      booking={b}
                      onAction={(action) => handleAction(action, b)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal / Edit Form */}
      {showEditModal && editingBooking && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: "black",
              borderRadius: "15px",
              padding: "20px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setShowEditModal(false);
                setEditingBooking(null);
              }}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            {/* Render your existing AddCarForm */}
            <AddCarForm
              initialData={editingBooking.carDetails}
              isModal={true}
              onClose={() => {
                setShowEditModal(false);
                setEditingBooking(null);
              }}
              onSubmit={(updatedData) => {
                setBooking((prev) =>
                  prev.map((b) =>
                    b.id === editingBooking.id
                      ? { ...b, carDetails: { ...updatedData } }
                      : b
                  )
                );
                setShowEditModal(false);
                setEditingBooking(null);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

// Helper for table header classes
function headerClass(color) {
  return (
    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
    (color === "light"
      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
      : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
