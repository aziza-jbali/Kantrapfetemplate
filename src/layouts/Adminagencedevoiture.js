// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";

// // components

// // import AdminagencedevoitureNavbar from "../views/Agencedevoitureadmin/Agencedevoitureadminnavbar";
// import AdminNavbar from "components/Navbars/AdminNavbar.js";

// import Sidebaragencedevoiture from "components/Sidebar/Sidebaragencedevoiture";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// // views

// import Dashboard from "views/admin/Dashboardagencedevoiture.js";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tablesagencedevoiture from "views/admin/Tablesagencedevoiture.js";
// // import Tablesdemesvoiture from "views/admin/Tablesdemesvoiture"

// export default function Adminagencedevoiture() {
//   return (
//     <>
//       <Sidebaragencedevoiture />
//       <div className="relative md:ml-64 bg-blueGray-100">
//         {/* <AdminagencedevoitureNavbar /> */}
//         <AdminNavbar />
        
//         {/* Header */}
//         <HeaderStats />
//         <div className="px-4 md:px-10 mx-auto w-full -m-24">
//           <Switch>
//             <Route path="/Adminagencedevoiture/dashboardagencedevoiture" exact component={Dashboard} />
//             {/* <Route path="/Adminagencedevoiture/Tablesdemesvoiture" exact component={Tablesdemesvoiture} /> */}
//             <Route path="/Adminagencedevoiture/settings" exact component={Settings} />
//             <Route path="/Adminagencedevoiture/tables" exact component={Tablesagencedevoiture} />
//             <Redirect from="/Adminagencedevoiture" to="/Adminagencedevoiture/dashboardagencedevoiture" /> 
//           </Switch>
//           <FooterAdmin />
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebaragencedevoiture from "components/Sidebar/Sidebaragencedevoiture";

// export default function Adminagencedevoiture() {
//   return (
//     <>
//       <Sidebaragencedevoiture />
//       <div className="relative md:ml-64 bg-blueGray-100">
//         <AdminNavbar />
//         <div className="px-4 md:px-10 mx-auto w-full -m-24">
//           <div>Test Dashboard</div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// مكونات الـ UI الأساسية
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebaragencedevoiture from "components/Sidebar/Sidebaragencedevoiture";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// الصفحات
import Dashboard from "views/admin/Dashboardagencedevoiture.js";
import Settings from "views/admin/Settings.js";
import Tablesagencedevoiture from "views/admin/Tablesagencedevoiture.js";
// الخرائط أو أي مكونات كبيرة نضعها لاحقًا
import Tablesdemesvoiture from "views/admin/Tablesdemesvoiture"

export default function Adminagencedevoiture() {
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

if (!token) {
  // يعني المستخدم مش داخل (ما عندوش توكن)
  return <Redirect to="/auth/login" />;
}

if (role !== "agence") {
  // يعني المستخدم عندو توكن لكن مش وكالة
  return <Redirect to="/" />;
}
  return (
    <div className="bg-blueGray-800 min-h-screen">
      <Sidebaragencedevoiture />
      <div className="relative md:ml-64 min-h-screen">
        <AdminNavbar />
        <HeaderStats title1="Véhicules"   title3="Reservation"  />

        <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
          <Switch>
            {/* Dashboard أولاً */}
            <Route
              path="/Adminagencedevoiture/dashboardagencedevoiture"
              exact
              component={Dashboard}
            />

            {/* Settings */}
            <Route
              path="/Adminagencedevoiture/settings"
              exact
              component={Settings}
            />

            {/* Tables */}
            <Route
              path="/Adminagencedevoiture/tables"
              exact
              component={Tablesagencedevoiture}
            />
             {/* Tables */}
            <Route
              path="/Adminagencedevoiture/Tablesdemesvoiture"
              exact
              component={Tablesdemesvoiture}
            />

            {/* أي Route غير معروف يعيد التوجيه للـ Dashboard */}
            <Redirect
              from="/Adminagencedevoiture"
              to="/Adminagencedevoiture/Tablesdemesvoiture"
            />
          </Switch>

          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}

