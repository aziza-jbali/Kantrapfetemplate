// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// // import { getVehicules } from "../../service/apiGestionvehicules";
// import {gettousannonces} from "../../service/apiGestionannonces"

// import car1 from "../../assets/img/car1.jpg";
// import car2 from "../../assets/img/car2.jpg";
// import car3 from "../../assets/img/car3.jpg";
// import car4 from "../../assets/img/car4.jpg";
// import car5 from "../../assets/img/car5.jpg";
// import car6 from "../../assets/img/car6.jpg";
// import { Link } from "react-router-dom";
// import Searchcar from "../Searchbyfilter/Searchcars.js";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// function Cardannonces() {
//   const [pub, setpub] = useState([]);
//   const history = useHistory();

//   const getpublication = async () => {
//     try {
//       await gettousannonces()
//         .then((response) => {
//           setpub(response.data);
//           console.log("annonces", response.data);
//           console.log("annonces", cars);
//         })
//         .catch((error) => {
//           console.log("Error while calling  getpublication API ", error);
//         });
//     } catch (error) {
//       console.log("Error while calling  getpublication API ", error);
//     }
//   };
//   useEffect(() => {
//     getpublication(); // appel initial

//     const interval = setInterval(() => {
//       getpublication();
//     }, 5000); // toutes les 5 secondes

//     return () => clearInterval(interval); // nettoyage quand le composant est démonté
//   }, []);
//   const cardsPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(cars.length / cardsPerPage);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = cars.slice(indexOfFirstCard, indexOfLastCard);

//   const getPageNumbers = () => {
//     const pages = [];
//     const totalNumbers = 3;
//     let start = currentPage - 1;
//     let end = currentPage + 1;
//     if (start < 1) {
//       start = 1;
//       end = totalNumbers;
//     }
//     if (end > totalPages) {
//       end = totalPages;
//       start = totalPages - (totalNumbers - 1);
//       if (start < 1) start = 1;
//     }
//     for (let i = start; i <= end; i++) pages.push(i);
//     return pages;
//   };

//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100vw",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <div className="container py-5">
//         <h2 className="text-center text-black mb-4">
//           Découvrez nos véhicules adaptés pour votre confort et liberté
//         </h2>
//         <Searchcar />
//         <div className="row g-4">
//           {/* {currentCards.map((car, index) => (
//             <div style={{ borderRadius: "70px" }} className="col-md-6 col-lg-4" key={index}>
//               <div className="card shadow h-100" style={{ transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
//                 onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)"; }}
//                 onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; }}>
//                 <div className="card-body">
//                      <img
//                   style={{ height: "300px" }}
//                   // src={car.img}
//                   src={`http://localhost:5011${car.image}`}
//                    className="card-img-top"
//                    alt={car.title}
//                  />
//                   <h5 className="card-title text-center">{car.title}</h5>
//                   <div className="text-center mb-2">
//                     {Array(car.rating).fill().map((_, i) => <span key={i} className="text-warning fs-5">★</span>)}
//                   </div>
//                   <p className="text-center fw-bold fs-5 text-primary">{car.price}</p>
//                   <hr />
//                   <ul className="list-unstyled text-center mb-3">
//                     <li>Doors: <span className="fw-bold ms-1">{car.doors}</span></li>
//                     <li>Seats: <span className="fw-bold ms-1">{car.seats}</span></li>
//                     <li>Transmission: <span className="fw-bold ms-1">{car.transmission}</span></li>
//                     <li>Disponibilité: <span className="fw-bold ms-1 text-success">Disponible</span></li>
//                   </ul>
//                   <Link to={`/booking/${car.id}`} state={{ car }} className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4">
//                     Reserver un véhicule
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//           {currentCards.map((car, index) => (
//             <div
//               style={{ borderRadius: "70px" }}
//               className="col-md-6 col-lg-4"
//               key={car._id || index}
//             >
//               <div
//                 className="card shadow h-100"
//                 style={{
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.05)";
//                   e.currentTarget.style.boxShadow =
//                     "0 15px 30px rgba(0,0,0,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <div className="card-body">
//                   <img
//                     style={{
//                       height: "300px",
//                       objectFit: "cover",
//                       borderRadius: "15px",
//                     }}
//                     src={`http://localhost:5011${car.image}`}
//                     className="card-img-top"
//                     alt={car.nom}
//                   />

//                   <h5 className="card-title text-center mt-3">{car.nom}</h5>
//                   <p className="text-center text-muted">{car.modele}</p>

//                   <p className="text-center fw-bold fs-5 text-primary">
//                     {car.prixParJour
//                       ? `${car.prixParJour} TND/jour`
//                       : "Prix non défini"}
//                   </p>

//                   <hr />
//                   <ul className="list-unstyled text-center mb-3">
//                     <li>
//                       Carburant:{" "}
//                       <span className="fw-bold ms-1">{car.carburant}</span>
//                     </li>
//                     <li>
//                       Transmission:{" "}
//                       <span className="fw-bold ms-1">
//                         {car.transmission || "—"}
//                       </span>
//                     </li>
//                     <li>
//                       Disponibilité:{" "}
//                       <span className="fw-bold ms-1 text-success">
//                         {car.statusVehicule || "—"}
//                       </span>
//                     </li>
//                   </ul>
//                   {console.log("🚗 Car envoyé vers Booking:", car)}

//                   {/* <Link
//                     // to={`/booking/${car._id}`}
//                     to="/booking"
//                     state={{ car }}
//                     className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"
//                   >
//                     Réserver un véhicule
//                   </Link> */}
//                   {/* <button
//                     type="button"
//                     style={{marginLeft:"22px",width:"340px"}}
//                     // className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"
//                       className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"

//                     onClick={() => {
//                       console.log("🚗 Car envoyé vers Booking:", car);
//                       history.push({ pathname: "/booking", state: { car } });
//                     }}
//                   >
//                     Réserver un véhicule
//                   </button> */}
//                   <button
//                     type="button"
//                     style={{
//                       marginLeft: "22px",
//                       width: "340px",
//                       background:
//                         car.statusVehicule === "indisponible"
//                           ? "#ccc" // رمادي باهت عند التعطيل
//                           : "linear-gradient(to right, #3b82f6, #06b6d4)", // تدرج أزرق جميل عند التفعيل
//                       color:
//                         car.statusVehicule === "indisponible"
//                           ? "#666"
//                           : "white",
//                       cursor:
//                         car.statusVehicule === "indisponible"
//                           ? "not-allowed"
//                           : "pointer",
//                       border: "none",
//                       padding: "10px 20px",
//                       borderRadius: "8px",
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginTop: "16px",
//                     }}
//                     disabled={car.statusVehicule === "indisponible"}
//                     onClick={() => {
//                       if (car.statusVehicule !== "indisponible") {
//                         console.log("🚗 Car envoyé vers Booking:", car);
//                         history.push({ pathname: "/booking", state: { car } });
//                       }
//                     }}
//                   >
//                     {car.statusVehicule === "indisponible"
//                       ? "Véhicule Indisponible"
//                       : "Réserver un véhicule"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="py-4">
//           <nav className="block">
//             <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
//               <li>
//                 <a
//                   href="#!"
//                   onClick={() =>
//                     currentPage > 1 && setCurrentPage(currentPage - 1)
//                   }
//                   className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
//                 >
//                   <i className="fas fa-chevron-left -ml-px"></i>
//                   <i className="fas fa-chevron-left -ml-px"></i>
//                 </a>
//               </li>
//               {getPageNumbers().map((number) => (
//                 <li key={number}>
//                   <a
//                     href="#!"
//                     onClick={() => setCurrentPage(number)}
//                     className={`first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-2 rounded-full items-center justify-center leading-tight relative border border-solid ${
//                       currentPage === number
//                         ? "border-blueGray-500 bg-lightBlue-500 text-white"
//                         : "border-blueGray-200 bg-white text-blueGray-500"
//                     }`}
//                   >
//                     {number}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href="#!"
//                   onClick={() =>
//                     currentPage < totalPages && setCurrentPage(currentPage + 1)
//                   }
//                   className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
//                 >
//                   <i className="fas fa-chevron-right -mr-px"></i>
//                   <i className="fas fa-chevron-right -mr-px"></i>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Cardannonces;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { gettousannonces } from "../../service/apiGestionannonces";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// function Cardannonces() {
//   const [pub, setPub] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const history = useHistory();

//   // 🔹 جلب كل الإعلانات من الـ API
//   const getPublication = async () => {
//     try {
//       const response = await gettousannonces();
//       // فقط الإعلانات الموافق عليها
//       const approved = response.data.filter((a) => a.statut === "Approuvé");
//       setPub(approved);
//       setError(null);
//     } catch (error) {
//       console.log("❌ Error while calling gettousannonces API", error);
//       setError("خطأ في الاتصال بالسيرفر");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPublication();
//     const interval = setInterval(() => {
//       getPublication();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // 🔹 Pagination setup
//   const cardsPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(pub.length / cardsPerPage);
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = pub.slice(indexOfFirstCard, indexOfLastCard);

//   const getPageNumbers = () => {
//     const pages = [];
//     const totalNumbers = 3;
//     let start = currentPage - 1;
//     let end = currentPage + 1;
//     if (start < 1) {
//       start = 1;
//       end = totalNumbers;
//     }
//     if (end > totalPages) {
//       end = totalPages;
//       start = totalPages - (totalNumbers - 1);
//       if (start < 1) start = 1;
//     }
//     for (let i = start; i <= end; i++) pages.push(i);
//     return pages;
//   };

//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100vw",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <div className="container py-5">
//         <h2 className="text-center text-black mb-4" >
//          📢 Découvrez les annonces approuvées 📢
//         </h2>

//         {/* 🔹 حالة التحميل */}
//         {loading && (
//           <div className="text-center my-5 ">
//             <div className="spinner-border text-primary" role="status"></div>
//             <p className="mt-3">جاري تحميل الإعلانات...</p>
//           </div>
//         )}

//         {/* 🔹 حالة الخطأ */}
//         {error && (
//           <div className="alert alert-danger text-center" role="alert">
//             {error}
//           </div>
//         )}

//         {/* 🔹 حالة لا توجد نتائج */}
//         {!loading && !error && pub.length === 0 && (
//           <div className="text-center text-muted fs-5 my-5">
//             لا توجد إعلانات متاحة حالياً 📭
//           </div>
//         )}

//         {/* 🔹 عرض الإعلانات */}
//         <div className="row g-4">
//           {currentCards.map((annonce, index) => (
//             <div
//               style={{ borderRadius: "70px" }}
//               className="col-md-6 col-lg-4"
//               key={annonce._id || index}
//             >
//               <div
//                 className="card shadow h-100"
//                 style={{
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.05)";
//                   e.currentTarget.style.boxShadow =
//                     "0 15px 30px rgba(0,0,0,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <div className="card-body">
//                   <img
//                     style={{
//                       height: "300px",
//                       width: "100%",
//                       objectFit: "cover",
//                       borderRadius: "15px",
//                     }}
//                     src={`http://localhost:5011${annonce.image}`}
//                     className="card-img-top"
//                     alt="annonce"
//                   />
//                   <hr />
//                   <p className="text-center font-bold text-muted mt-3">
//                     {annonce.description || "—"}
//                   </p>

//                   <hr />
//                   <p className="text-center text-xl text-secondary">
//                     Publié le:{" "}
//                     <span className="fw-bold">
//                       {new Date(annonce.datePublication).toLocaleDateString()}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔹 Pagination */}
//         {!loading && pub.length > 0 && (
//           <div className="py-4">
//             <nav className="block">
//               <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
//                 <li>
//                   <a
//                     href="#!"
//                     onClick={() =>
//                       currentPage > 1 && setCurrentPage(currentPage - 1)
//                     }
//                     className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
//                   >
//                     <i className="fas fa-chevron-left -ml-px"></i>
//                   </a>
//                 </li>
//                 {getPageNumbers().map((number) => (
//                   <li key={number}>
//                     <a
//                       href="#!"
//                       onClick={() => setCurrentPage(number)}
//                       className={`first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-2 rounded-full items-center justify-center leading-tight relative border border-solid ${
//                         currentPage === number
//                           ? "border-blueGray-500 bg-lightBlue-500 text-white"
//                           : "border-blueGray-200 bg-white text-blueGray-500"
//                       }`}
//                     >
//                       {number}
//                     </a>
//                   </li>
//                 ))}
//                 <li>
//                   <a
//                     href="#!"
//                     onClick={() =>
//                       currentPage < totalPages &&
//                       setCurrentPage(currentPage + 1)
//                     }
//                     className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
//                   >
//                     <i className="fas fa-chevron-right -mr-px"></i>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Cardannonces;


































































import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gettousannonces } from "../../service/apiGestionannonces";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cardannonces() {
  const [pub, setPub] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🔹 جلب كل الإعلانات من الـ API
  const getPublication = async () => {
    try {
      const response = await gettousannonces();
      // فقط الإعلانات الموافق عليها
      const approved = response.data.filter((a) => a.statut === "Approuvé");
      setPub(approved);
      setError(null);
    } catch (error) {
      console.log("❌ Error while calling gettousannonces API", error);
      setError("خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPublication();
    const interval = setInterval(() => {
      getPublication();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Debounce البحث (300ms)
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // 🔹 Pagination setup (سيتم حسابها اعتماداً على النتائج المفلترة)
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 تطبيق فلتر البحث على القائمة (بحث في حقل description)
  const filteredPub = pub.filter((a) => {
    if (!debouncedSearch) return true; // لا فلتر إذا حقل البحث فارغ
    const desc = a.description || "";
    return desc.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  // Reset page to 1 عندما يتغير مصطلح البحث المفلتر
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredPub.length / cardsPerPage));
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredPub.slice(indexOfFirstCard, indexOfLastCard);

  const getPageNumbers = () => {
    const pages = [];
    const totalNumbers = 3;
    let start = currentPage - 1;
    let end = currentPage + 1;
    if (start < 1) {
      start = 1;
      end = totalNumbers;
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - (totalNumbers - 1);
      if (start < 1) start = 1;
    }
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <h2 className="text-center text-black mb-4">📢 Découvrez les annonces approuvées 📢</h2>

        {/* ===== Search input ===== */}
        <div className="row mb-4">
          <div className="col-md-8 offset-md-2">
            <div className="input-group" style={{padding:"35px"}}>
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher par description... (ex: fauteuil, accessibilité, chaise)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  setSearchTerm("");
                }}
                title="Réinitialiser la recherche"
              >
                ✖
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 حالة التحميل */}
        {loading && (
          <div className="text-center my-5 ">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">جاري تحميل الإعلانات...</p>
          </div>
        )}

        {/* 🔹 حالة الخطأ */}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {/* 🔹 حالة لا توجد نتائج */}
        {!loading && !error && filteredPub.length === 0 && (
          <div className="text-center text-muted fs-5 my-5">لا توجد إعلانات متطابقة مع البحث 📭</div>
        )}

        {/* 🔹 عرض الإعلانات */}
        <div className="row g-4">
          {currentCards.map((annonce, index) => (
            <div style={{ borderRadius: "70px" }} className="col-md-6 col-lg-4" key={annonce._id || index}>
              <div
                className="card shadow h-100"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
                // onClick={() => {
                //   // مثال: التوجّه إلى صفحة التفاصيل إن وجدت
                //   history.push(`/annonce/${annonce._id}`, { annonce });
                // }}
              >
                <div className="card-body">
                  <img
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={`http://localhost:5011${annonce.image}`}
                    className="card-img-top"
                    alt="annonce"
                  />
                  <hr />
                  <p className="text-center font-bold text-muted mt-3">{annonce.description || "—"}</p>

                  <hr />
                  <p className="text-center text-xl text-secondary">
                    Publié le: <span className="fw-bold">{new Date(annonce.datePublication).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Pagination */}
        {!loading && filteredPub.length > 0 && (
          <div className="py-4">
            <nav className="block">
              <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
                <li>
                  <a
                    href="#!"
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
                  >
                    <i className="fas fa-chevron-left -ml-px"></i>
                  </a>
                </li>
                {getPageNumbers().map((number) => (
                  <li key={number}>
                    <a
                      href="#!"
                      onClick={() => setCurrentPage(number)}
                      className={`first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-2 rounded-full items-center justify-center leading-tight relative border border-solid ${
                        currentPage === number ? "border-blueGray-500 bg-lightBlue-500 text-white" : "border-blueGray-200 bg-white text-blueGray-500"
                      }`}
                    >
                      {number}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#!"
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
                  >
                    <i className="fas fa-chevron-right -mr-px"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cardannonces;
