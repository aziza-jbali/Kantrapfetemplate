

// import React, { useEffect, useState } from "react";
// import TableDropdowndelespublications1 from "../Dropdowns/TableDropdowndelespublications1"
// import {getVehiculesandagence} from "../../service/apiGestionvehicules"
// import {gettousannonces} from "../../service/apiGestionannonces"

// // بيانات الوكالات مع motDePasse
// const agences = [
//   { id: 1, nom: "Tunis Mobility", email: "contact@tunis-mobility.com", motDePasse: "Tunis123" },
//   { id: 2, nom: "Carthage Auto", email: "contact@carthage-auto.com", motDePasse: "Carthage456" },
// ];

// // بيانات السيارات المرتبطة بالوكالات
// const voitures = [
//   {
//     id: 101,
//     agenceId: 1,
//     carDetails: {
//       nom: "Peugeot Partner",
//       marque: "Peugeot",
//       modele: "Partner XL",
//       annee: 2022,
//       carburant: "Diesel",
//       kilometrage: 50000,
//       sieges: 3,
//       categorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة مجهزة لذوي الاحتياجات الخاصة",
//       rampe: true,
//       elevateur: false,
//       commandeManuelle: true,
//       guide: false,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/peugeot-partner.jpg",
//       status: "Indisponible",
//       datePublication: "2025-1-8"
//     }
//   },
//   {
//     id: 102,
//     agenceId: 1,
//     carDetails: {
//       nom: "Renault Kangoo",
//       marque: "Renault",
//       modele: "Kangoo Life",
//       annee: 2023,
//       carburant: "Essence",
//       kilometrage: 30000,
//       sieges: 4,
//       categorie: "Utilitaire",
//       transmission: "Automatique",
//       description: "سيارة صغيرة وعملية",
//       rampe: false,
//       elevateur: false,
//       commandeManuelle: false,
//       guide: false,
//       espaceFauteuil: "Medium",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/renault-kangoo.jpg",
//       status: "Disponible",
//       datePublication: "2025-10-8",
//       statuspub: "en-attent",
//     }
//   },
//   {
//     id: 103,
//     agenceId: 2,
//     carDetails: {
//       nom: "Citroën Berlingo",
//       marque: "Citroën",
//       modele: "Berlingo XL",
//       annee: 2021,
//       carburant: "Diesel",
//       kilometrage: 60000,
//       sieges: 5,
//       categorie: "Utilitaire",
//       transmission: "Manuelle",
//       description: "سيارة واسعة للركاب والبضائع",
//       rampe: true,
//       elevateur: true,
//       commandeManuelle: true,
//       guide: true,
//       espaceFauteuil: "Large",
//       support: "حزام أمان إضافي",
//       image: "https://example.com/images/citroen-berlingo.jpg",
//       status: "Disponible",
//       datePublication: "2025-07-18",
//       statuspub: "en-attend",
//     }
//   }
// ];

// export default function CardsPublicationadminprincipale({ color = "light" }) {
//   const [search, setSearch] = useState("");
//   const [carandagence,setcarandagence]=useState([])
//    const getCars = async () => {
//     try {
//       await getVehiculesandagence()
//         .then((response) => {
//           setcarandagence(response.data);
//           console.log("carsandagence", response.data);
//         })
//         .catch((error) => {
//           console.log("Error while calling getUsers API ", error);
//         });
//     } catch (error) {
//       console.log("Error while calling getUsers API ", error);
//     }
//   };

//   useEffect(() => {
//     getCars(); // appel initial

//     const interval = setInterval(() => {
//       getCars();
//     }, 5000); // toutes les 5 secondes

//     return () => clearInterval(interval); // nettoyage quand le composant est démonté
//   }, []);





//   // إنشاء الصفوف لجدول الوكلاء مع الحالة وتاريخ النشر
//   const [tableRows, setTableRows] = useState(() =>
//     voitures.map((voiture) => {
//       const agence = agences.find((a) => a.id === voiture.agenceId);
//       return {
//         userId: agence.id,
//         fullName: agence.nom,
//         email: agence.email,
//         motDePasse: agence.motDePasse,
//         datePublication: voiture.carDetails.datePublication,
//         status: "Approuvé", // Default status for publication
//         carDetails: voiture.carDetails,
//         publicationId: voiture.id,
//       };
//     })
//   );

//   // Handler لتغيير Status de publication (Approuvé / Rejeté)
//   const handleStatusChange = (publicationId, newStatus) => {
//     setTableRows((prev) =>
//       prev.map((row) =>
//         row.publicationId === publicationId ? { ...row, status: newStatus } : row
//       )
//     );
//   };

//   // Filter rows by search input (search in name or email)
//   const filteredRows = tableRows.filter(
//     (row) =>
//       row.fullName.toLowerCase().includes(search.toLowerCase()) ||
//       row.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div
//       className={
//         "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//         (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
//       }
//     >
//       <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
//         <div className="flex flex-wrap items-center ">
//           <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
//             <h3
//               className={
//                 "font-semibold text-lg " +
//                 (color === "light" ? "text-blueGray-700" : "text-white")
//               }
//             >
//               La table des fournisseurs de véhicules
//             </h3>
//             <div className="mb-3 pt-0">
//               <input
//                 type="text"
//                 placeholder="Search here"
//                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr>
//               {[
//                 "IMAGE/NOM",
//                 "address",
//                 "Email",
//                 "phones",
//                 "Date de publication",
//                 "Status de publication",
//                 "Actions",
//               ].map((header) => (
//                 <th
//                   key={header}
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//                     (color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
//                   }
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRows.map((row) => (
//               <tr key={`${row.userId}-${row.publicationId}`}>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border text-center">{row.userId}</td>
//                 <td className="border p-2 text-xl text-center">{row.fullName}</td>
//                 <td className="border-t-0 px-6 align-middle text-xl whitespace-nowrap p-4 border">{row.email}</td>
//                 <td className="border p-2 text-xl">{row.motDePasse}</td>
//                 <td className="border p-2 text-xl">{row.datePublication}</td>
//                 <td className="border p-2 text-xl">
//                   {row.status}
//                   <select
//                     value={row.status}
//                     onChange={(e) => handleStatusChange(row.publicationId, e.target.value)}
//                     className="border rounded p-1 bg-lightBlue-600 text-white ml-2"
//                   >
//                     <option value="Approuvé">Approuvé</option>
//                     <option value="Rejeté">Rejeté</option>
//                   </select>
//                 </td>
//                 <td className="border-t-0 text-xl px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center border">
//                    <span>Consulter</span>
//                     <TableDropdowndelespublications1 carid={row.publicationId} />
//                  </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }












import React, { useEffect, useState } from "react";
import TableDropdowndelespublications1 from "../Dropdowns/TableDropdowndelespublications1";
import { getVehiculesandagence } from "../../service/apiGestionvehicules";

export default function CardsPublicationadminprincipale({ color = "light" }) {
  const [search, setSearch] = useState("");
  const [carandagence, setcarandagence] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  const getCars = async () => {
    try {
      const resp = await getVehiculesandagence();
      setcarandagence(resp.data);

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
          status: car.status || "En attente",
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

  const handleStatusChange = (publicationId, newStatus) => {
    setTableRows((prev) =>
      prev.map((r) => (r.publicationId === publicationId ? { ...r, status: newStatus } : r))
    );
  };

  const filteredRows = tableRows.filter(
    (row) =>
      row.fullName.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      (row.address && row.address.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className={
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
      (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
    }>
      <div className="rounded-t mb-0 px-4 py-3 border-0 border p-2">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={
              "font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white")
            }>
              La table des fournisseurs de véhicules
            </h3>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search here"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-1/2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {[
                "IMAGE/NOM",
                "address",
                "Email",
                "phones",
                "Date de publication",
                "Status de publication",
                "Actions",
              ].map((header) => (
                <th key={header} className={
                  "px-6 align-middle border border-solid py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-400 text-lightBlue-300 border-lightBlue-700")
                }>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.publicationId}>
                <td className="px-6 align-middle text-xl whitespace-nowrap p-4 border text-center">
                  {/* <div className="flex items-center justify-center space-x-2">
                    {row.image ? (
                      <img src={row.image} alt={row.fullName} className="w-16 h-12 object-cover rounded" />
                    ) : (
                      <div className="w-16 h-12 bg-gray-200 flex items-center justify-center rounded">No Img</div>
                    )}
                    <div className="text-left">
                      <div className="font-bold">{row.fullName}</div>
                    </div>
                  </div> */}
                    <td className=" border-l-0 border-r-0 text-xs whitespace-nowrap p-3 text-left flex items-center">
                  <img
                    src={`http://localhost:5011${row.image}`}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="voiture"
                  />
                  <span className="ml-2 font-bold text-xl ">{row.fullName} {row.prenom}</span>
                </td>
                </td>

                <td className="border px-6 py-3 text-xl text-center">{row.address}</td>
                <td className="border px-6 py-3 text-xl text-center">{row.email}</td>
                <td className="border px-6 py-3 text-xl text-center">{row.phones}</td>
                <td className="border px-6 py-3 text-xl text-center">{row.datePublication}</td>

                <td className="border px-6 py-3 text-xl text-center">
                  {row.status}
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.publicationId, e.target.value)}
                    className="border rounded p-1 bg-lightBlue-600 text-white ml-2"
                  >
                    <option value="Approuvé">Approuvé</option>
                    <option value="Rejeté">Rejeté</option>
                    <option value="En attente">En attente</option>
                  </select>
                </td>

                <td className="border px-6 py-3 text-xl text-center">
                  <TableDropdowndelespublications1 carid={row.publicationId} carDetails={row.carDetails} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


