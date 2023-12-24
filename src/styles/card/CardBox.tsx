import { StyledCardBoxTitle } from "./CardBoxStyles";
import { StyledCardBoxContent } from "./CardBoxStyles";

interface CardBoxProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

const CardBox = ({ title, content }: CardBoxProps) => {
  return (
    <>
      <div className="card border-2 mt-4 ms-2">
        <div
          className="card-body text-center py-4"
          style={{
            background: "rgb(124, 154, 182)",
          }}
        >
          <StyledCardBoxTitle className="card-title">
            {title}
          </StyledCardBoxTitle>
          <StyledCardBoxContent className="card-body">
            {content}
          </StyledCardBoxContent>
        </div>
      </div>
    </>
  );
};

export default CardBox;
