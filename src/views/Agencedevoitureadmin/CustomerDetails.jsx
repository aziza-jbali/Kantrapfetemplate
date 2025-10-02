// import { useLocation } from "react-router-dom";

// export default function CustomerDetails() {
//   // قراءة الـ id من query param
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const id = searchParams.get("id"); // هذا هو id الحجز من الرابط

//   // بيانات ثابتة مؤقتة
//   // const bookings = [
//   //   {
//   //     id: "1",
//   //     customer: {
//   //       name: "محمد علي",
//   //       phone: "12345678",
//   //       email: "mohamed@example.com",
//   //       address: "تونس، شارع الحبيب بورقيبة",
//   //     },
//   //   },
//   //   {
//   //     id: "2",
//   //     customer: {
//   //        name: "   سمد علي",
//   //       phone: "14345678",
//   //       email: "mohamed@example.com",
//   //       address: "تونس، شارع الحبيب ثامر",
//   //     },
//   //   },
//   // ];
// const bookings = [
//   {
//     id: "1",
//     car: "Peugeot Partner",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     status: "venue",
//     customer: {
//       id:"1",
//       name: "محمد علي",
//       phone: "12345678",
//       email: "mohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modèle: "Partner XL",
//       année: 2022,
//       carburant: "Diesel",
//       kilométrage: 50000,
//       sièges: 3,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       élévateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/peugeot-partner.jpg",
//     },
//   },
//   {
//     id: "2",
//     car: "Renault Kangoo",
//     price: "120 DT/يوم",
//     startDate: "2025-10-02",
//     endDate: "2025-10-05",
//     status: "venue",
//     customer: {
//       id:"2",
//       name: "سمد علي",
//       phone: "14345678",
//       email: "moohamed@example.com",
//       address: "تونس، شارع الحبيب بورقيبة",
//     },
//     carDetails: {
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modèle: "Kangoo Life",
//       année: 2021,
//       carburant: "Essence",
//       kilométrage: 60000,
//       sièges: 5,
//       catégorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: false,
//       élévateur: true,
//       commandeManuelle: false,
//       guide: true,
//       espaceFauteuil: "Moyen",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//     },
//   },
// ];


    

//   // إيجاد الحجز حسب id
//   const booking = bookings.find((b) => b.id === id);
//   const customer = booking?.customer || {};

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">Détails du client</h1>
//       <div className="bg-white rounded-lg shadow p-4">
//                 <p><b>id:</b> {customer.id}</p>

//         <p><b>الاسم:</b> {customer.name}</p>
//         <p><b>الهاتف:</b> {customer.phone}</p>
//         <p><b>البريد:</b> {customer.email}</p>
//         <p><b>العنوان:</b> {customer.address}</p>
//       </div>
//     </div>
//   );
// }





// import { useLocation } from "react-router-dom";
// import video1 from "../../assets/videos/n1.mp4"
// export default function CustomerDetails() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const id = searchParams.get("id");

//   const bookings = [
//     {
//       id: "1",
//       car: "Peugeot Partner",
//       customer: {
//         id: "1",
//         name: "Mohamed Ali",
//         phone: "12345678",
//         email: "mohamed@example.com",
//         address: "Tunis, Avenue Habib Bourguiba",
//       },
//     },
//     {
//       id: "2",
//       car: "Renault Kangoo",
//       customer: {
//         id: "2",
//         name: "Samed Ali",
//         phone: "14345678",
//         email: "moohamed@example.com",
//         address: "Tunis, Avenue Habib Thamer",
//       },
//     },
//   ];

//   const booking = bookings.find((b) => b.id === id);
//   const customer = booking?.customer || {};

//   return (
//     <div className="relative min-h-screen flex items-center justify-center" 
// >
//       {/* Vidéo en arrière-plan */}
//       <video
//         autoPlay
//         loop
//         muted
//         // className="absolute inset-0 w-full h-full object-cover"
//          className="absolute top-0 left-0 w-full h-full object-cover"
        
//       >
//         <source src={video1} type="video/mp4" />
//       </video>

//       {/* Couche sombre au-dessus de la vidéo */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Contenu centré */}
//       <div className="relative bg-white/70 rounded-lg shadow-lg p-2 max-w-md w-1/2 text-center"  >
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">
//           <i className="fas fa-user-circle mr-2 text-lg"></i>
//           Détails du client
//         </h1>
//         <p><i className="fas fa-id-badge mr-2 text-sm"></i><b>ID:</b> {customer.id}</p>
//         <p><i className="fas fa-user mr-2 text-sm"></i><b>Nom:</b> {customer.name}</p>
//         <p><i className="fas fa-phone mr-2 text-sm"></i><b>Téléphone:</b> {customer.phone}</p>
//         <p><i className="fas fa-envelope mr-2 text-sm"></i><b>Email:</b> {customer.email}</p>
//         <p><i className="fas fa-map-marker-alt mr-2 text-sm"></i><b>Adresse:</b> {customer.address}</p>
//       </div>
//     </div>
//   );
// }







import { useLocation } from "react-router-dom";
import video1 from "../../assets/videos/n1.mp4";

export default function CustomerDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const bookings = [
    {
      id: "1",
      car: "Peugeot Partner",
      customer: {
        id: "1",
        name: "Mohamed Ali",
        phone: "12345678",
        email: "mohamed@example.com",
        address: "Tunis, Avenue Habib Bourguiba",
      },
    },
    {
      id: "2",
      car: "Renault Kangoo",
      customer: {
        id: "2",
        name: "Samed Ali",
        phone: "14345678",
        email: "moohamed@example.com",
        address: "Tunis, Avenue Habib Thamer",
      },
    },
  ];

  const booking = bookings.find((b) => b.id === id);
  const customer = booking?.customer || {};

  return (
    <>
      <style>{`
        .customer-page {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: -1;
        }
        .customer-card {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          padding: 20px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="customer-page">
        {/* Vidéo en arrière-plan */}
        <video autoPlay loop muted className="bg-video">
          <source src={video1} type="video/mp4" />
        </video>

        {/* Overlay sombre */}
        <div className="overlay"></div>

        {/* Carte centrée */}
        <div className="customer-card">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            <i className="fas fa-user-circle mr-2 text-lg"></i>
            Détails du client
          </h1>
          <p><i className="fas fa-id-badge mr-2 text-sm"></i><b>ID:</b> {customer.id}</p>
          <p><i className="fas fa-user mr-2 text-sm"></i><b>Nom:</b> {customer.name}</p>
          <p><i className="fas fa-phone mr-2 text-sm"></i><b>Téléphone:</b> {customer.phone}</p>
          <p><i className="fas fa-envelope mr-2 text-sm"></i><b>Email:</b> {customer.email}</p>
          <p><i className="fas fa-map-marker-alt mr-2 text-sm"></i><b>Adresse:</b> {customer.address}</p>
        </div>
      </div>
    </>
  );
}
