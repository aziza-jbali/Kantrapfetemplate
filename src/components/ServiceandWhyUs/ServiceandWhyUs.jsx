import React from "react";

function ServicesAndWhyUs() {
  return (
    <div style={{ padding: "50px 20px", height: "900px", backgroundColor: "#bbbbbf" }}>
      {/* Nos Services */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Nos Services
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "40px" }}>🚗</span>
            <h3 style={{ margin: "10px 0" }}>Location de voitures adaptées</h3>
            <p>Nous proposons des voitures entièrement équipées pour les personnes en situation de handicap.</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {/* <span style={{ fontSize: "40px" }}>🦾</span>
            <h3 style={{ margin: "10px 0" }}>Dispositifs médicaux intelligents</h3>
            <p>Les appareils médicaux les plus récents pour faciliter votre vie quotidienne.</p> */}

            <span style={{ fontSize: "40px" }}>🦾</span>
<h3 style={{ margin: "10px 0" }}>Annonces pour personnes en situation de handicap</h3>
<p>
  Découvrez ou publiez des annonces dédiées aux équipements et services qui
  facilitent la vie des personnes handicapées. <br />
  <strong>Tu peux aussi ajouter ton propre annonce !</strong>
</p>

          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "40px" }}>📖</span>
            <h3 style={{ margin: "10px 0" }}>Articles de santé</h3>
            <p>
  Des conseils, articles et témoignages inspirants pour vous aider à mieux comprendre votre santé, 
  faire les meilleurs choix et améliorer votre bien-être au quotidien.
</p>

          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
          Pourquoi nous choisir ?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>⚡</span>
            <h4>Service rapide</h4>
            <p>Nous garantissons un service rapide et efficace.</p>
          </div>
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>🚙</span>
            <h4>Large choix de voitures</h4>
            <p>Un large éventail de véhicules entièrement équipés.</p>
          </div>
          <div style={{ width: "200px" }}>
            <span style={{ fontSize: "40px" }}>📞</span>
            <h4>Assistance 24h/24 et 7j/7</h4>
            <p>Notre équipe d’assistance est toujours disponible pour vous aider.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesAndWhyUs;
