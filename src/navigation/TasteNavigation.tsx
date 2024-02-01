// import { NavLink } from "react-router-dom";
import Taste from "../pages/taste/Taste";

const TasteNavigation = () => {
  // const TasteNavigationLinkList = [
  //   { to: "art", label: "Art" },
  //   { to: "literature", label: "Literature" },
  //   { to: "poliphony", label: "Poliphony" },
  // ];

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <ul className="col navbar-nav fw-bold ms-3 mt-1 justify-content-start">
              {TasteNavigationLinkList.map((TasteNavigationLink) => (
                <li className="nav-item" key={TasteNavigationLink.to}>
                  <NavLink className="nav-link" to={TasteNavigationLink.to}>
                    {TasteNavigationLink.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}
      <Taste />
    </>
  );
};

export default TasteNavigation;
