import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { gettousReservations } from "../../service/apiGestionreservations";
import { getVehicules } from "../../service/apiGestionvehicules";
import TableDropdownagencedevoiture from "components/Dropdowns/TableDropdownagencedevoiture.js";

export default function TableReservation({ color }) {
  const [Reservations, setReservations] = useState([]);
  const [Vehicules, setVehicules] = useState([]);

  // 🔹 مؤقتًا نكتب الـ agenceId يدويًا
  const agenceId = "68f6aa0e912121c2e413dd49";

  // 🟢 جلب المركبات التابعة للوكالة
  const getVehicule = async () => {
    try {
      const response = await getVehicules();
      const filteredVehicules = response.data.filter(
        (v) => v.idagencedevehicule === agenceId
      );
      setVehicules(filteredVehicules);
      console.log("🚗 Vehicules of this agence:", filteredVehicules);
    } catch (error) {
      console.log("Error while calling getVehicules API ", error);
    }
  };

  // 🟢 جلب الحجوزات وتصفية الخاصة بالوكالة فقط
  const getReservations = async () => {
    try {
      const response = await gettousReservations();
      const allReservations = response.data.reservations;

      // ✅ الفلترة: فقط الحجوزات التي تحتوي على مركبة من هذه الوكالة
      const filteredReservations = allReservations.filter(
        (res) =>
          res.idVehicule &&
          Vehicules.some((v) => v._id === res.idVehicule._id)
      );

      setReservations(filteredReservations);
      console.log("📅 Filtered Reservations:", filteredReservations);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API getReservations:", error);
    }
  };

  // 🟢 عند تحميل الصفحة: جلب المركبات أولاً
  useEffect(() => {
    getVehicule();
  }, []);

  // 🟢 بعد ما يتم تحميل المركبات، نجيب الحجوزات
  useEffect(() => {
    if (Vehicules.length > 0) {
      getReservations();
    }
  }, [Vehicules]);

  // 🟢 تغيير حالة الحجز (محلي فقط)
  const handleStatusChange = (id, newStatus) => {
    setReservations((prev) =>
      prev.map((r) => (r._id === id ? { ...r, status: newStatus } : r))
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
        <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
          <div className="flex flex-wrap items-center ">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                La table de Réservations:
              </h3>
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="search here"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-xl shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* جدول الحجوزات */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {[
                  "date Réservation",
                  "Voiture",
                  "Date de réservation",
                  "Statut",
                  "Prix total",
                  "Actions",
                ].map((title, index) => (
                  <th
                    key={index}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Reservations.length > 0 ? (
                Reservations.map((res) => (
                  <tr key={res._id}>
                    <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
                      {new Date(res.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border p-2 text-xl">
                      {res.idVehicule?.nom || "—"}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border p-2">
                      {new Date(res.dateDebut).toLocaleDateString()} -{" "}
                      {new Date(res.dateFin).toLocaleDateString()}
                    </td>

                    <td className="border p-2 text-xl">
                      {/* {res.status || "en attente"}
                      <select
                        value={res.status || "en attente"}
                        onChange={(e) =>
                          handleStatusChange(res._id, e.target.value)
                        }
                        className="border rounded p-1 ml-2 bg-lightBlue-600"
                        style={{ paddingLeft: "15px" }}
                      >
                        <option value="venir">À venir</option>
                        <option value="termine">Terminé</option>
                        <option value="annule">Annulé</option>
                      </select> */}
                    </td>

                    <td className="border p-2 text-xl">
                      {res.totalPrix ? `${res.totalPrix} DT` : "—"}
                    </td>

                    <td className="border-t-0 text-xl px-6 align-middle text-center border p-2">
                      <span>Consulter</span>
                      <TableDropdownagencedevoiture bookingId={res._id} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-4 text-lg text-blueGray-500"
                  >
                    Aucune réservation trouvée pour cette agence.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

TableReservation.defaultProps = {
  color: "light",
};

TableReservation.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
