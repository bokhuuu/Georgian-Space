import { Link, NavLink } from "react-router-dom";
// styles and flag
import { MainNavBrandStyles } from "../nav-styles/MainNavBrandStyles";
import geFlag from "../../../assets/icons/flags/ge.svg";

interface MainNavLink {
  to: string;
  label: string;
}

interface MainNavLinkProps {
  MainNavLinks: MainNavLink[];
}

const MainNav = ({ MainNavLinks }: MainNavLinkProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={geFlag}
              alt="georgian-flag"
              style={{
                borderRadius: "50%",
                height: "70px",
                transform: "translate(0,-12px)",
              }}
            />
            <MainNavBrandStyles>
              <span style={{ color: "rgb(12, 33, 151)" }}>Georgia</span>
              <br />
              <span style={{ color: "white" }}>Explorer</span>
            </MainNavBrandStyles>
          </Link>

          <button
            className="navbar-toggler mb-1 ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="row collapse navbar-collapse justify-content-end align-items-center"
            id="main-nav"
          >
            <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
              {MainNavLinks.map((MainNavLink) => (
                <li className="nav-item" key={MainNavLink.to}>
                  <NavLink
                    className="nav-link"
                    style={{ color: "rgb(12, 33, 151)", marginLeft: "10px" }}
                    to={MainNavLink.to}
                  >
                    {MainNavLink.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
