import { ReactNode } from "react";
import styled from "styled-components";
import FormModal from "../forms/FormModal";

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyledContent>
      {children}
      <FormModal />
    </StyledContent>
  );
};
export default Content;

const StyledContent = styled.div`
  padding-top: 10px; /* Adjust based on your header height */
  padding-bottom: 50px; /* Adjust based on your footer height */
  overflow-y: auto;
  /* height: calc(
    100vh - 112px
  );  */
`;