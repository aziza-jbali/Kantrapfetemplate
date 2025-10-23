import React from "react";
import img1 from "../../assets/img/chat.png";
import "../component.css"

export default function KarmaAutoSection() {
  return (
    <section className="karma-section">
      <div className="karma-content">
        {/* Texte gauche */}
        <div className="karma-text">
          <h2>Karma Auto – Location de Véhicules Accessibles</h2>
          <p>
            <strong>Karma Auto est une plateforme dédiée à </strong>
            <strong> la location de véhicules adaptés</strong>, 
            <strong> la vente des piéces</strong> 
            <strong> pour les personnes en situation de handicap, et propose également des annonces pour faciliter leur quotidien : offres d'emploi, auto-écoles spécialisées pour passer le permis, associations d'aide aux personnes handicapées et bien plus encore.</strong>
            <br /><br />
            Notre mission est de rendre la mobilité plus simple, plus sûre et plus digne, 
            en alliant technologie moderne et solutions pratiques qui renforcent l'autonomie.
          </p>
          <button className="style-button">Découvrir Nos Véhicules</button>
        </div>

        {/* Image droite */}
        <div className="karma-image">
          <img src={img1} alt="Femme en fauteuil roulant" />
        </div>
      </div>
    </section>
  );
}