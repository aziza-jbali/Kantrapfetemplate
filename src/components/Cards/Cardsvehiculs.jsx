import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import video from "../../assets/videos/oo.mp4";

function Cardsvehiculs() {
  // Cartes avec données en français
  const cards = [
    { title: "Voiture compacte adaptée", desc: "Équipée d'une rampe pour fauteuil roulant et de sièges ajustables.", img: "/logo192.png" },
    { title: "Minivan adapté", desc: "Accueille plusieurs passagers + fauteuils roulants, avec élévateurs.", img: "/logo192.png" },
    { title: "Petit bus adapté", desc: "Pour transporter de grands groupes, équipé de ceintures de sécurité pour fauteuils roulants.", img: "/logo192.png" },
    { title: "Voiture électrique adaptée", desc: "Écologique et entièrement équipée pour les personnes handicapées.", img: "/logo192.png" },
    { title: "Minivan familial", desc: "Confort complet pour familles avec grand espace intérieur.", img: "/logo192.png" },
    { title: "Bus collectif", desc: "Pour groupes nombreux, sécurité maximale.", img: "/logo192.png" },
    { title: "Voiture luxueuse adaptée", desc: "Idéale pour les voyages longs avec tous les équipements.", img: "/logo192.png" },
    { title: "Minivan grand confort", desc: "Espace et confort pour familles et associations.", img: "/logo192.png" },
  ];

  const cardsPerPage = 6; // Afficher 6 cartes par page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section style={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background */}
      <img
        src="https://via.placeholder.com/1920x1080"
        alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}
      />

      <div className="container py-5">
        <h2 className="text-center text-white mb-4">Véhicules Handynamic</h2>

        <div className="row">
          {currentCards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                  <a href="#" className="btn btn-primary mt-auto w-100">Réserver</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="py-2">
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
              {/* Previous */}
              <li>
                <a
                  href="#!"
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-200 text-white bg-blueGray-200"
                >
                  <i className="fas fa-chevron-left -ml-px"></i>
                  <i className="fas fa-chevron-left -ml-px"></i>
                </a>
              </li>

              {/* Page numbers */}
              {pageNumbers.map(number => (
                <li key={number}>
                  <a
                    href="#!"
                    onClick={() => setCurrentPage(number)}
                    className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${currentPage === number ? "border-blueGray-500 bg-blueGray-500 text-white" : "border-blueGray-200 bg-white text-blueGray-500"}`}
                  >
                    {number}
                  </a>
                </li>
              ))}

              {/* Next */}
              <li>
                <a
                  href="#!"
                  onClick={() => currentPage < pageNumbers.length && setCurrentPage(currentPage + 1)}
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
