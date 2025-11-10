

import React, { useEffect, useState } from "react";
import TableDropdowndelespublications1 from "../Dropdowns/TableDropdowndelespublications1";
import { getVehiculesandagence ,updateVehiculeStatusbyadmin} from "../../service/apiGestionvehicules";
import { QRCodeCanvas } from "qrcode.react";

export default function CardsPublicationadminprincipale({ color = "light" }) {
  const [search, setSearch] = useState("");
  const [carandagence, setcarandagence] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  const [selectedCar, setSelectedCar] = useState(null);
  const [showQr, setShowQr] = useState(false);

  const getCars = async () => {
    try {
      const resp = await getVehiculesandagence();
      setcarandagence(resp.data);
 console.log("cars",resp.data)
      const rows = resp.data.map((car) => {
        const agence = car.idagencedevehicule || {};
        return {
          publicationId: car._id,
          image: agence.image || car.image || "",
          fullName: agence.nom || car.nom || "—",
          address: agence.address || agence.adresse || "—",
          email: agence.email || "—",
          phones: agence.telephone || agence.phone || agence.phones || "—",
          datePublication: car.datePublication || car.createdAt || "—",
          status: car.statut || "En attente",
          carDetails: car,
        };
      });

      setTableRows(rows);
    } catch (error) {
      console.log("Error while calling getVehiculesandagence API ", error);
    }
  };

  useEffect(() => {
    getCars();
    const interval = setInterval(() => getCars(), 5000);
    return () => clearInterval(interval);
  }, []);

const handleStatusChange = async (publicationId, newStatus) => {
  try {
    const adminId = "68f66cc315232bd0cc4b943b"; // مؤقتاً

    // نرسل request للباك أولاً
    const res = await updateVehiculeStatusbyadmin(publicationId, newStatus, adminId);

    if (res.status === 200) {
      // نحدث الـ state بعد نجاح التحديث
      setTableRows((prev) =>
        prev.map((r) =>
          r.publicationId === publicationId ? { ...r, status: newStatus } : r
        )
      );

      alert(res.data.message || "✅ Statut mis à jour avec succès !");
    } else {
      alert("❌ Erreur lors de la mise à jour du statut !");
    }
  } catch (error) {
    console.error("❌ Erreur lors de la mise à jour du statut:", error);
    alert("❌ Erreur lors de la mise à jour du statut !");
  }
};


    // const handleStatusChange = async (id, newStatus) => {
    //   try {
    //     await updateVehiculeStatus(id, newStatus);
    //     setVehicules((prevVehicules) =>
    //       prevVehicules.map((vehicule) =>
    //         vehicule._id === id
    //           ? { ...vehicule, statusVehicule: newStatus }
    //           : vehicule
    //       )
    //     );
    //     alert("✅ Statut mis à jour avec succès !");
    //   } catch (error) {
    //     console.error("Erreur de mise à jour du statut:", error);
    //     alert("❌ Une erreur s'est produite lors de la mise à jour.");
    //   }
    // };

  const filteredRows = tableRows.filter(
    (row) =>
      row.fullName.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      (row.address && row.address.toLowerCase().includes(search.toLowerCase()))
  );

  const handleGenerateQr = (car) => {
    setSelectedCar(car);
    setShowQr(true);
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              La table des fournisseurs de véhicules :
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search here"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
               <span
                className="text-lg font-bold text-white"
                style={{ marginLeft: "680px" }}
              >
                <i className="fas fa-calendar-check text-green-400 text-xl mr-1"></i>
                totale de Vehicules :{tableRows.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {[
                "NOM",
                // "address",
                "Email",
                // "phones",
                "Date de publication",
                "Status de publication",
                "Consulter",
              ].map((header) => (
                <th
                  key={header}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
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
            {/* border   text-xl whitespace-nowrap p-3 text-center flex items-center */}
            {filteredRows.map((row) => (
              <tr key={row.publicationId}>
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {/* <img
                    src={`http://localhost:5011${row.image}`}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="voiture"
                  /> */}
                  <span className="ml-2 font-bold text-xl ">
                    {row.fullName} {row.prenom}
                  </span>
                </td>

                {/* <td className="border px-6 py-3 text-xl  font-bold text-center">
                  {row.address}
                </td> */}
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.email}
                </td>
                {/* <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.phones}
                </td> */}
                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {new Date(row.datePublication).toLocaleDateString()}

                </td>

                <td className="border px-6 py-3 text-xl font-bold text-center">
                  {row.status}
                  <select
                    value={row.status}
                    onChange={(e) =>
                      handleStatusChange(row.publicationId, e.target.value)
                    }
                    className="border rounded p-1 bg-lightBlue-600 text-white ml-2"
                  >
                   <option value="En attente">En attente</option> 
  <option value="Approuvé">Approuvé</option>
  <option value="Rejeté">Rejeté</option>
                    {/* <option value="En attente">En attente</option> */}
                  </select>
                </td>

                <td className="border px-6 py-3 text-xl text-center">
                  {/* Old dropdown */}
                  {/* <TableDropdowndelespublications1
                    carid={row.publicationId}
                    carDetails={row.carDetails}
                  /> */}
                  {/* New Scanner QR Button */}
                  <button
                    className="bg-lightBlue-500 text-white px-2 py-1 rounded ml-2 shadow hover:shadow-md"
                    onClick={() => handleGenerateQr(row.carDetails)}
                  >
                    Scanner QR
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QR Modal */}
      {showQr && selectedCar && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg w-full overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">
              QR Code pour {selectedCar.nom}
            </h2>
<div className="flex items-center justify-center my-4">

            <QRCodeCanvas
              value={JSON.stringify(selectedCar)}
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"H"}
              includeMargin={true}
            />
</div>
            <div className="mt-4 text-left">
              <h3 className="font-bold mb-2">Détails du véhicule:</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <strong>Nom:</strong> {selectedCar.nom}
                </li>
                <li>
                  <strong>Marque:</strong> {selectedCar.marque}
                </li>
                <li>
                  <strong>Modèle:</strong> {selectedCar.modele}
                </li>
                <li>
                  <strong>Année:</strong> {selectedCar.annee}
                </li>
                <li>
                  <strong>Carburant:</strong> {selectedCar.carburant}
                </li>
                <li>
                  <strong>Kilométrage:</strong> {selectedCar.kilometrage}
                </li>
                <li>
                  <strong>Sièges:</strong> {selectedCar.sieges}
                </li>
                <li>
                  <strong>Rampe:</strong> {selectedCar.rampe ? "Oui" : "Non"}
                </li>
                <li>
                  <strong>Élévateur:</strong>{" "}
                  {selectedCar.elevateur ? "Oui" : "Non"}
                </li>
                <li>
                  <strong>Commande manuelle:</strong>{" "}
                  {selectedCar.commandeManuelle ? "Oui" : "Non"}
                </li>
                <li>
                  <strong>Guide:</strong> {selectedCar.guide ? "Oui" : "Non"}
                </li>
                <li>
                  <strong>Espace fauteuil:</strong> {selectedCar.espaceFauteuil}
                </li>
                <li>
                  <strong>Support:</strong> {selectedCar.support}
                </li>
                <li>
                  <strong>Status:</strong> {selectedCar.status}
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowQr(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
