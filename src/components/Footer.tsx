import LanguageSelector from "../i18next/LanguageToggler";
import CommandBar from "./CommandBar";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter className="footer container-fluid d-md-none d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col d-flex">
          <CommandBar />
          <LanguageSelector />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 55px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  bottom: 0;
`;

export default Footer;
