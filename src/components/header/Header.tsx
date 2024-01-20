import { Link } from "react-router-dom";
import Brand from "./Brand.tsx";
import AppNavigation from "../navigation/AppNavigation.tsx";
import { motion } from "framer-motion";
import styled from "styled-components";
import logoIcon from "../../assets/icons/logoIcon.jpg";
import IconButtons from "../iconButtons/IconButtons.tsx";
import LanguageSelector from "../../i18next/LanguageSelector.tsx";

const Header = () => {
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
            className="col d-none d-md-flex align-items-center mt-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 2 }}
          >
            <IconButtons />
            <LanguageSelector />
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
