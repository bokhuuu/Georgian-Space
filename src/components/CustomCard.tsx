import { motion } from "framer-motion";
import styled from "styled-components";

interface CustomCardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const CustomCard = ({ title, content }: CustomCardProps) => {
  return (
    <>
      <div
        className="custom-card card border-2 mb-3"
        style={{
          opacity: 0.8,
          height: "370px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div className="card-body">
          <StyledCustomCardTitle
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
          </StyledCustomCardTitle>
          <StyledCustomCardContent className="card-body">
            {content}
          </StyledCustomCardContent>
        </div>
      </div>
    </>
  );
};

const StyledCustomCardTitle = styled(motion.h6)`
  display: flex;
  /* scale: 1; */
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
  /* z-index: 1; */
`;

const StyledCustomCardContent = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-align: left;

  /* overflow-wrap: break-word; */
  /* hyphens: auto; */
  /* word-wrap: break-word; */
  /* word-break: break-all; */
  /* word-spacing: -0.5em; /* Adjust as needed */
  /* word-spacing: 0.1em; */

  /* hyphens: auto; */
  font-weight: bolder;
  padding-top: 5px;
  padding-bottom: 0px;
`;

export default CustomCard;
