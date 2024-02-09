import { motion } from "framer-motion";
import styled from "styled-components";

interface HugeCardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const HugeCard = ({ title, content }: HugeCardProps) => {
  return (
    <>
      <div
        className="custom-card card border-2 mb-3"
        style={{
          opacity: 0.9,
          height: "370px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div className="card-body">
          <StyledHugeCardTitle
            className="card-title text-center"
            animate={{
              scaleX: 1.05,
              textShadow: "0px 0px 20px rgb(255,255,255)",
              boxShadow: "0px 0px 20px rgb(255,255,255)",
              transition: {
                duration: 2,
                repeat: 1,
                repeatType: "mirror",
              },
            }}
          >
            {title}
          </StyledHugeCardTitle>
          <StyledHugeCardContent className="card-body">
            {content}
          </StyledHugeCardContent>
        </div>
      </div>
    </>
  );
};

const StyledHugeCardTitle = styled(motion.h6)`
  display: flex;
  font-size: x-large;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bolder;
  /* border-radius: 5%; */
  border: white solid 2px;
  position: sticky;
  top: 1px;
  padding: 5px;
`;

const StyledHugeCardContent = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-align: left;
  font-weight: bolder;
  padding-top: 5px;
  padding-bottom: 0px;
`;

export default HugeCard;
