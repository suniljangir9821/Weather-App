import React from "react";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg  bg-body-tertiary shadow-sm"
      data-bs-theme={props.mode}
      style={{height: '4.2rem'}}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Weather<br /> &nbsp;&nbsp; forecast
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              {props.mode === 'light' ? "Enable dark mode" : "Enable light mode"}  
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
