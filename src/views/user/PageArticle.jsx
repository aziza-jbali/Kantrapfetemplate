import React, { useState, useEffect } from "react";
import Vistornavbar from "../../components/Navbars/Vistornavbar.jsx";

const container = {
  direction: "ltr",
  background: "#F3F2F3",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Tahoma, sans-serif",
};

const introSection = {
  textAlign: "center",
  padding: "40px 20px",
  backgroundColor: "#E5E7EB",
};

const introTitle = {
  fontSize: "38px",
  fontWeight: "bold",
  color: "#1E3A8A",
  marginBottom: "15px",
};

const introText = {
  color: "#374151",
  fontSize: "18px",
  maxWidth: "700px",
  margin: "0 auto 25px auto",
  lineHeight: "1.8",
};

const inputStyle = {
  padding: "15px 15px",
  fontSize: "16px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  width: "500px",
  marginRight: "3px",
};

const button = {
  padding: "15px 20px",
  fontSize: "16px",
  borderRadius: "20px",
  border: "none",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
};

const articlesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  width: "90%",
  margin: "50px auto",
};

const card = {
  backgroundColor: "#FFFFFF",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const cardContent = {
  padding: "15px",
  textAlign: "left",
};

const cardTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1E3A8A",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "14px",
  color: "#374151",
  marginBottom: "10px",
};

const footer = {
  backgroundColor: "#1E3A8A",
  color: "white",
  textAlign: "center",
  padding: "20px 0",
  marginTop: "auto",
};

const footerLink = {
  color: "white",
  margin: "0 10px",
  textDecoration: "none",
};

export default function PageArticle() {
  const [query, setQuery] = useState("ذوي الإعاقة");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  // 🔍 دالة لتحديد اللغة حسب النص المدخل
  const detectLanguage = (text) => {
    const arabicRegex = /[\u0600-\u06FF]/;
    const frenchRegex = /[a-zA-Zàâçéèêëîïôûùüÿñæœ]/; // أحرف فرنسية/إنجليزية
    if (arabicRegex.test(text)) return "ar";
    if (frenchRegex.test(text)) return "fr";
    return "en"; // أي نص آخر نعتبره إنجليزي
  };

  // 📡 دالة لجلب المقالات من الـ API
  const fetchArticles = async (langToUse) => {
    setLoading(true);
    setErrormessage("");
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_5fa926f0089246d0ad42555ad7268079&language=${langToUse}&q=${encodeURIComponent(
          query
        )}`
      );

      if (!res.ok) {
        throw new Error(`Erreur du serveur: ${res.status}`);
      }

      const data = await res.json();
      if (data.totalResults === 0)
        throw new Error("Aucun article trouvé pour ce sujet.");
      setArticles(data.results || []);
    } catch (error) {
      setErrormessage(error.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  // 🧠 عند أول تحميل للصفحة
  useEffect(() => {
    const initialLang = detectLanguage(query);
    fetchArticles(initialLang);
  }, []);

  // 🔎 عند الضغط على زر البحث
  const handleSearch = () => {
    const lang = detectLanguage(query); // ✅ نحدد اللغة هنا
    fetchArticles(lang);
  };

  return (
    <div style={container}>
      <Vistornavbar />

      {/* Section d'introduction */}
      <section style={introSection}>
        <h2 style={introTitle}>Bienvenue sur la plateforme Inspiration</h2>
        <p style={introText}>
          Écrivez un sujet pour lire des articles intéressants.
        </p>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Écrivez votre sujet ici..."
            style={inputStyle}
          />
          <button style={button} onClick={handleSearch}>
            Rechercher
          </button>
        </div>
      </section>

      {/* Zone principale */}
      <main style={articlesGrid}>
        {loading && <Loader />}
        {!errormessage && !loading && <Articles articles={articles} />}
        {errormessage && <ErrorMessage errormessage={errormessage} />}
      </main>
    </div>
  );
}

// 🌀 مكوّن تحميل
function Loader() {
  return (
    <p style={{ textAlign: "center", color: "#1E3A8A", fontSize: "20px" }}>
      Chargement des articles...
    </p>
  );
}

// ⚠️ مكوّن الخطأ
function ErrorMessage({ errormessage }) {
  return (
    <div
      style={{
        backgroundColor: "#fee2e2",
        color: "#b91c1c",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        fontWeight: "bold",
        width: "90%",
        margin: "20px auto",
      }}
    >
      ⚠️ {errormessage}
    </div>
  );
}

// 📰 مكوّن عرض المقالات
function Articles({ articles }) {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} style={card}>
          <img
            src={
              article.image_url ||
              "https://via.placeholder.com/400x250?text=Pas+d'image"
            }
            alt="Article"
            style={imgStyle}
          />
          <div style={cardContent}>
            <h3 style={cardTitle}>{article.title}</h3>
            <p style={cardText}>
              {article.description || "Aucune description disponible."}
            </p>
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1D4ED8", fontWeight: "bold" }}
            >
              Lire plus →
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
