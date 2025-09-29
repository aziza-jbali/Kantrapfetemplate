import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminagencedevoitureNavbar from "../views/Agencedevoitureadmin/Agencedevoitureadminnavbar";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

import Sidebaragencedevoiture from "components/Sidebar/Sidebaragencedevoiture";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboardagencedevoiture.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tablesagencedevoiture from "views/admin/Tablesagencedevoiture.js";

export default function Adminagencedevoiture() {
  return (
    <>
      <Sidebaragencedevoiture />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <AdminagencedevoitureNavbar /> */}
        <AdminNavbar />
        
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/Adminagencedevoiture/dashboardagencedevoiture" exact component={Dashboard} />
            <Route path="/Adminagencedevoiture/maps" exact component={Maps} />
            <Route path="/Adminagencedevoiture/settings" exact component={Settings} />
            <Route path="/Adminagencedevoiture/tables" exact component={Tablesagencedevoiture} />
            <Redirect from="/Adminagencedevoiture" to="/Adminagencedevoiture/dashboardagencedevoiture" /> 
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
