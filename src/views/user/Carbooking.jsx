import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { addreservation } from "../../service/apiGestionreservations";
import { addClient } from "../../service/apiUsers";
import { QRCodeCanvas } from "qrcode.react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";

function CarBooking() {
  const location = useLocation();
  const car = location.state?.car || {};
  console.log("🚗 Car reçue:", car);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    phones: "",
    address: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
  });
  // zdto twa
  const [showPopup, setShowPopup] = useState(false);
  const [qrValue, setQrValue] = useState("");

  const calculateDays = (from, to) => {
    if (!from || !to) return 1;
    const days = Math.ceil(
      (new Date(to) - new Date(from)) / (1000 * 60 * 60 * 24)
    );
    return Math.max(1, days);
  };

  const days = calculateDays(formData.pickupDate, formData.returnDate);
  const total = days * (car.prixParJour || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // إضافة العميل إذا لم يكن موجود
      const clientData = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        password: formData.password,
        phones: formData.phones,
        address: formData.address,
      };

      const clientResponse = await addClient(clientData);
      console.log("Client Response:", clientResponse);

      const idClient = clientResponse.newUser._id;
      console.log(idClient);
      // إنشاء الحجز بعد الحصول على idClient
      const reservationData = {
        idClient,
        idVehicule: car._id,
        dateDebut: formData.pickupDate,
        dateFin: formData.returnDate,
      };

      await addreservation(reservationData);

      alert(`✅ Réservation confirmée !\nTotal : ${total} DT`);
      const qrInfo = `
✅ Réservation confirmée !
👤 Client : ${formData.nom} ${formData.prenom}
📧 Email : ${formData.email}
📞 Téléphone : ${formData.phones}
🏠 Adresse : ${formData.address}
📍 Lieu de prise en charge : ${formData.pickupLocation}

🚗 Véhicule réservé :
   • Nom : ${car.nom}
   • Marque : ${car.marque}
   • Catégorie : ${car.categorie}
   • Carburant : ${car.carburant}
   • Transmission : ${car.transmission}
   • Prix par jour : ${car.prixParJour} DT

📅 Du ${formData.pickupDate} au ${formData.returnDate}
💰 Total à payer : ${total} DT
`.trim();
      //  `
      // 🚗 Réservation confirmée !
      // 👤 Client: ${formData.nom} ${formData.prenom}
      // 📧 Email: ${formData.email}
      // 📞 Téléphone: ${formData.phones}
      // 📍 Lieu: ${formData.pickupLocation}
      // 🚘 Véhicule: ${car.nom} (${car.marque})
      // 📅 Du ${formData.pickupDate} au ${formData.returnDate}
      // 💰 Total: ${total} DT
      // `.replace(/\n/g, "\\n");
      // `Réservation confirmée pour ${formData.nom} ${formData.prenom}\nVoiture: ${car.nom}\nTotal: ${total} DT`;
      setQrValue(qrInfo);
      setShowPopup(true);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("❌ Une erreur est survenue. Veuillez vérifier les informations.");
    }
  };

  return (
    <div className="page-container">
      <div className="page">
        {/* LEFT SIDE */}
        <div className="left">
          <img
            src={`http://localhost:5011${car.image}`}
            alt={car.nom || "voiture"}
            className="car-img"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h4 style={{ color: "#111827" }}>
              <i
                className="fas fa-info-circle"
                style={{ color: "#6b7280", marginRight: "8px" }}
              ></i>
              Détails de la voiture :
            </h4>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                maxWidth: "800px",
              }}
            >
              <InfoItem icon="fa-tag" label="Nom" value={car.nom} />
              <InfoItem icon="fa-industry" label="Marque" value={car.marque} />
              <InfoItem icon="fa-cogs" label="Modèle" value={car.modele} />
              <InfoItem
                icon="fa-calendar-alt"
                label="Année"
                value={car.annee}
              />
              <InfoItem
                icon="fa-gas-pump"
                label="Carburant"
                value={car.carburant}
              />
              <InfoItem
                icon="fa-tags"
                label="Catégorie"
                value={car.categorie}
              />
              <InfoItem
                icon="fa-road"
                label="Kilométrage"
                value={car.kilometrage + " km"}
              />
              <InfoItem
                icon="fa-wheelchair"
                label="Rampe"
                value={car.rampe ? "Oui" : "Non"}
              />
              <InfoItem
                icon="fa-arrow-up"
                label="Élévateur"
                value={car.elevator ? "Oui" : "Non"}
              />
              <InfoItem
                icon="fa-hand-paper"
                label="Commande manuelle"
                value={car.commandeManuelle ? "Oui" : "Non"}
              />
              <InfoItem
                icon="fa-user-check"
                label="Guide"
                value={car.guide ? "Oui" : "Non"}
              />
              <InfoItem
                icon="fa-chair"
                label="Espace fauteuil"
                value={car.espaceFauteuil}
              />
              <InfoItem icon="fa-users" label="Sièges" value={car.sieges} />
              <InfoItem
                icon="fa-check-circle"
                label="Disponibilité"
                value={car.statusVehicule}
              />
              <InfoItem
                icon="fa-dollar-sign"
                label="Prix par jour"
                value={`${car.prixParJour} DT`}
              />
              <InfoItem
                icon="fa-file-alt"
                label="Description"
                value={car.description}
              />
              <InfoItem icon="fa-tools" label="Support" value={car.support} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="right">
          <Link to="/" className="back-btn">
            <FaArrowLeft /> Retour
          </Link>
          <h2>Réservez votre trajet</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="grid-2">
              <InputGroup
                label="Date de prise en charge"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                icon={<FaCalendarAlt />}
              />
              <InputGroup
                label="Date de retour"
                name="returnDate"
                type="date"
                value={formData.returnDate}
                onChange={handleChange}
                icon={<FaCalendarAlt />}
              />
            </div>

            <InputGroup
              label="Lieu de prise en charge"
              name="pickupLocation"
              type="text"
              value={formData.pickupLocation}
              onChange={handleChange}
              icon={<FaMapMarkerAlt />}
            />

            <div className="grid-2">
              <InputGroup
                label="Nom complet"
                name="nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
                icon={<FaUser />}
              />
              <InputGroup
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                icon={<FaEnvelope />}
              />
            </div>

            <InputGroup
              label="Téléphone"
              name="phones"
              type="tel"
              value={formData.phones}
              onChange={handleChange}
              icon={<FaPhone />}
            />
            <InputGroup
              label="Adresse"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              icon={<FaMapMarkerAlt />}
            />
            <InputGroup
              label="Mot de passe"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              icon={<FaLock />}
            />

            <button type="submit" className="submit-btn bg-lightBlue-500">
              <FaCreditCard /> Confirmer la réservation
            </button>

            <div className="price-box">
              <div>
                <span>Nombre de jours :</span>
                <span>{days}</span>
              </div>
              <div className="total">Total : {total} DT</div>
            </div>
          </form>
        </div>
      </div>
      {/* {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>✅ Réservation confirmée !</h3>
            <p>On va vous contacter, merci 🙏</p>
            <QRCodeCanvas value={qrValue} size={180} />
            <button onClick={() => setShowPopup(false)} className="close-btn">
              Fermer
            </button>
          </div>
        </div>
      )} */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>✅ Réservation confirmée !</h3>
            <p>On va vous contacter, merci 🙏</p>
            <QRCodeCanvas id="reservationQR" value={qrValue} size={180} />
            <div style={{ marginTop: "15px" }}>
              <button
                onClick={() => {
                  const canvas = document.getElementById("reservationQR");
                  const pngUrl = canvas
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
                  const downloadLink = document.createElement("a");
                  downloadLink.href = pngUrl;
                  downloadLink.download = `reservation_${formData.nom}.png`;
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                }}
                className="close-btn"
                style={{ background: "#10b981", marginRight: "10px" }}
              >
                Télécharger le QR 📥
              </button>

              <button onClick={() => setShowPopup(false)} className="close-btn">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        body { background: linear-gradient(90deg, #3ba5f63a, #2564eb86) !important; margin: 0; padding: 0; }
        .page-container { max-width: 1300px; margin: 0 auto; padding: 20px; }
        .page {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          background: #ffffff; 
          color: #333;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .left { flex: 2; min-width: 300px; }
        .right { flex: 1; min-width: 300px; background: white; padding: 20px; border-radius: 12px; align-self: flex-start;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) }
        .car-img { width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
        .form { display: flex; flex-direction: column; gap: 12px; }
        .grid-2 { display: flex; gap: 10px; flex-wrap: wrap; }
        .input-group { flex: 1; display: flex; flex-direction: column; }
        .input-group label { font-size: 17px; color: black; margin-bottom: 4px;font-weight: bold; }
        .input-wrap {
          display: flex;
          align-items: center;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 6px 10px;
        }
        .input-wrap input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #111827;
          padding: 6px;
        }
        .submit-btn { width: 100%;  color: #fff; padding: 12px; font-size: 16px; font-weight: 600; border-radius: 10px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: 0.3s; }
        .submit-btn:hover { background: #25375eff; transform: translateY(-2px); }
        .back-btn { display: inline-flex; align-items: center; gap: 6px; background: #374151; padding: 6px 10px; border-radius: 8px; color: #f9fafb; text-decoration: none; margin-bottom: 12px; font-size: 14px; }
        .price-box { background: #111827; color: white; padding: 12px; border-radius: 8px; margin-top: 10px; }
        .price-box .total { font-weight: bold; font-size: 16px; }
      
      .popup-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 999;
}
.popup {
  background: white; padding: 30px 40px; border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  animation: fadeIn 0.3s ease;
}
.popup h3 { color: #2563eb; font-size: 22px; margin-bottom: 10px; }
.popup p { color: #111; margin-bottom: 15px; font-size: 16px; }
.close-btn {
  background: #2563eb; color: white; border: none;
  padding: 10px 20px; border-radius: 8px; cursor: pointer;
  font-weight: bold; transition: 0.3s;
}
.close-btn:hover { background: #1e3a8a; }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
`}</style>
    </div>
  );
}

/* SMALL REUSABLE COMPONENTS */
function InfoItem({ icon, label, value }) {
  return (
    <p
      style={{
        flex: "1 1 200px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <i className={`fas ${icon}`} style={{ color: "#6b7280" }}></i>
      <b>{label}:</b> {value || "—"}
    </p>
  );
}

function InputGroup({ label, name, type, value, onChange, icon }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <div className="input-wrap">
        {icon}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default CarBooking;
