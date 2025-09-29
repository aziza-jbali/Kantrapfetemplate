import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Adminagencedevoiture from "layouts/Adminagencedevoiture";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import CarBooking from "views/user/Carbooking";
import Dashboardagencedevoiture from "views/admin/Dashboardagencedevoiture";
import AddCarPage from "views/Agencedevoitureadmin/AddCarPage"
import Tablesagencedevoiture from "views/admin/Tablesagencedevoiture"
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/Adminagencedevoiture" component={Adminagencedevoiture} />
      <Route path="/admin" component={Admin} />

      <Route path="/auth" component={Auth} />
      <Route path="/dashboardagencedevoiture" exact component={ Adminagencedevoiture } />
      <Route path="/AddCarPage" element component={AddCarPage} />
       {/* <Route path="/dashboardagencedevoiture/tables" exact component={Tablesagencedevoiture} />   */}
      
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      <Route path="/booking/:id" element component={CarBooking} />
      {/* <Route path="/Dashboardagencedevoiture" element component={Dashboardagencedevoiture} /> */}

     


      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
