import React from "react";

const Offcanvas = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-right"
        tabindex="-1"
        id="offcanvas"
        data-toggle="offcanvas"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="close"
            data-toggle="offcanvas"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="offcanvas-title">Menu</h5>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
