import { ReactNode } from "react";
import styled from "styled-components";
import FormModal from "../forms/FormModal";
import fetchCordinates from "../weather-app/services/fetchCordinates";

const tbilisiCordinates = fetchCordinates("tbilisi");
console.log(tbilisiCordinates);

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <StyledMainContent>
      {children}
      <FormModal />
    </StyledMainContent>
  );
};
export default MainContent;

const StyledMainContent = styled.div`
  padding-top: 10px; /* Adjust based on your header height */
  padding-bottom: 50px; /* Adjust based on your footer height */
  overflow-y: auto;
  /* height: calc(
    100vh - 112px
  );  */
`;
