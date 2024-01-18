import { Link } from "react-router-dom";
import Brand from "./Brand.tsx";
import AppNavigation from "../Naviagtion/AppNavigation.tsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import brandLogo from "../../assets/logos/brandLogo.jpg";
// import weatherIcon from "../../assets/icons/weatherIcon.svg";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";
import geFlagIcon from "../../assets/icons/geFlagIcon.svg";
import gbFlagIcon from "../../assets/icons/gbFlagIcon.svg";
import weatherIcon from "../../assets/icons/weatherIcon.svg";
import exchangeIcon from "../../assets/icons/exchangeIcon.svg";
// import LanguageTog from "../../utils/ToggleLang.tsx";

const Header = () => {
  return (
    <StyledHeader className="container-fluid">
      <div className="row ">
        <div className="col d-flex ms-lg-5">
          <Link to="/">
            <StyledBrandLogo
              src={brandLogo}
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            />
          </Link>
          <Brand />
          <div className="col d-none d-md-flex align-items-center justify-content-end gap-3">
            {/* Items for small screens */}
            <button
              type="button"
              className="icon-btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{
                backgroundImage: `url(${formIcon})`,
              }}
            ></button>
            <button
              className="icon-btn"
              style={{
                backgroundImage: `url(${themeIcon})`,
              }}
            ></button>
            <button
              className="icon-btn"
              style={{
                backgroundImage: `url(${weatherIcon})`,
              }}
            ></button>
            <button
              className="icon-btn"
              style={{
                backgroundImage: `url(${exchangeIcon})`,
              }}
            ></button>
            <div className="d-flex flex-row gap-1">
              <button
                className="icon-btn"
                style={{
                  backgroundImage: `url(${gbFlagIcon})`,
                  height: 35,
                  borderRadius: "50%",
                }}
              ></button>
              <button
                className="icon-btn"
                style={{
                  backgroundImage: `url(${geFlagIcon})`,
                  height: 35,
                  borderRadius: "50%",
                }}
              ></button>
            </div>
            {/* <LanguageTog /> */}
          </div>
        </div>

        <AppNavigation />
      </div>
    </StyledHeader>
  );
};

const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 20,
    scaleY: [1, 1.3, 1],
    transition: { duration: 2 },
  },
};
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #9b9bcc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const StyledBrandLogo = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 20px;
  margin-top: -10px;
`;

export default Header;
