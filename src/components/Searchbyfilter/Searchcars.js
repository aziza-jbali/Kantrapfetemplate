import React, { useState } from "react";
import { FaWheelchair, FaCarSide, FaTools, FaEuroSign } from "react-icons/fa";

function HandicapFilter() {
  const [filters, setFilters] = useState({
    rampe: false,
    elevator: false,
    seats: 2, // nombre de sièges par défaut
    espaceFauteuil: "",
    support: "",
    prix: 50,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: Number(value) });
  };

  return (
    <div
      className="p-4 bg-light rounded-4 shadow-sm"
      style={{
        width: "100%",
        fontFamily: "Arial",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      <h5 className="fw-bold text-black text-center w-100">
        🚗 Filtre - Accessibilité Handicapé
      </h5>

      {/* Rampe */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="rampe"
          checked={filters.rampe}
          onChange={handleCheckboxChange}
          id="rampe"
        />
        <label className="form-check-label" htmlFor="rampe">
          Rampe d’accès
        </label>
      </div>

      {/* Élévateur */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="elevator"
          checked={filters.elevator}
          onChange={handleCheckboxChange}
          id="elevator"
        />
        <label className="form-check-label" htmlFor="elevator">
          Élévateur
        </label>
      </div>

      {/* Nombre de sièges (slider) */}
      <div
        style={{
          width: "220px",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        }}
      >
        <label
          className="form-label fw-bold d-block"
          style={{
            color: "#0d6efd",
            marginBottom: "8px",
            fontSize: "15px",
          }}
        >
          Nombre de sièges :{" "}
          <span style={{ color: "#198754", fontWeight: "bold" }}>
            {filters.seats}
          </span>
        </label>

        <input
          type="range"
          min="2"
          max="20"
          step="1"
          name="seats"
          value={filters.seats}
          onChange={handleRangeChange}
          style={{
            width: "100%",
            accentColor: "#0d6efd",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Espace Fauteuil */}
      {/* <div>
        <label htmlFor="espaceFauteuil" className="form-label d-block">
          Espace fauteuil
        </label>
        <select
          className="form-select"
          style={{ width: "140px" }}
          name="espaceFauteuil"
          value={filters.espaceFauteuil}
          onChange={handleSelectChange}
        >
          <option value="">-- Choisir --</option>
          <option value="Petit">Petit</option>
          <option value="Moyen">Moyen</option>
          <option value="Large">Large</option>
        </select>
      </div> */}

      {/* Support */}
      <div>
        <label htmlFor="support" className="form-label d-block">
          Support
        </label>
        <select
          className="form-select"
          style={{ width: "120px" }}
          name="support"
          value={filters.support}
          onChange={handleSelectChange}
        >
          <option value="">-- Choisir --</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>

      {/* Prix par jour */}
      <div
        style={{
          width: "220px",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        }}
      >
        <label
          className="form-label fw-bold d-block"
          style={{
            color: "#0d6efd",
            marginBottom: "8px",
            fontSize: "15px",
          }}
        >
          Prix par jour :{" "}
          <span style={{ color: "#198754", fontWeight: "bold" }}>
            {filters.prix} DT
          </span>
        </label>

        <input
          type="range"
          min="10"
          max="500"
          step="10"
          name="prix"
          value={filters.prix}
          onChange={handleRangeChange}
          style={{
            width: "100%",
            accentColor: "#0d6efd",
            cursor: "pointer",
          }}
        />
      </div>

      <button className="btn btn-primary rounded-pill px-4">Rechercher</button>
    </div>
  );
}

export default HandicapFilter;
