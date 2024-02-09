import ThemeSelector from "../../themes/ThemeSelector";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../i18next/LanguageSelector";
import WeatherSidebarEnable from "../../weatherApp/WeatherSidebarEnable";
import { Variants, motion } from "framer-motion";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";
// import arrowDownSymbol from "../../assets/symbols/arrow-down.svg";
// import arrowRightSymbol from "../../assets/symbols/arrow-right.svg";
// import styled from "styled-components";
// import "./Dashboard.css";
// import styled from "styled-components";

const DashboardCardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.9,
    transition: { duration: 5 },
  },
};

const IconVariants: Variants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const Dashboard = () => {
  const { toggleTheme } = ThemeSelector();
  const { t } = useTranslation();

  return (
    <motion.div
      className="dashboard-card pt-2 mb-3 ps-3 pe-3 rounded-2"
      variants={DashboardCardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="d-flex justify-content-center align-items-center gap-4 mb-3 mt-2"
        animate={{
          scaleX: 1.05,
          textShadow: "0px 0px 20px rgb(255,255,255)",
          boxShadow: "0px 0px 20px rgb(255,255,255)",
          transition: {
            duration: 2,
            repeat: 1,
            repeatType: "mirror",
          },
        }}
        style={{ border: "white 2px solid" }}
      >
        <motion.button
          type="button"
          className="icon-btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          variants={IconVariants}
          whileHover="hover"
          style={{
            backgroundImage: `url(${formIcon})`,
          }}
        ></motion.button>

        <motion.button
          className="icon-btn"
          onClick={toggleTheme}
          variants={IconVariants}
          whileHover="hover"
          style={{
            backgroundImage: `url(${themeIcon})`,
          }}
        ></motion.button>
        <WeatherSidebarEnable />
      </motion.div>
      <p>{t("dashboard_header")} </p>
      <p>{t("dashboard_footer")}</p>
      <LanguageSelector />
    </motion.div>
  );
};

// const StyledDashboard = styled(motion.div)`
//   background-color: ${(props) => props.theme.backgroundColor};
//   color: ${(props) => props.theme.textColor};
// `;

export default Dashboard;
