import React, { Component } from "react";
import { Container } from "react-bootstrap";

class SubNav extends Component {
  render() {
    return (
      <Container fluid>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres &nbsp;
              </button>
              <div
                class="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href="alt">
                  Comedy
                </a>
                <a className="dropdown-item text-white bg-dark" href="alt">
                  Drama
                </a>
                <a className="dropdown-item text-white bg-dark" href="alt">
                  Thriller
                </a>
              </div>
            </div>
          </div>
          <div>
            <i class="fa fa-th-large icons"></i>
            <i class="fa fa-th icons"></i>
          </div>
        </div>
      </Container>
    );
  }
}

export default SubNav;
