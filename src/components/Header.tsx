import { Link } from "react-router-dom";
import AppNavigation from "../navigation/AppNavigation.tsx";
import LanguageSelector from "../i18next/LanguageSelector.tsx";
import Brand from "./Brand.tsx";
import CommandBar from "./CommandBar.tsx";
import { motion } from "framer-motion";
import styled from "styled-components";
import logoIcon from "../assets/icons/logoIcon.jpg";

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
    <StyledHeader className="header container-fluid">
      <div className="row ">
        <div className="col d-flex ms-lg-4">
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
            className="col d-none d-md-flex align-items-center mt-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 2 }}
          >
            <CommandBar />
            <LanguageSelector />
          </motion.div>
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
  /* background-color: rgb(74, 89, 170); */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const StyledLogoIcon = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 5px;
`;

export default Header;
