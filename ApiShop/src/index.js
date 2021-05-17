import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Index from "layouts/Index";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
    
      <Route path="/admin" render={() => {
        return localStorage.getItem("accessToken") ? <Admin /> : <Redirect to="/auth" />
      }}>

      </Route>  
      
      <Route exact path="/" render={()=>{ return <Index/>}} />

      <Route  path="/auth" render={()=>{return <Auth/>}} />

      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
