import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCity,
  FaGlobeAsia,
  FaMapPin,
  FaCreditCard,
  FaArrowLeft,
  FaCarSide,
  FaCogs,
  FaGasPump,
} from "react-icons/fa";

import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";

const cars = [
  {
    id: 1,
    title: "Range Rover S64 Coupe",
    img: car1,
    price: "$250/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 5,
  },
  {
    id: 2,
    title: "Tesla Model X",
    img: car2,
    price: "$300/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 3,
    title: "BMW i8",
    img: car3,
    price: "$400/day",
    doors: 2,
    seats: 4,
    transmission: "Automatic",
    minAge: 21,
    rating: 4,
  },
  {
    id: 4,
    title: "Audi Q7",
    img: car4,
    price: "$350/day",
    doors: 4,
    seats: 7,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 5,
    title: "Mercedes GLE",
    img: car5,
    price: "$380/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 6,
    title: "Porsche Taycan",
    img: car6,
    price: "$450/day",
    doors: 4,
    seats: 4,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 7,
    title: "Lexus RX",
    img: "https://via.placeholder.com/400x250?text=Car+7",
    price: "$320/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 4,
  },
  {
    id: 8,
    title: "Jaguar F-Type",
    img: "https://via.placeholder.com/400x250?text=Car+8",
    price: "$420/day",
    doors: 2,
    seats: 2,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 9,
    title: "Ford Mustang",
    img: "https://via.placeholder.com/400x250?text=Car+9",
    price: "$300/day",
    doors: 2,
    seats: 4,
    transmission: "Manual",
    minAge: 21,
    rating: 4,
  },
  {
    id: 10,
    title: "Chevrolet Camaro",
    img: "https://via.placeholder.com/400x250?text=Car+10",
    price: "$350/day",
    doors: 2,
    seats: 4,
    transmission: "Manual",
    minAge: 21,
    rating: 4,
  },
  {
    id: 11,
    title: "Nissan GT-R",
    img: "https://via.placeholder.com/400x250?text=Car+11",
    price: "$500/day",
    doors: 2,
    seats: 2,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 12,
    title: "Honda Civic",
    img: "https://via.placeholder.com/400x250?text=Car+12",
    price: "$200/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 13,
    title: "Toyota Corolla",
    img: "https://via.placeholder.com/400x250?text=Car+13",
    price: "$220/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 14,
    title: "Kia Sportage",
    img: "https://via.placeholder.com/400x250?text=Car+14",
    price: "$230/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 15,
    title: "Hyundai Tucson",
    img: "https://via.placeholder.com/400x250?text=Car+15",
    price: "$240/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 16,
    title: "Mazda CX-5",
    img: "https://via.placeholder.com/400x250?text=Car+16",
    price: "$250/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 17,
    title: "Subaru Outback",
    img: "https://via.placeholder.com/400x250?text=Car+17",
    price: "$260/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 18,
    title: "Volkswagen Tiguan",
    img: "https://via.placeholder.com/400x250?text=Car+18",
    price: "$270/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
];

function CarBooking() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id)) || cars[0];

  const [formData, setFormData] = useState({
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const calculateDays = (from, to) => {
    if (!from || !to) return 1;
    const days = Math.ceil(
      (new Date(to) - new Date(from)) / (1000 * 60 * 60 * 24)
    );
    return Math.max(1, days);
  };

  const days = calculateDays(formData.pickupDate, formData.returnDate);
  const total = days * parseInt(car.price.replace(/\D/g, ""));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed!\nName: ${formData.name}\nTotal Price: $${total}`);
  };

  return (
    <div className="page-container ">
      <div className="page">
        {/* العمود الأيسر */}
        <div className="left" >
          <img src={car.img} alt={car.title} className="car-img" />
          {/* <h1>{car.title}</h1>
          <p className="price">
            {car.price} <span>/day</span>
          </p>

          <div className="specs">
            <div className="spec-card">
              <FaCarSide />
              <span>{car.seats} Seats</span>
            </div>
            <div className="spec-card">
              <FaGasPump />
              <span>{car.fuel || "Gas"}</span>
            </div>
            <div className="spec-card">
              <FaCogs />
              <span>{car.mileage || 15} km/l</span>
            </div>
            <div className="spec-card">
              <FaCogs />
              <span>{car.transmission}</span>
            </div>
          </div>

          <h2>About this car</h2>
          <p>{car.description || "No description provided."}</p>
          <ul className="about-list">
            <li>Free cancellation</li>
            <li>24/7 Roadside assistance</li>
            <li>Unlimited mileage</li>
            <li>Collision damage waiver</li>
          </ul> */}



           {/* <h4><i className="fas fa-info-circle mr-2 text-gray-500"></i>Détails de la voiture :</h4>
            <p>
              <i className="fas fa-tag mr-2 text-gray-500"></i>
              <b>Nom:</b> {car.nom}
            </p>
            <p>
              <i className="fas fa-industry mr-2 text-gray-500"></i>
              <b>Marque:</b> {car.marque}
            </p>
            <p>
              <i className="fas fa-cogs mr-2 text-gray-500"></i>
              <b>Modèle:</b> {car.modèle}
            </p>
            <p>
              <i className="fas fa-calendar-alt mr-2 text-gray-500"></i>
              <b>Année:</b> {car.année}
            </p>
            <p>
              <i className="fas fa-gas-pump mr-2 text-gray-500"></i>
              <b>Carburant:</b> {car.carburant}
            </p>
            <p>
              <i className="fas fa-wheelchair mr-2 text-gray-500"></i>
              <b>Rampe:</b> {car.rampe ? "Oui" : "Non"}
            </p>
            <p>
              <i className="fas fa-arrow-up mr-2 text-gray-500"></i>
              <b>Élévateur:</b> {car.élévateur ? "Oui" : "Non"}
            </p>
            <p>
              <i className="fas fa-hand-paper mr-2 text-gray-500"></i>
              <b>Commande manuelle:</b> {car.commandeManuelle ? "Oui" : "Non"}
            </p>
            <p>
              <i className="fas fa-user-check mr-2 text-gray-500"></i>
              <b>Guide:</b> {car.guide ? "Oui" : "Non"}
            </p>
            <p>
              <i className="fas fa-chair mr-2 text-gray-500"></i>
              <b>Espace fauteuil:</b> {car.espaceFauteuil}
            </p>
            <p>
              <i className="fas fa-users mr-2 text-gray-500"></i>
              <b>Sièges:</b> {car.sièges}
            </p>
              <p>
              <i className="fas fa-check-circle  mr-2 text-gray-500"></i>
              <b>disponibilté</b> {car.status}
            </p> */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
  <h4 style={{ color: "#111827" }}>
    <i className="fas fa-info-circle" style={{ color: "#6b7280", marginRight: "8px" }}></i>
    Détails de la voiture :
  </h4>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", maxWidth: "800px" }}>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-tag" style={{ color: "#6b7280" }}></i>
      <b>Nom:</b> {car.nom}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-industry" style={{ color: "#6b7280" }}></i>
      <b>Marque:</b> {car.marque}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-cogs" style={{ color: "#6b7280" }}></i>
      <b>Modèle:</b> {car.modèle}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-calendar-alt" style={{ color: "#6b7280" }}></i>
      <b>Année:</b> {car.année}
    </p>

    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-gas-pump" style={{ color: "#6b7280" }}></i>
      <b>Carburant:</b> {car.carburant}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-wheelchair" style={{ color: "#6b7280" }}></i>
      <b>Rampe:</b> {car.rampe ? "Oui" : "Non"}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-arrow-up" style={{ color: "#6b7280" }}></i>
      <b>Élévateur:</b> {car.élévateur ? "Oui" : "Non"}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-hand-paper" style={{ color: "#6b7280" }}></i>
      <b>Commande manuelle:</b> {car.commandeManuelle ? "Oui" : "Non"}
    </p>

    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-user-check" style={{ color: "#6b7280" }}></i>
      <b>Guide:</b> {car.guide ? "Oui" : "Non"}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-chair" style={{ color: "#6b7280" }}></i>
      <b>Espace fauteuil:</b> {car.espaceFauteuil}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-users" style={{ color: "#6b7280" }}></i>
      <b>Sièges:</b> {car.sièges}
    </p>
    <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-check-circle" style={{ color: "#6b7280" }}></i>
      <b>Disponibilité:</b> {car.status}
    </p>
      <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fas fa-dollar-sign" style={{ color: "#6b7280" }}></i>
        <b>Prix:</b> {car.prix}
      </p>
      <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fas fa-tags" style={{ color: "#6b7280" }}></i>
        <b>Catégorie:</b> {car.catégorie}
      </p>
   <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fas fa-road" style={{ color: "#6b7280" }}></i>
        <b>Kilométrage:</b> {car.kilométrage}
      </p>
        <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="fas fa-cogs" style={{ color: "#6b7280" }}></i>
      <b>Transmission:</b> {car.transmission}
    </p>
        <p style={{ flex: "1 1 200px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
        <i className="fas fa-file-alt" style={{ color: "#6b7280", marginTop: "4px" }}></i>
        <b>Description:</b> {car.description}
      </p>
       <p style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fas fa-tools" style={{ color: "#6b7280" }}></i>
        <b>Support:</b> {car.support}
      </p>

  </div>
</div>






        </div>

        {/* العمود الأيمن */}
        <div className="right">
  <Link to="/" className="back-btn">
    <FaArrowLeft /> Retour
  </Link>
  <h2>Réservez votre trajet</h2>
  <form onSubmit={handleSubmit} className="form">
    <div className="grid-2">
      <div className="input-group">
        <label>Date de prise en charge</label>
        <div className="input-wrap">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <label>Date de retour</label>
        <div className="input-wrap">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>

    <div className="input-group">
      <label>Lieu de prise en charge</label>
      <div className="input-wrap">
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="grid-2">
      <div className="input-group">
        <label>Nom complet</label>
        <div className="input-wrap">
          <FaUser className="icon" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <label>Email</label>
        <div className="input-wrap">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>

    <div className="input-group">
      <label>Téléphone</label>
      <div className="input-wrap">
        <FaPhone className="icon" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <button type="submit" className="submit-btn bg-lightBlue-500">
      <FaCreditCard /> Confirmer la réservation
    </button>
  </form>
</div>

      </div>
      {/* //#111827 */}
      <style>{`
        body { background: white !important; margin: 0; padding: 0; }
        .page-container { max-width: 1300px; margin: 0 auto; padding: 20px; }
        .page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #ffffff; 
  color: #333; /* darker text for better contrast */
  padding: 20px;
  border-radius: 10px; /* smooth corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* subtle shadow */
}
        .left { flex: 2; min-width: 300px; }
        .right { flex: 1; min-width: 300px; background: white; padding: 20px; border-radius: 12px; align-self: flex-start;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) }

        .car-img { width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
        .price { font-size: 20px; font-weight: 700; margin: 8px 0; }
        .price span { font-size: 14px; color: #9ca3af; }
        // .specs { display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0; }
        // .spec-card { background: #1f2937;width:100px; padding: 30px 20px; border-radius: 10px; display: flex; align-items: center; gap: 12px; font-size: 18px; color: #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.2); flex: 1 1 200px; max-width: 300px; }
       .specs {
  display: flex;
  gap: 10px;
  flex-wrap: nowrap; /* منع الانتقال لسطر جديد */
  justify-content: space-between; /* توزيع متساوي بين الكروت */
  margin: 15px 0;
}

.spec-card {
  background: #1f2937;
  flex: 0 0 190px; /* العرض ثابت لكل كرت */
  padding: 20px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column; /* لو تريد الأيقونة فوق النص */
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  color: #e5e7eb;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  text-align: center;
}



        .spec-card span { font-size: 20px; padding: 8px 16px; display: flex; align-items: center; justify-content: center; }
        .spec-card svg { font-size: 28px; }

        .about-list { list-style: none; padding: 0; margin: 10px 0; }
        .about-list li { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 14px; color: #d1d5db; }
        .about-list li::before { content: "✔"; color: #10b981; font-weight: bold; }

        .form { display: flex; flex-direction: column; gap: 12px; }
        .grid-2 { display: flex; gap: 10px; flex-wrap: wrap; }
        .grid-3 { display: flex; gap: 10px; flex-wrap: wrap; }
        .input-group { flex: 1; display: flex; flex-direction: column; }
        .input-group label { font-size: 17px; color: black; margin-bottom: 4px;font-weight: bold; }
       .input-wrap {
  display: flex;
  align-items: center;
  background: #f3f4f6; /* light gray to contrast with white parent */
  border: 1px solid #d1d5db; /* softer border */
  border-radius: 8px;
  padding: 6px 10px;
}

.input-wrap input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #111827; /* dark text for readability */
  padding: 6px;
}
        .price-box { background: #111827; padding: 12px; border-radius: 8px; margin: 10px 0; }
        .price-box div { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .price-box .total { font-weight: bold; font-size: 16px; }
        .submit-btn { width: 100%;  color: #fff; padding: 12px; font-size: 16px; font-weight: 600; border-radius: 10px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: 0.3s; }
        .submit-btn:hover { background: #25375eff; transform: translateY(-2px); }
        .back-btn { display: inline-flex; align-items: center; gap: 6px; background: #374151; padding: 6px 10px; border-radius: 8px; color: #f9fafb; text-decoration: none; margin-bottom: 12px; font-size: 14px; }
      `}</style>
    </div>
  );
}

export default CarBooking;
