import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Vistornavbar({ isTransparent = false }) {
  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", to: "/" },
    { name: "Véhicules", to: "/landing" },
    { name: "Annonces", to: "/annonces" },
    { name: "Blog", to: "/Articles" },
    { name: "Connexion", to: "/auth/login" },
  ];

  // تحديد موقع الخط السفلي أسفل الصفحة النشطة
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.to === location.pathname);
    const activeBtn = navRef.current.children[activeIndex] || navRef.current.children[0];
    const underline = underlineRef.current;

    if (activeBtn && underline) {
      const rect = activeBtn.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();
      underline.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
      underline.style.width = `${rect.width * 0.8}px`;
    }
  }, [location.pathname]);

  const navStyle = {
    backgroundColor: isTransparent ? "transparent" : "#F3F2F3",
    boxShadow: isTransparent ? "none" : "0 4px 12px rgba(0,0,0,0.1)",
    position: isTransparent ? "absolute" : "relative",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 50,
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: isTransparent ? "#fff" : "#000",
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    position: "relative",
    background: "none",
    border: "none",
  };

  // اللون يتغير حسب الشفافية
  const underlineColor = isTransparent
    ? "linear-gradient(90deg, rgba(255,255,255,0.2), white, rgba(255,255,255,0.2))"
    : "linear-gradient(90deg, rgba(0,0,0,0.2), black, rgba(0,0,0,0.2))";

  return (
    <nav
      style={navStyle}
      className="navbar-visitor flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <Link
            style={{ ...linkStyle, fontSize: "1.5rem", marginRight: "1rem" }}
            to="/"
          >
            Karama-Auto
          </Link>
        </div>

        {/* Links */}
        <div className="lg:flex flex-grow items-center">
          <ul
            ref={navRef}
            className="flex flex-col lg:flex-row list-none ml-auto"
            style={{ position: "relative" }}
          >
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link style={linkStyle} to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* خط الفلاش السفلي */}
            <span
              ref={underlineRef}
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "0",
                height: "5px",
                width: "0",
                background: underlineColor,
                borderRadius: "2px",
                transform: "translateX(-50%)",
                transition: "left 0.4s ease, width 0.4s ease",
                animation: "flashMove 1.5s infinite linear",
              }}
            ></span>
          </ul>
        </div>
      </div>

      {/* تعريف أنيميشن الفلاش */}
      <style>
        {`
          @keyframes flashMove {
            0% { background-position: -100px 0; }
            100% { background-position: 100px 0; }
          }
        `}
      </style>
    </nav>
  );
}

export default Vistornavbar;
