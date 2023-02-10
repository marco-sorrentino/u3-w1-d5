import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <a className="navbar-brand" href="alt">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
            style={{ width: "100px", height: "35px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="alt">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="alt">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="alt">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="alt">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="alt">
                My List
              </a>
            </li>
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </nav>
    );
  }
}

export default NavBar;
