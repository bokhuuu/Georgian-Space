import { Link } from "react-router-dom";
import Brand from "./Brand.tsx";
import AppNavigation from "../Naviagtion/AppNavigation.tsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../../assets/icons/Logo.jpg";

const Header = () => {
  return (
    <StyledHeader className="container-fluid">
      <div className="row ">
        <div className="col d-flex ms-lg-5">
          <Link to="/">
            <LogoImg
              src={logo}
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
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              modal
            </button>
            <button className="">WE</button>
            <button>EX</button>
            <button>TH</button>
            <button>TR</button>
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

const LogoImg = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 20px;
`;

export default Header;
