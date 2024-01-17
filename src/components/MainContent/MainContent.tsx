import { ReactNode } from "react";
import styled from "styled-components";
import ModalBox from "../modal/ModalBox";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <StyledMainContent>
      {children}
      <ModalBox />
    </StyledMainContent>
  );
};
export default MainContent;

const StyledMainContent = styled.div`
  padding-top: 0px; /* Adjust based on your header height */
  padding-bottom: 56px; /* Adjust based on your footer height */
  overflow-y: auto;
  /* height: calc(
    100vh - 112px
  );  */
`;
