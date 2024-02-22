import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const brandVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    x: 5,
    y: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
    rotate: 360,
  },
};

const Brand = () => {
  return (
    <motion.div variants={brandVariants} initial="hidden" animate="visible">
      <Link to="/">
        <div>
          <StyledBrand>
            <span>Georgian</span>
            <span>Space</span>
          </StyledBrand>
        </div>
      </Link>
    </motion.div>
  );
};

export const StyledBrand = styled.div`
  display: inline-block;
  justify-content: center;
  margin-top: 30px;
  margin-right: 40px;
  margin-left: 40px;
  font-size: 20px;
  font-weight: bolder;
  transform: scale(1.3);
  border-top: solid 4px rgb(12, 33, 151);
  border-bottom: solid 4px white;

  span:first-child {
    color: rgb(12, 33, 151);
    font-size: large;
  }

  span:last-child {
    font-size: large;
    color: white;
  }
`;

export default Brand;
