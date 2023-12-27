import { NavLink } from "react-router-dom";

interface CultureNaviLink {
  to: string;
  label: string;
}

interface CultureNaviProps {
  cultureNaviLinkList: CultureNaviLink[];
}

const CultureNavi = ({ cultureNaviLinkList }: CultureNaviProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-4">
      <div className="container-fluid">
        <div className="row justify-content-end align-items-center">
          <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
            {cultureNaviLinkList.map((cultureNaviLink) => (
              <li className="nav-item" key={cultureNaviLink.to}>
                <NavLink
                  className="nav-link"
                  style={{
                    color: "rgba(54, 63, 143, 0.534)",
                    marginLeft: "5px",
                    transform: "translate(5px,-35px)",
                  }}
                  to={cultureNaviLink.to}
                >
                  {cultureNaviLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CultureNavi;
