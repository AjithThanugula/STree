import React, { Component } from "react";
import "./Layout.css";
import logo from "../../Logos/stree1.png";
import SideNav from "../SideNav/SideNav";
import Organization from "../Organizations/Organizations";
import Service from "../Services/Services.js";
import Offering from "../Offerings/Offerings.js";
import { Link, Route, Switch } from "react-router-dom";
export class Layout extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <a href="#home">
            <img src={logo} alt="Logo" />;
          </a>
          <a class="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/Services">Services</Link>
              <Link to="/Organizations">Organizations</Link>
              <Link to="/Offerings">Offerings</Link>
            </div>
          </div>
          <div class="search-container">
            <input type="text" placeholder="Search.." name="search" />
          </div>
        </div>
        <div class="sidenav">
          <SideNav />
        </div>

        <div class="content">
          <Route path="/" exact render={() => <h1>Hello</h1>} />
          <Switch>
            <Route path="/Organizations" exact component={Organization} />
            <Route path="/Services" exact component={Service} />
            <Route path="/Offerings" exact component={Offering} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
