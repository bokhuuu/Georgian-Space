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
  /* padding-top: 8px; */
  /* padding-bottom: 5px; */
  overflow-y: auto;
  overflow-x: hidden;
  /* height: calc(100vh - 112px); */
  margin: 0 auto;
  /* align-items: center; */
`;
