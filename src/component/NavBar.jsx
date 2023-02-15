import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Link className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          style={{ width: "100px", height: "35px" }}
        />
      </Link>
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
            <Link className="nav-link font-weight-bold" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <Link className="nav-link font-weight-bold" to="/tv-shows">
            TV Shows
          </Link>
          <li className="nav-item">
            <Link className="nav-link font-weight-bold">Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-weight-bold">Recently Added</Link>
          </li>
          <li className="nav-item"></li>
        </ul>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </div>
    </nav>
  );
};

export default NavBar;
