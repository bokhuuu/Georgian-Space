import { NavLink } from "react-router-dom";

interface CultureNavLink {
  to: string;
  label: string;
}

interface CultureNavLinkProps {
  CultureNavLinks: CultureNavLink[];
}

const CultureNav = ({ CultureNavLinks }: CultureNavLinkProps) => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
              {CultureNavLinks.map((CultureNavLink) => (
                <li className="nav-item" key={CultureNavLink.to}>
                  <NavLink
                    className="nav-link"
                    style={{
                      color: "rgba(54, 63, 143, 0.534)",
                      marginLeft: "5px",
                      transform: "translate(5px,-35px)",
                    }}
                    to={CultureNavLink.to}
                  >
                    {CultureNavLink.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default CultureNav;