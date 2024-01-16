import { NavLink } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    scaleY: 1.3,
    opacity: 1,
    transition: { type: "spring", delay: 1.5, staggerChildren: 3 },
  },
};

const linkVariants: Variants = {
  hover: {
    scale: 1.1,
    translateX: 10,
    x: 5,
    y: -2,
    textShadow: "0px 0px 12px rgb(255,255,255)",
    boxShadow: "0px 0px 12px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const MainNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  const mainNavLinkList = [
    { to: "/", label: "Home" },
    { to: "discovery", label: "Discovery" },
    { to: "explore", label: "Explore" },
    { to: "taste", label: "Taste" },
    // { to: "cuisine", label: "Cuisine" },
    // { to: "wine", label: "Wine" },
    { to: "leisure", label: "Leisure" },
    { to: "wellness", label: "Wellness" },
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-light pb-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <button
          className="navbar-toggler mb-1 ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`row collapse navbar-collapse ${
            isNavCollapsed ? "" : "show"
          }`}
          id="main-nav"
        >
          <ul
            className="col-md navbar-nav fw-bold ms-3 mt-1 justify-content-start"
            onClick={closeNav}
          >
            {mainNavLinkList.map((mainNavLink) => (
              <motion.li
                className="nav-item d-flex justify-content-center align-items-center"
                key={mainNavLink.to}
                variants={linkVariants}
                whileHover="hover"
              >
                <NavLink
                  className="nav-link"
                  style={{ color: "rgb(12, 33, 151)", marginLeft: "25px" }}
                  to={mainNavLink.to}
                >
                  {mainNavLink.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default MainNav;
