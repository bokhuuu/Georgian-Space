import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navVariants = {
  initiation: {
    opacity: 0,
  },
  animation: {
    scale: 1.1,
    opacity: 1,
    transition: { type: "spring", delay: 1, staggerChildren: 0.3 },
  },
};

const linkVariants = {
  initiation: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
  },
};

const MainNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  const mainNavLinkList = [
    { to: "/", label: "Home" },
    { to: "history", label: "History" },
    { to: "geography", label: "Geography" },
    { to: "culture", label: "Culture" },
    { to: "cuisine", label: "Cuisine" },
    { to: "wine", label: "Wine" },
    { to: "landmarks", label: "Landmarks" },
    { to: "nightlife", label: "Nightlife" },
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-light pb-4"
      variants={navVariants}
      initial="initiation"
      animate="animation"
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
                className="nav-item"
                key={mainNavLink.to}
                variants={linkVariants}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 12px rgb(255,255,255)",
                  boxShadow: "0px 0px 12px rgb(255,255,255)",
                  transition: {
                    duration: 0.3,
                    repeat: 2,
                    repeatType: "mirror",
                  },
                }}
              >
                <NavLink
                  className="nav-link"
                  style={{ color: "rgb(12, 33, 151)", marginLeft: "8px" }}
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
