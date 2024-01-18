import { useTranslation } from "react-i18next";
import LanguageToggler from "../../utils/LanguageToggler.tsx";
import ThemeToggler from "../../utils/ThemeToggler.tsx";
// import ModalBox from "../modal/ModalBox.tsx";
import styled from "styled-components";

const Footer = () => {
  const { t } = useTranslation();
  const { toggleTheme } = ThemeToggler();

  return (
    <StyledFooter className="container-fluid d-none-md">
      <div className="row">
        <div className="col d-flex align-items-center justify-contetn-center">
          <button onClick={toggleTheme}>TR</button>
          <LanguageToggler />
          {t("header")}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            modal
          </button> */}
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
