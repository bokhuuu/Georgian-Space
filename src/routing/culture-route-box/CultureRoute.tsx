import { NavLink } from "react-router-dom";

interface CultureRouteLink {
  to: string;
  label: string;
}

interface CultureRouteProps {
  cultureRouteLinksList: CultureRouteLink[];
}

const CultureRoute = ({ cultureRouteLinksList }: CultureRouteProps) => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
              {cultureRouteLinksList.map((cultureRouteLink) => (
                <li className="nav-item" key={cultureRouteLink.to}>
                  <NavLink
                    className="nav-link"
                    style={{
                      color: "rgba(54, 63, 143, 0.534)",
                      marginLeft: "5px",
                      transform: "translate(5px,-35px)",
                    }}
                    to={cultureRouteLink.to}
                  >
                    {cultureRouteLink.label}
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

export default CultureRoute;
