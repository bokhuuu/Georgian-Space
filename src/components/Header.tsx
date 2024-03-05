import { Link } from "react-router-dom";
import AppNavigation from "../navigation/AppNavigation.tsx";
import LanguageSelector from "../i18next/LanguageToggler.tsx";
import Brand from "./Brand.tsx";
import CommandBar from "./CommandBar.tsx";
import { motion } from "framer-motion";
import styled from "styled-components";
import logoIcon from "../../public/assets/icons/logo.jpg";

const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 5,
    y: 12,
    scaleX: [1, 1.3, 1],
    transition: { duration: 2 },
  },
};

const Header = () => {
  return (
    <StyledHeader className="header container-fluid ">
      <div>
        <div className="col d-flex ms-lg-3">
          <Link to="/">
            <StyledLogoIcon
              src={logoIcon}
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            />
          </Link>
          <div className="col d-flex justify-content-end justify-content-md-start">
            <Brand />

            <motion.div
              className="col d-none d-md-flex align-items-center mt-3 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, delay: 2 }}
            >
              <CommandBar />
              <LanguageSelector />
            </motion.div>
          </div>
        </div>
        <AppNavigation />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledLogoIcon = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 5px;
`;

export default Header;
