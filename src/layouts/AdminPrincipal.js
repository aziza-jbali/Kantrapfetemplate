
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// مكونات الـ UI الأساسية
import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebaragencedevoiture from "components/Sidebar/Sidebaragencedevoiture";
import SidebarAdminprincipal from "components/Sidebar/SidebarAdminprincipal"
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// الصفحات
import Dashboard from "views/admin/Dashboardagencedevoiture.js";
import Settings from "views/admin/Settings.js";
import Tablesuseradminprincipale from "views/admin/Tablesuseradminprincipale.js";
// الخرائط أو أي مكونات كبيرة نضعها لاحقًا
import Tablesdemesvoiture from "views/admin/Tablesdemesvoiture"
import Tableuserpub from "views/admin/Tableuserpub"
export default function AdminPrincipal() {
  return (
    <div className="bg-blueGray-800 min-h-screen">
      <SidebarAdminprincipal />
      <div className="relative md:ml-64">
        <AdminNavbar />
        <HeaderStats title1="Véhicules" title3="Annonces" />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* Dashboard أولاً */}
            <Route
              path="/AdminPrincipal/dashboardagencedevoiture"
              exact
              component={Dashboard}
            />
  <Route
              path="/AdminPrincipal/settings"
              exact
              component={Settings}
            />
            {/* Tables */}
            <Route
              path="/AdminPrincipal/tables"
              exact
              component={Tablesuseradminprincipale}
            />
            <Route
              path="/AdminPrincipal/tables1"
              exact
              component={Tableuserpub}
            />

            {/* أي Route غير معروف يعيد التوجيه للـ Dashboard */}
            <Redirect
              from="/AdminPrincipal"
              to="/AdminPrincipal/tables"
            />
          </Switch>

          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}
