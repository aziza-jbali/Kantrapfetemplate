import React from "react";
import { useLocation } from "react-router-dom";

export default function CarDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  // بيانات الحجز مع إضافة image
//   const bookings = [
//     {
//       id: "1",
//       carDetails: {
//         nom: "Peugeot Partner",
//         marque: "Peugeot",
//         modèle: "Partner XL",
//         année: 2022,
//         carburant: "Diesel",
//         rampe: true,
//         élévateur: false,
//         commandeManuelle: true,
//         guide: false,
//         espaceFauteuil: "Large",
//         image: "https://example.com/images/peugeot-partner.jpg",
//       },
//     },
//     {
//       id: "2",
//       carDetails: {
//         nom: "Renault Kangoo",
//         marque: "Renault",
//         modèle: "Kangoo Life",
//         année: 2021,
//         carburant: "Essence",
//         rampe: false,
//         élévateur: true,
//         commandeManuelle: false,
//         guide: true,
//         espaceFauteuil: "Moyen",
//         image: "https://example.com/images/renault-kangoo.jpg",
//       },
//     },
//   ];
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








  const booking = bookings.find((b) => b.id === id);
  const car = booking?.carDetails || {};

  return (
    <div className="p-6 bg-gray-100 min-h-screen" style={{width:"250px"}}>
      <h1 className="text-2xl font-bold mb-6">🚗 Détails de la voiture</h1>
      <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-6">
        {/* صورة السيارة */}
        {car.image && (
          <img
            src={car.image}
            alt={car.nom}
            className="w-full md:w-1/3 rounded-lg border"
          />
        )}

        {/* بيانات السيارة */}
        <div className="flex-1">
          <p><b>Nom:</b> {car.nom}</p>
          <p><b>Marque:</b> {car.marque}</p>
          <p><b>Modèle:</b> {car.modèle}</p>
          <p><b>Année:</b> {car.année}</p>
          <p><b>Carburant:</b> {car.carburant}</p>
          <p><b>Rampe:</b> {car.rampe ? "Oui" : "Non"}</p>
          <p><b>Élévateur:</b> {car.élévateur ? "Oui" : "Non"}</p>
          <p><b>Commande manuelle:</b> {car.commandeManuelle ? "Oui" : "Non"}</p>
          <p><b>Guide:</b> {car.guide ? "Oui" : "Non"}</p>
          <p><b>Espace fauteuil:</b> {car.espaceFauteuil}</p>
          {/* sièges */}
         <p><b>sièges:</b> {car.sièges}</p>
        {/* <p><b>date de reservation:</b> {car.datedebooking}</p> */}
     <p><b>date de reservation:</b> {booking.datedebooking}</p>



        </div>
      </div>
    </div>
  );
}
