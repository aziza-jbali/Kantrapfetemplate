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













import React, { useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdownagencedevoiture from "components/Dropdowns/TableDropdownagencedevoiture.js";
// const bookings = [
//   {
//     id: 1,
//     car: "Peugeot Partner",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     status: "venue",
//     customer: {
//       name: "محمد علي",
//       phone: "12345678",
//       email: "mohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
    
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 50000,
//       sièges: 5,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "واسع",
//       support: "حزام أمان إضافي",
//     },
//   },{
//     id: 2,
//     car: "Renault Kangoo",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     status: "venue",
//     customer: {
//       name: "   سمد علي",
//       phone: "14345678",
//       email: "moohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
    
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 50000,
//       sièges: 5,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "واسع",
//       support: "حزام أمان إضافي",
//     },
//   },
// ];


const bookings = [
  {
    id: "1",
    car: "Peugeot Partner",
    price: "120 DT/يوم",
    startDate: "2025-10-02",
    endDate: "2025-10-05",
    datedebooking:"2025-09-04",
    status: "venue",
    customer: {
      id:"1",
      name: "محمد علي",
      phone: "12345678",
      email: "mohamed@example.com",
      address: "تونس، شارع الحبيب بورقيبة",
    },
    carDetails: {
    id:"1",
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
    },
  },
  {
    id: "2",
    car: "Renault Kangoo",
    price: "120 DT/يوم",
    startDate: "2025-10-02",
    endDate: "2025-10-05",
    datedebooking:"2025-09-10",

    status: "venue",
    customer: {
      id:"2",
      name: "سمد علي",
      phone: "14345678",
      email: "moohamed@example.com",
      address: "تونس، شارع الحبيب بورقيبة",
    },
    carDetails: {
        id:"2",
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
    },
  },
];


export default function CardTable({ color }) {
  const [booking, setBooking] = useState(bookings);

  const handleStatusChange = (id, newStatus) => {
    setBooking((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
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
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  id voiture
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Marque / Modèle
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Catégorie
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Statut
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Anné
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                    Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {}

              {booking.map((booking) => (
                <tr key={booking.id}>
                  <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
                    {booking.carDetails.id}
                  </td>
                  <td>{booking.carDetails.nom}</td>
                  <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
                    {booking.carDetails.catégorie}
                  </td>
                  {/* <td>{booking.status}</td> */}
                  <td className="border p-2">
                    {booking.carDetails.status}
                    <select 
                      value={booking.status}
                      onChange={(e) =>
                        handleStatusChange(booking.id, e.target.value)
                      }
                      className="border rounded p-1 ml-2 "
                    >
                      <option value="venir">À venir</option>
                      <option value="Termine">Terminé</option>
                      <option value="Annule">Annulé</option>
                    </select>
                  </td>

                  <td>{booking.carDetails.année}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdownagencedevoiture bookingId={booking.id} />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
