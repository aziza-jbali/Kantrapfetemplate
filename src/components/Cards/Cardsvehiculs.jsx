import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { getVehicules } from "../../service/apiGestionvehicules";
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";
import { Link } from "react-router-dom";
import Searchcar from "../Searchbyfilter/Searchcars.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cardsvehiculs() {
  const [cars, setcars] = useState([]);
  const history = useHistory();
  // const cars = [
  //   { id: 1, title: "Range Rover S64 Coupe", img: car1, price: "$250/day", doors: 4, seats: 5, transmission: "Automatic", rating: 5 },
  //   { id: 2, title: "Tesla Model X", img: car2, price: "$300/day", doors: 4, seats: 5, transmission: "Automatic", rating: 5 },
  //   { id: 3, title: "BMW i8", img: car3, price: "$400/day", doors: 2, seats: 4, transmission: "Automatic", rating: 4 },
  //   { id: 4, title: "Audi Q7", img: car4, price: "$350/day", doors: 4, seats: 7, transmission: "Automatic", rating: 5 },
  //   { id: 5, title: "Mercedes GLE", img: car5, price: "$380/day", doors: 4, seats: 5, transmission: "Automatic", rating: 5 },
  //   { id: 6, title: "Porsche Taycan", img: car6, price: "$450/day", doors: 4, seats: 4, transmission: "Automatic", rating: 5 },
  //   { id: 7, title: "Lexus RX", img: car1, price: "$320/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 8, title: "Jaguar F-Type", img: car2, price: "$420/day", doors: 2, seats: 2, transmission: "Automatic", rating: 5 },
  //   { id: 9, title: "Ford Mustang", img: car3, price: "$300/day", doors: 2, seats: 4, transmission: "Manual", rating: 4 },
  //   { id: 10, title: "Chevrolet Camaro", img: car4, price: "$350/day", doors: 2, seats: 4, transmission: "Manual", rating: 4 },
  //   { id: 11, title: "Nissan GT-R", img: car5, price: "$500/day", doors: 2, seats: 2, transmission: "Automatic", rating: 5 },
  //   { id: 12, title: "Honda Civic", img: car6, price: "$200/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 13, title: "Toyota Corolla", img: car1, price: "$220/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 14, title: "Kia Sportage", img: car2, price: "$230/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 15, title: "Hyundai Tucson", img: car3, price: "$240/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 16, title: "Mazda CX-5", img: car4, price: "$250/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 17, title: "Subaru Outback", img: car5, price: "$260/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  //   { id: 18, title: "Volkswagen Tiguan", img: car6, price: "$270/day", doors: 4, seats: 5, transmission: "Automatic", rating: 4 },
  // ];
  const getcars = async () => {
    try {
      await getVehicules()
        .then((response) => {
          setcars(response.data);
          console.log("Vehicules", response.data);
          console.log("Vehicules1", cars);
        })
        .catch((error) => {
          console.log("Error while calling  getVehicules API ", error);
        });
    } catch (error) {
      console.log("Error while calling  getVehicules API ", error);
    }
  };
  useEffect(() => {
    getcars(); // appel initial

    const interval = setInterval(() => {
      getcars();
    }, 5000); // toutes les 5 secondes

    return () => clearInterval(interval); // nettoyage quand le composant est démonté
  }, []);
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
      <div className="container py-5">
        <h2 className="text-center text-black mb-4">
          Découvrez nos véhicules adaptés pour votre confort et liberté
        </h2>
        <Searchcar />
        <div className="row g-4">
          {/* {currentCards.map((car, index) => (
            <div style={{ borderRadius: "70px" }} className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow h-100" style={{ transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; }}>
                <div className="card-body">
                     <img
                  style={{ height: "300px" }}
                  // src={car.img}
                  src={`http://localhost:5011${car.image}`}
                   className="card-img-top"
                   alt={car.title}
                 /> 
                  <h5 className="card-title text-center">{car.title}</h5>
                  <div className="text-center mb-2">
                    {Array(car.rating).fill().map((_, i) => <span key={i} className="text-warning fs-5">★</span>)}
                  </div>
                  <p className="text-center fw-bold fs-5 text-primary">{car.price}</p>
                  <hr />
                  <ul className="list-unstyled text-center mb-3">
                    <li>Doors: <span className="fw-bold ms-1">{car.doors}</span></li>
                    <li>Seats: <span className="fw-bold ms-1">{car.seats}</span></li>
                    <li>Transmission: <span className="fw-bold ms-1">{car.transmission}</span></li>
                    <li>Disponibilité: <span className="fw-bold ms-1 text-success">Disponible</span></li>
                  </ul>
                  <Link to={`/booking/${car.id}`} state={{ car }} className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4">
                    Reserver un véhicule
                  </Link>
                </div>
              </div>
            </div>
          ))} */}
          {currentCards.map((car, index) => (
            <div
              style={{ borderRadius: "70px" }}
              className="col-md-6 col-lg-4"
              key={car._id || index}
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
                <div className="card-body">
                  <img
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={`http://localhost:5011${car.image}`}
                    className="card-img-top"
                    alt={car.nom}
                  />

                  <h5 className="card-title text-center mt-3">{car.nom}</h5>
                  <p className="text-center text-muted">{car.modele}</p>

                  <p className="text-center fw-bold fs-5 text-primary">
                    {car.prixParJour
                      ? `${car.prixParJour} TND/jour`
                      : "Prix non défini"}
                  </p>

                  <hr />
                  <ul className="list-unstyled text-center mb-3">
                    <li>
                      Carburant:{" "}
                      <span className="fw-bold ms-1">{car.carburant}</span>
                    </li>
                    <li>
                      Transmission:{" "}
                      <span className="fw-bold ms-1">
                        {car.transmission || "—"}
                      </span>
                    </li>
                    <li>
                      Disponibilité:{" "}
                      <span className="fw-bold ms-1 text-success">
                        {car.statusVehicule || "—"}
                      </span>
                    </li>
                  </ul>
                  {console.log("🚗 Car envoyé vers Booking:", car)}

                  {/* <Link
                    // to={`/booking/${car._id}`}
                    to="/booking"
                    state={{ car }}
                    className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"
                  >
                    Réserver un véhicule
                  </Link> */}
                  {/* <button
                    type="button"
                    style={{marginLeft:"22px",width:"340px"}}
                    // className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"
                      className="block bg-lightBlue-500 text-center text-white py-2 px-4 rounded-lg font-bold mt-4"

                    onClick={() => {
                      console.log("🚗 Car envoyé vers Booking:", car);
                      history.push({ pathname: "/booking", state: { car } });
                    }}
                  >
                    Réserver un véhicule
                  </button> */}
                  <button
                    type="button"
                    style={{
                      marginLeft: "22px",
                      width: "340px",
                      background:
                        car.statusVehicule === "indisponible"
                          ? "#ccc" // رمادي باهت عند التعطيل
                          : "linear-gradient(to right, #3b82f6, #06b6d4)", // تدرج أزرق جميل عند التفعيل
                      color:
                        car.statusVehicule === "indisponible"
                          ? "#666"
                          : "white",
                      cursor:
                        car.statusVehicule === "indisponible"
                          ? "not-allowed"
                          : "pointer",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "16px",
                    }}
                    disabled={car.statusVehicule === "indisponible"}
                    onClick={() => {
                      if (car.statusVehicule !== "indisponible") {
                        console.log("🚗 Car envoyé vers Booking:", car);
                        history.push({ pathname: "/booking", state: { car } });
                      }
                    }}
                  >
                    {car.statusVehicule === "indisponible"
                      ? "Véhicule Indisponible"
                      : "Réserver un véhicule"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4">
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
              <li>
                <a
                  href="#!"
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
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
                    className={`first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-2 rounded-full items-center justify-center leading-tight relative border border-solid ${
                      currentPage === number
                        ? "border-blueGray-500 bg-lightBlue-500 text-white"
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
                  className="first:ml-0 text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
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
