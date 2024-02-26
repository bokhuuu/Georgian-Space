import FormModal from "../forms/FormModal";
import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyledContent>
      {children}
      <FormModal />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default Content;
