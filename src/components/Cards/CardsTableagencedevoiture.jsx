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
                  id reservation
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Voiture
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Date de réservation
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
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Prix total
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/bootstrap.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Argon Design System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/angular.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $1,800 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/sketch.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $3,150 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "73%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/react.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $4,400 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i> on
                  schedule
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                        <div
                          style={{ width: "90%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/vue.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,200 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr> */}

              {booking.map((booking) => (
                <tr key={booking.id}>
                  <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
                    {booking.id}
                  </td>
                  <td>{booking.carDetails.nom}</td>
                  <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4">
                    {booking.startDate} - {booking.endDate}
                  </td>
                  {/* <td>{booking.status}</td> */}
                  <td className="border p-2">
                    {booking.status}
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

                  <td>{booking.price}</td>
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
