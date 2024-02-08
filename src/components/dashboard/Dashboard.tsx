import ThemeSelector from "../../themes/ThemeSelector";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../i18next/LanguageSelector";
import WeatherSidebarEnable from "../../weatherApp/WeatherSidebarEnable";
import { Variants, motion } from "framer-motion";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";
import arrowDownSymbol from "../../assets/symbols/arrow-down.svg";
import arrowRightSymbol from "../../assets/symbols/arrow-right.svg";
import "./Dashboard.css";

const dashboardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
      className="container dashboard-container mb-3 mb-md-0 "
      variants={dashboardVariants}
      initial="hidden"
      animate="visible"
      style={{
        height: 370,
        borderRadius: "5%",
        backgroundColor: "#9b9bcc",
        color: " rgb(12, 33, 151)",
        textShadow: "0px 0px 20px rgb(255,255,255)",
        boxShadow: "0px 0px 20px rgb(255,255,255)",
      }}
    >
      <div
        className="pt-xl-1 pb-xl-1 ms-2"
        style={{ borderBottom: "white solid 3px" }}
      >
        {t("dashboard_header")}
        <img
          src={arrowDownSymbol}
          style={{
            background: "white",
            marginLeft: 12,
            marginBottom: 5,
            width: 20,
          }}
        />
      </div>

      <div className="row d-flex flex-column align-items- ms-2 gap-1 gap-xl-3 mt-1 mb-1">
        <motion.div
          className="col d-flex justify-content-between align-items-center"
          style={{
            width: "96%",
            border: "solid white 1px",
            background: "#dcdcf0df",
            borderRadius: "5%",
          }}
        >
          <span>{t("form")}</span>
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
        </motion.div>
        <div
          className="col d-flex justify-content-between align-items-center"
          style={{
            width: "96%",
            border: "solid white 1px",
            background: "#dcdcf0df",
            borderRadius: "5%",
          }}
        >
          <span>{t("themes")}</span>
          <motion.button
            className="icon-btn"
            onClick={toggleTheme}
            variants={IconVariants}
            whileHover="hover"
            style={{
              backgroundImage: `url(${themeIcon})`,
            }}
          ></motion.button>
        </div>
        <div
          className="col d-flex align-items-center"
          style={{
            width: "96%",
            border: "solid white 1px",
            background: "#dcdcf0df",
            borderRadius: "5%",
          }}
        >
          <span className="weather-span">{t("weather")}</span>
          <WeatherSidebarEnable />
        </div>
        <div
          className="col d-flex justify-content-between align-items-center"
          style={{
            width: "96%",
            border: "solid white 1px",
            background: "#dcdcf0df",
            borderRadius: "5%",
          }}
        >
          <span>{t("languages")}</span>
          <LanguageSelector />
        </div>
      </div>
      <div
        className="pt-xl-1 pb-1 pb-xl-1 ms-2"
        style={{ borderTop: "white solid 3px" }}
      >
        {t("dashboard_footer")}
        <img
          src={arrowRightSymbol}
          style={{
            background: "white",
            marginLeft: 12,
            marginBottom: 5,
            width: 20,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Dashboard;
