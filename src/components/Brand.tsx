import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const brandVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 5,
    rotate: 360,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const Brand = () => {
  return (
    <motion.div variants={brandVariants} initial="hidden" animate="visible">
      <Link to="/">
        <div>
          <StyledBrand>
            <span>GEORGIAN</span>
            <span>SPACE</span>
          </StyledBrand>
        </div>
      </Link>
    </motion.div>
  );
};

export const StyledBrand = styled.div`
  display: inline-block;
  justify-content: center;
  margin-top: 15px;
  margin-right: 40px;
  margin-left: 40px;
  border-top: solid 4px rgb(12, 33, 151);
  border-bottom: solid 4px white;
  font-weight: bolder;
  font-size: 20px;
  transform: scale(1.3);

  span:first-child {
    font-size: large;
    color: rgb(12, 33, 151);
  }

  span:last-child {
    font-size: large;
    color: white;
  }
`;

export default Brand;
