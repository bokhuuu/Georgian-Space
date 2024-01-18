import { Link } from "react-router-dom";
import Brand from "./Brand.tsx";
import AppNavigation from "../Naviagtion/AppNavigation.tsx";
import useTheme from "../../themes/useTheme.tsx";
import LanguageSelector from "../../i18next/useLanguage.tsx";
import { motion } from "framer-motion";
import styled from "styled-components";
import logoIcon from "../../assets/icons/logoIcon.jpg";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";
import weatherIcon from "../../assets/icons/weatherIcon.svg";
import exchangeIcon from "../../assets/icons/exchangeIcon.svg";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <StyledHeader className="container-fluid">
      <div className="row ">
        <div className="col d-flex ms-lg-5">
          <Link to="/">
            <StyledLogoIcon
              src={logoIcon}
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            />
          </Link>
          <Brand />
          <motion.div
            className="col d-none d-md-flex align-items-center gap-3 gap-lg-4 justify-content-end mt-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 2 }}
            whileHover={{
              boxShadow: "5px 5px 5px 5px  rgba(33, 62, 158, 0.514)",
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
          >
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
            <div className="d-none d-md-flex ms-5 gap-4">
              <button
                type="button"
                className="icon-btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  backgroundImage: `url(${formIcon})`,
                  width: 40,
                  height: 30,
                  transform: "rotate(45deg)",
                }}
              ></button>
              <button
                className="icon-btn"
                onClick={toggleTheme}
                style={{
                  backgroundImage: `url(${themeIcon})`,
                  // borderRadius: "50%",
                  width: 40,
                  height: 30,
                  transform: "rotate(45deg)",
                }}
              ></button>

              <LanguageSelector />
            </div>
          </motion.div>
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

const StyledLogoIcon = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 5px;
`;

export default Header;
