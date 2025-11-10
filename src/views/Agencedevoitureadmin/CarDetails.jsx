import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import video from "../../assets/videos/choco.mp4";
import { getVehicules } from "../../service/apiGestionvehicules";

export default function CarDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicules = async () => {
      try {
        const response = await getVehicules();
        const allVehicules = response.data;
        const selectedCar = allVehicules.find((v) => v._id === id);
        setCar(selectedCar || null);
      } catch (error) {
        console.error("Erreur lors du chargement des véhicules :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicules();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-white">
        ⏳ Chargement...
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-500">
        ❌ Aucune voiture trouvée pour cet ID.
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* فيديو الخلفية */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* خلفية شفافة */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          zIndex: -1,
        }}
      ></div>

      {/* كارد التفاصيل */}
      <div
        className="rounded-lg shadow-lg p-6"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "600px", // عرض أصغر للكارد
          background: "rgba(255, 255, 255, 0.99)",
          backdropFilter: "blur(6px)",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        {/* صورة السيارة في الأعلى */}
        {car.image && (
          <img
            src={
              car.image.startsWith("/images")
                ? `http://localhost:5011${car.image}`
                : car.image
            }
            alt={car.nom}
            style={{
              width: "250px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
        )}

        {/* بيانات السيارة */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "10px",
            width: "100%",
          }}
        >
          <h1 className="text-xl font-bold text-gray-800 mb-2 text-center w-full">
            <i className="fas fa-car text-blue-500 mr-2"></i>
            Détails de la voiture
          </h1>

      <div className="grid grid-cols-2 gap-3 w-full text-xl" style={{paddingLeft:"18px"}}>
  <p><i className="fas fa-tag mr-2 text-gray-500"></i><b>Nom :</b> {car.nom}</p>
  <p><i className="fas fa-users mr-2 text-gray-500"></i><b>Sièges :</b> {car.sieges}</p>
  <p><i className="fas fa-chair mr-2 text-gray-500"></i><b>Espace fauteuil :</b> {car.espaceFauteuil}</p>
  <p><i className="fas fa-shield-alt mr-2 text-gray-500"></i><b>Support :</b> {car.support}</p>
  {/* <p><i className="fas fa-industry mr-2 text-gray-500"></i><b>Marque :</b> {car.marque}</p> */}
  <p><i className="fas fa-cogs mr-2 text-gray-500"></i><b>Modèle :</b> {car.modele}</p>
  <p><i className="fas fa-calendar-alt mr-2 text-gray-500"></i><b>Année :</b> {car.annee}</p>
  <p><i className="fas fa-gas-pump mr-2 text-gray-500"></i><b>Carburant :</b> {car.carburant}</p>
  <p><i className="fas fa-car-side mr-2 text-gray-500"></i><b>Catégorie :</b> {car.categorie}</p>
  <p><i className="fas fa-wheelchair mr-2 text-gray-500"></i><b>Rampe :</b> {car.rampe ? "Oui" : "Non"}</p>
  <p><i className="fas fa-arrow-up mr-2 text-gray-500"></i><b>Élévateur :</b> {car.elevator ? "Oui" : "Non"}</p>
  <p><i className="fas fa-user-tie mr-2 text-gray-500"></i><b>Avec Chauffeur :</b> {car.avecChauffeur ? "Oui" : "Non"}</p>
  <p><i className="fas fa-hand-paper mr-2 text-gray-500"></i><b>Commande manuelle :</b> {car.commandeManuelle ? "Oui" : "Non"}</p>
  <p><i className="fas fa-user-check mr-2 text-gray-500"></i><b>Guide :</b> {car.guide ? "Oui" : "Non"}</p>
  <p><i className="fas fa-check-circle mr-2 text-gray-500"></i><b>Disponibilité :</b> {car.statusVehicule}</p>
  <p><i className="fas fa-calendar-day mr-2 text-gray-500"></i><b>Date d'ajout :</b> {new Date(car.dateAjout || car.createdAt).toLocaleDateString()}</p>
  <p className="col-span-2"><i className="fas fa-info-circle mr-2 text-gray-500"></i><b>Description :</b> {car.description}</p>
  <p><i className="fas fa-road mr-2 text-gray-500"></i><b>Kilométrage :</b> {car.kilometrage} km</p>
  <p><i className="fas fa-cogs mr-2 text-gray-500"></i><b>Transmission :</b> {car.transmission || "Non spécifiée"}</p>
    <p>  <i className="fas fa-money-bill-wave mr-2 text-gray-500"></i>
<b>Prix/jour :</b> {car.prixParJour} DT</p>


</div>

        </div>
      </div>
    </div>
  );
}
