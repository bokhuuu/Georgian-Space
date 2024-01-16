import { NavLink } from "react-router-dom";

const TasteNav = () => {
  const tasteNavLinkList = [
    { to: "art", label: "Art" },
    { to: "literature", label: "Literature" },
    { to: "poliphony", label: "Poliphony" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-4">
      <div className="container-fluid">
        <div className="row justify-content-end align-items-center">
          <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
            {tasteNavLinkList.map((tasteNavLink) => (
              <li className="nav-item" key={tasteNavLink.to}>
                <NavLink
                  className="nav-link"
                  // style={{
                  //   color: "rgba(54, 63, 143, 0.534)",
                  //   marginLeft: "5px",
                  //   transform: "translate(5px,-35px)",
                  // }}
                  to={tasteNavLink.to}
                >
                  {tasteNavLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TasteNav;
