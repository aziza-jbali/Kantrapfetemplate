// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import video from "../../assets/videos/oo.mp4";

// function Cardsvehiculs() {
//   // Cartes avec données en français
//   const cards = [
//     { title: "Voiture compacte adaptée", desc: "Équipée d'une rampe pour fauteuil roulant et de sièges ajustables.", img: "/logo192.png" },
//     { title: "Minivan adapté", desc: "Accueille plusieurs passagers + fauteuils roulants, avec élévateurs.", img: "/logo192.png" },
//     { title: "Petit bus adapté", desc: "Pour transporter de grands groupes, équipé de ceintures de sécurité pour fauteuils roulants.", img: "/logo192.png" },
//     { title: "Voiture électrique adaptée", desc: "Écologique et entièrement équipée pour les personnes handicapées.", img: "/logo192.png" },
//     { title: "Minivan familial", desc: "Confort complet pour familles avec grand espace intérieur.", img: "/logo192.png" },
//     { title: "Bus collectif", desc: "Pour groupes nombreux, sécurité maximale.", img: "/logo192.png" },
//     { title: "Voiture luxueuse adaptée", desc: "Idéale pour les voyages longs avec tous les équipements.", img: "/logo192.png" },
//     { title: "Minivan grand confort", desc: "Espace et confort pour familles et associations.", img: "/logo192.png" },
//   ];

//   const cardsPerPage = 6; // Afficher 6 cartes par page
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <section style={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "hidden" }}>
//       {/* Background */}
//       <img
//         src="https://via.placeholder.com/1920x1080"
//         alt="Background"
//         style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}
//       />

//       <div className="container py-5">
//         <h2 className="text-center text-white mb-4">Véhicules Handynamic</h2>

//         <div className="row">
//           {currentCards.map((card, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card h-100">
//                 <img src={card.img} className="card-img-top" alt={card.title} />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{card.title}</h5>
//                   <p className="card-text">{card.desc}</p>
//                   <a href="#" className="btn btn-primary mt-auto w-100">Réserver</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="py-2">
//           <nav className="block">
//             <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
//               {/* Previous */}
//               <li>
//                 <a
//                   href="#!"
//                   onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
//                   className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
//                 >
//                   <i className="fas fa-chevron-left -ml-px"></i>
//                   <i className="fas fa-chevron-left -ml-px"></i>
//                 </a>
//               </li>

//               {/* Page numbers */}
//               {pageNumbers.map(number => (
//                 <li key={number}>
//                   <a
//                     href="#!"
//                     onClick={() => setCurrentPage(number)}
//                     className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${currentPage === number ? "border-blueGray-500 bg-blueGray-500 text-white" : "border-blueGray-200 bg-white text-blueGray-500"}`}
//                   >
//                     {number}
//                   </a>
//                 </li>
//               ))}

//               {/* Next */}
//               <li>
//                 <a
//                   href="#!"
//                   onClick={() => currentPage < pageNumbers.length && setCurrentPage(currentPage + 1)}
//                   className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
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

// export default Cardsvehiculs;



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";
import { Link } from "react-router-dom";
import CarBooking from "views/user/Carbooking";

function Cardsvehiculs() {
  // const cars = [
  //   {
  //     title: "Range Rover S64 Coupe",
  //     img: car1,
  //     price: "$250/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 5,
  //   },
  //   {
  //     title: "Tesla Model X",
  //     img: car2,
  //     price: "$300/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 21,
  //     rating: 5,
  //   },
  //   {
  //     title: "BMW i8",
  //     img: car3,
  //     price: "$400/day",
  //     doors: 2,
  //     seats: 4,
  //     transmission: "Automatic",
  //     minAge: 21,
  //     rating: 4,
  //   },
  //   {
  //     title: "Audi Q7",
  //     img: car4,
  //     price: "$350/day",
  //     doors: 4,
  //     seats: 7,
  //     transmission: "Automatic",
  //     minAge: 21,
  //     rating: 5,
  //   },
  //   {
  //     title: "Mercedes GLE",
  //     img: car5,
  //     price: "$380/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 21,
  //     rating: 5,
  //   },
  //   {
  //     title: "Porsche Taycan",
  //     img: car6,
  //     price: "$450/day",
  //     doors: 4,
  //     seats: 4,
  //     transmission: "Automatic",
  //     minAge: 25,
  //     rating: 5,
  //   },
  //   {
  //     title: "Lexus RX",
  //     img: "https://via.placeholder.com/400x250?text=Car+7",
  //     price: "$320/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 21,
  //     rating: 4,
  //   },
  //   {
  //     title: "Jaguar F-Type",
  //     img: "https://via.placeholder.com/400x250?text=Car+8",
  //     price: "$420/day",
  //     doors: 2,
  //     seats: 2,
  //     transmission: "Automatic",
  //     minAge: 25,
  //     rating: 5,
  //   },
  //   {
  //     title: "Ford Mustang",
  //     img: "https://via.placeholder.com/400x250?text=Car+9",
  //     price: "$300/day",
  //     doors: 2,
  //     seats: 4,
  //     transmission: "Manual",
  //     minAge: 21,
  //     rating: 4,
  //   },
  //   {
  //     title: "Chevrolet Camaro",
  //     img: "https://via.placeholder.com/400x250?text=Car+10",
  //     price: "$350/day",
  //     doors: 2,
  //     seats: 4,
  //     transmission: "Manual",
  //     minAge: 21,
  //     rating: 4,
  //   },
  //   {
  //     title: "Nissan GT-R",
  //     img: "https://via.placeholder.com/400x250?text=Car+11",
  //     price: "$500/day",
  //     doors: 2,
  //     seats: 2,
  //     transmission: "Automatic",
  //     minAge: 25,
  //     rating: 5,
  //   },
  //   {
  //     title: "Honda Civic",
  //     img: "https://via.placeholder.com/400x250?text=Car+12",
  //     price: "$200/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Toyota Corolla",
  //     img: "https://via.placeholder.com/400x250?text=Car+13",
  //     price: "$220/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Kia Sportage",
  //     img: "https://via.placeholder.com/400x250?text=Car+14",
  //     price: "$230/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Hyundai Tucson",
  //     img: "https://via.placeholder.com/400x250?text=Car+15",
  //     price: "$240/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Mazda CX-5",
  //     img: "https://via.placeholder.com/400x250?text=Car+16",
  //     price: "$250/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Subaru Outback",
  //     img: "https://via.placeholder.com/400x250?text=Car+17",
  //     price: "$260/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  //   {
  //     title: "Volkswagen Tiguan",
  //     img: "https://via.placeholder.com/400x250?text=Car+18",
  //     price: "$270/day",
  //     doors: 4,
  //     seats: 5,
  //     transmission: "Automatic",
  //     minAge: 18,
  //     rating: 4,
  //   },
  // ];
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

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cars.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cars.slice(indexOfFirstCard, indexOfLastCard);

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
      {/* <img src="https://via.placeholder.com/1920x1080" alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}
      /> */}

      <div className="container py-5">
        <h2 className="text-center text-white mb-4">Véhicules Handynamic</h2>

        <div className="row g-4">
          {currentCards.map((car, index) => (
            <div
              style={{ borderRadius: "70px" }}
              className="col-md-6 col-lg-4"
              key={index}
            >
              <div
                className="card shadow h-100"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  style={{ height: "300px" }}
                  src={car.img}
                  className="card-img-top"
                  alt={car.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{car.title}</h5>
                  <div className="text-center mb-2">
                    {Array(car.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-warning fs-5">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-center fw-bold fs-5 text-primary">
                    {car.price}
                  </p>
                  <hr />
                  <ul className="list-unstyled text-center mb-3">
                    <li>
                      Doors: <span className="fw-bold ms-1">{car.doors}</span>
                    </li>
                    <li>
                      Seats: <span className="fw-bold ms-1">{car.seats}</span>
                    </li>
                    <li>
                      Transmission:{" "}
                      <span className="fw-bold ms-1">{car.transmission}</span>
                    </li>
                    <li>
                      Minimum age:{" "}
                      <span className="fw-bold ms-1">{car.minAge} years</span>
                    </li>
                  </ul>
                  {/* <button className="btn btn-primary w-100">Rent Now</button> */}
                  <Link
                                    to={`/booking/${car.id}`}

                    state={{ car }}  
                    className="block bg-yellow-500 hover:bg-yellow-600 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-2">
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
              <li>
                <a
                  href="#!"
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
                >
                  <i className="fas fa-chevron-left -ml-px"></i>
                  <i className="fas fa-chevron-left -ml-px"></i>
                </a>
              </li>

              {getPageNumbers().map((number) => (
                <li key={number}>
                  <a
                    href="#!"
                    onClick={() => setCurrentPage(number)}
                    className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${
                      currentPage === number
                        ? "border-blueGray-500 bg-blueGray-500 text-white"
                        : "border-blueGray-200 bg-white text-blueGray-500"
                    }`}
                  >
                    {number}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#!"
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
                >
                  <i className="fas fa-chevron-right -mr-px"></i>
                  <i className="fas fa-chevron-right -mr-px"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Cardsvehiculs;

