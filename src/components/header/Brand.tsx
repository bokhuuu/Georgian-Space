import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const brandVariants = {
  hidden: {
    rotate: 60,
    y: "-100vh",
  },
  visible: {
    rotate: 0,
    y: 0,
    transition: { type: "spring", delay: 0.2, stiffness: 40 },
  },
};

const Brand = () => {
  return (
    <motion.div
      className="brand d-inline"
      variants={brandVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="brand-link" to="/">
        <StyledBrand>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div style={{ color: "rgb(12, 33, 151)", fontSize: "x-large" }}>
              GEORGIAN
            </div>
            <motion.div style={{ color: "white" }}>SPACE</motion.div>
          </motion.div>
        </StyledBrand>
      </Link>
    </motion.div>
  );
};

export default Brand;

export const StyledBrand = styled.div`
  display: inline-block;
  justify-content: center;
  margin-left: 35px;
  border-top: solid 5px rgb(12, 33, 151);
  border-bottom: solid 5px white;
  font-weight: bolder;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 40px;
  font-size: 25px;
  scale: 1.5;
`;
