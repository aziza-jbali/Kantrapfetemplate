import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// مكونات الـ UI الأساسية
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebarutilisateur from "components/Sidebar/Sidebarutilisateur";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// الصفحات
import Dashboard from "views/admin/Dashboardagencedevoiture.js";
import Settings from "views/admin/Settings.js";
// الخرائط أو أي مكونات كبيرة نضعها لاحقًا
import Tablesdemesannoncesuser from "views/admin/Tablesdemesannoncesuser";

export default function Adminagencedevoiture() {
  return (
    <>
      <Sidebarutilisateur/>
      <div className="relative md:ml-64 bg-blueGray-800" style={{height:"100vh"}}>
        <AdminNavbar />
        <HeaderStats title1="Véhicules"   title3="Reservation"  />

        <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
          <Switch>
            {/* Dashboard أولاً */}
            {/* <Route
              path="/Utilisateur/dashboardutilisateur"
              exact
              component={Dashboard}
            /> */}

            {/* Settings */}
            <Route
              path="/Utilisateur/settings"
              exact
              component={Settings}
            />

            {/* Tables */}
            <Route
              path="/Utilisateur/Mes-Annonces"
              exact
              component={Tablesdemesannoncesuser}
            />
             {/* Tables */}
          

            {/* أي Route غير معروف يعيد التوجيه للـ Dashboard */}
            <Redirect
              from="/Utilisateur"
              to="/Utilisateur/Mes-Annonces"
            />
          </Switch>

          <FooterAdmin />
        </div>
      </div>
    </>
  );
}