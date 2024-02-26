import { motion } from "framer-motion";
import styled from "styled-components";

interface MainCardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const MainCard = ({ title, content }: MainCardProps) => {
  return (
    <StyledMainCard
      className="custom-card card border-2"
      style={{ height: "322px" }}
    >
      <div className="card-body">
        <StyledMainCardTitle
          className="card-title text-center"
          animate={{
            scaleX: 1.05,
            textShadow: "0px 0px 20px rgb(255,255,255)",
            boxShadow: "0px 0px 20px rgb(255,255,255)",
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          {title}
        </StyledMainCardTitle>
        <StyledMainCardContent className="card-body">
          {content}
        </StyledMainCardContent>
      </div>
    </StyledMainCard>
  );
};

const StyledMainCard = styled.div`
  /* opacity: 0.9; */
  position: "relative";
  overflow-y: auto;
`;

const StyledMainCardTitle = styled(motion.h6)`
  display: flex;
  font-size: x-large;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bolder;
  /* border: white solid 1px; */
  position: sticky;
  top: 1px;
  padding: 5px;
`;

const StyledMainCardContent = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-align: left;
  font-weight: bolder;
  padding-top: 5px;
  padding-bottom: 0px;
`;

export default MainCard;
