
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
  const [searchTerm, setSearchTerm] = useState("");

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
      {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
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
      </div> */}

      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center ">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              La table de Vehicules:
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                  placeholder="chercher ici par  nom ou sièges"

                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-xl shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
              />
              {/* Bloc droit : total des véhicules */}

              <span
                className="text-lg font-bold text-white"
                style={{ marginLeft: "680px" }}
              >
                <i className="fas fa-calendar-check text-green-400 text-xl mr-1"></i>
                totale de Vehicules :{Vehicules.length}
              </span>
            </div>
            {/* Bloc droit : total des véhicules */}
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className={headerClass(color)}>Image / Nom</th>
              <th className={headerClass(color)}> Siéges</th>
              <th className={headerClass(color)}>Catégorie</th>
              <th className={headerClass(color)}>Statut</th>
              <th className={headerClass(color)}>décision</th>
              <th className={headerClass(color)}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Vehicules.filter(
              (v) =>
                v.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.sieges.toString().includes(searchTerm)
            ).map((v) => (
              <tr key={v._id}>
                <td className="border  p-2  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3 text-left flex items-center">
                  <img
                    src={`http://localhost:5011${v.image}`}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="voiture"
                  />
                  <span className="ml-2 font-bold text-xl ">{v.nom} </span>
                </td>
                <td className="border p-2 font-bold text-center text-xl">
                  {v.sieges}
                </td>
                <td className="border p-2  font-bold text-center text-xl">
                  {v.carburant}{" "}
                </td>
                <td className="border p-2 font-bold text-center text-xl">
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
                <td className="border p-2 text-center  font-bold text-xl">
                  {" "}
                  <span
                    className={
                      v.statut.trim() === "Approuvé"
                        ? "text-emerald-500 font-bold"
                        : v.statut.trim() === "Rejeté"
                        ? "text-red-500 font-bold"
                        : "text-yellow-500 font-bold"
                    }
                  >
                    {v.statut}
                  </span>
                </td>
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
