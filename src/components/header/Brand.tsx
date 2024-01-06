import { Link } from "react-router-dom";
import geFlag from "../../assets/icons/flags/ge.svg";
import styled from "styled-components";
import { Variants, motion } from "framer-motion";

const brandVariants = {
  hidden: {
    rotate: 150,
    y: "-100vh",
  },
  visible: {
    rotate: 0,
    y: 0,
    transition: { type: "spring", delay: 0.2, stiffness: 40 },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Brand = () => {
  return (
    <motion.div
      className="brand"
      variants={brandVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="brand-link" to="/">
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          animate={{ y: -20 }}
          src={geFlag}
          alt="georgian-flag"
          style={{
            borderRadius: "50%",
            height: "88px",
            marginRight: 10,
          }}
        />
        <StyledBrand>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div style={{ color: "rgb(12, 33, 151)" }}>Georgia</div>
            <motion.div style={{ color: "white" }}>Explorer</motion.div>
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
  border-top: solid 3px rgb(12, 33, 151);
  border-bottom: solid 3px white;
  font-weight: bolder;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 25px;
  scale: 1.5;
`;
