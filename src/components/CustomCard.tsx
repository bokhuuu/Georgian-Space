import styled from "styled-components";

interface CustomCardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const CustomCard = ({ title, content }: CustomCardProps) => {
  return (
    <>
      <div className="card border-2 mb-3">
        <div className="card-body text-center">
          <StyledCustomCardTitle className="card-title">
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

const StyledCustomCardTitle = styled.h6`
  margin-bottom: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  justify-content: center;
  display: flex;
`;

const StyledCustomCardContent = styled.p`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-align: left;
`;

export default CustomCard;
