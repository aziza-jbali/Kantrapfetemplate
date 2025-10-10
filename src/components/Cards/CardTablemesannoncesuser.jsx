import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCarForm from "views/Agencedevoitureadmin/AddCarPage.jsx"; // رابط الفورم

// بيانات المستخدمين
const utilisateurs = [
  { id: 1, nom: "Sara Ben Ali", email: "sara@example.com", motDePasse: "Sara123" },
  { id: 2, nom: "Mohamed Ali", email: "mohamed@example.com", motDePasse: "Mohamed456" },
];

// بيانات المنشورات (annonces)
const publications = [
  {
    id: 1,
    userId: 1,
    img: "https://example.com/images/auto-ecole-handicap.jpg",
    description: "إعلان من جمعية الأمل بالتعاون مع مدرسة السياقة...",
    status: "En attente",
    datePublication: "2025-10-01",
  },
  {
    id: 2,
    userId: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Disability_training_workshop_3_(10692436714).jpg",
    description: "برنامج تدريبي جديد لمساعدة ذوي الإعاقة على استخدام السيارات الذكية.",
    status: "Approuvé",
    datePublication: "2025-10-03",
  },
  {
    id: 3,
    userId: 2,
    img: "https://example.com/images/accessible-car.jpg",
    description: "إعلان عن سيارة مجهزة لذوي الاحتياجات الخاصة متاحة للإيجار.",
    status: "Rejeté",
    datePublication: "2025-09-28",
  },
];

export default function CardTable({ color }) {
  const [publicationList, setPublicationList] = useState(publications);
  const [showPopup, setShowPopup] = useState(false);
  const [newImg, setNewImg] = useState(null);
  const [newDescription, setNewDescription] = useState("");

  const handleAddAnnonce = () => {
    if (!newImg || !newDescription) return alert("Veuillez remplir tous les champs");
    const newPub = {
      id: publicationList.length + 1,
      userId: 1,
      img: URL.createObjectURL(newImg),
      description: newDescription,
      status: "En attente",
      datePublication: new Date().toISOString().split("T")[0],
    };
    setPublicationList([...publicationList, newPub]);
    setNewImg(null);
    setNewDescription("");
    setShowPopup(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous supprimer cette annonce ?")) {
      setPublicationList((prev) => prev.filter((p) => p.id !== id));
    }
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
                La table de mes annonces :
              </h3>
              <div className="mb-3 pt-0 flex items-center space-x-3" style={{ gap: "30px" }}>
                <input
                  type="text"
                  placeholder="search here"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                />
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowPopup(true)}
                >
                  Ajouter un annonce
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className={headerClass(color)}>Image</th>
                <th className={headerClass(color)}>Description</th>
                <th className={headerClass(color)}>Date de publication</th>
                <th className={headerClass(color)}>Statut</th>
                <th className={headerClass(color)}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {publicationList.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2 text-center">
                    <img src={p.img} alt="Annonce" className="w-24 h-16 object-cover rounded" />
                  </td>
                  <td className="border p-2 text-xl max-w-xs break-words text-center">{p.description}</td>
                  <td className="border p-2 text-xl text-center">{p.datePublication}</td>
                  <td className="border p-2 text-xl text-center">
                    <span
                      className={
                        p.status.trim() === "Approuvé"
                          ? "text-green-400 font-bold"
                          : p.status.trim() === "Rejeté"
                          ? "text-red-500 font-bold"
                          : "text-yellow-500 font-bold"
                      }
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="border p-2 text-center space-x-2">
                    <button
                      className="bg-lightBlue-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg"
                      type="button"
                    >
                      Modifier
                    </button>
                    <button
                      className="bg-red-500 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg"
                      type="button"
                      onClick={() => handleDelete(p.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Ajouter Annonce */}
      {showPopup && (
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
              background: "white",
              borderRadius: "10px",
              padding: "30px",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h2 className="text-xl font-bold mb-4">Nouvelle annonce</h2>

            <input
              type="file"
              accept="image/*"
              className="mb-4 w-full"
              onChange={(e) => setNewImg(e.target.files[0])}
            />

            <textarea
              placeholder="Description"
              className="mb-4 w-full border rounded px-3 py-2"
              rows={4}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />

            <button
              onClick={handleAddAnnonce}
              className="bg-lightBlue-500 text-white px-6 py-2 rounded shadow hover:bg-lightBlue-600 mr-2"
            >
              Ajouter
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Helper for table header
function headerClass(color) {
  return (
    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
    (color === "light"
      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
      : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
  );
}

CardTable.defaultProps = { color: "light" };
CardTable.propTypes = { color: PropTypes.oneOf(["light", "dark"]) };
