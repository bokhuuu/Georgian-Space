import styled from "styled-components";
import React from "react";
import arrowRight from "../../assets/symbols/arrow-right.svg";
import { Variants, motion } from "framer-motion";

interface MiniDashboardCardProps {
  title?: string;
  content: React.ReactNode;
  button?: React.ReactNode;
  className?: string;
}

const btnVariants: Variants = {
  hover: {
    scaleX: 1.2,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const MiniDashboardCard = ({ title, content }: MiniDashboardCardProps) => {
  return (
    <StyledMiniDashboard className="dashboard-card card border-2">
      {title && (
        <>
          <div className="col" style={{ borderBottom: "solid white px" }}>
            <h4 className="card-header">{title}</h4>
          </div>
          <button
            className="d-flex justify-content-center mb-2"
            style={{ border: "4px dotted white" }}
          >
            <motion.img
              variants={btnVariants}
              whileHover="hover"
              src={arrowRight}
              style={{
                backgroundColor: "white",
                width: "30px",
                marginRight: "20px",
                marginBottom: "-20px",
                borderRadius: "15%",
              }}
            />
          </button>
        </>
      )}
      <StyledContent className="card-body fw-light">{content}</StyledContent>
    </StyledMiniDashboard>
  );
};

const StyledMiniDashboard = styled.div`
  opacity: 0.9;
  position: "relative";
  margin-bottom: 10px;
`;

const StyledContent = styled.div`
  /* font-weight: lighter; */
  /* font-size: small; */
`;

export default MiniDashboardCard;
