import ThemeSelector from "../themes/ThemeToggler.tsx";
import WeatherSidebarEnable from "../weatherApp/WeatherSidebarEnable.tsx";
import { motion } from "framer-motion";
import styled from "styled-components";
import form from "../../public/assets/icons/form.png";
import themes from "../../public/assets/icons/themes.png";

const CommandBar = () => {
  const { toggleTheme } = ThemeSelector();

  return (
    <div className="container d-flex align-items-center justify-content-end gap-2 gap-md-4 gap-lg-5 ms-md-5">
      <StyledCommandBarButton
        type="button"
        className="icon-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 20px rgb(255,255,255)",
          boxShadow: "0px 0px 20px rgb(255,255,255)",
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        style={{
          backgroundImage: `url(${form})`,
        }}
      ></StyledCommandBarButton>
      <StyledCommandBarButton
        className="icon-btn"
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 20px rgb(255,255,255)",
          boxShadow: "0px 0px 20px rgb(255,255,255)",
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        onClick={toggleTheme}
        style={{
          backgroundImage: `url(${themes})`,
        }}
      ></StyledCommandBarButton>
      <WeatherSidebarEnable />
    </div>
  );
};

const StyledCommandBarButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  background-color: "white";
  background-size: "cover";
  border-radius: 10%;
  cursor: pointer;
`;

export default CommandBar;
