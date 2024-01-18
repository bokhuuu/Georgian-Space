// import { useTranslation } from "react-i18next";
// import ThemeSelector from "../../themes/ThemeSelector.tsx";
import styled from "styled-components";

const Footer = () => {
  // const { t } = useTranslation();
  // const { toggleTheme } = ThemeSelector();

  return (
    <StyledFooter className="container-fluid d-none-md">
      <div className="row">
        <div className="col d-flex gap-3">
          {/* <button onClick={toggleTheme}>Theme</button> */}
          {/* {t("header")} */}
          <button>WE</button>
          <button>EX</button>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 1px;
  z-index: 1000;
  background-color: #9b9bcc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none; // Hide the footer on medium and larger screens
  }
`;

export default Footer;
