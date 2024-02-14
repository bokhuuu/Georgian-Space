import ThemeSelector from "../themes/ThemeToggler";
import { useTranslation } from "react-i18next";
import LanguageToggler from "../i18next/LanguageToggler";
import WeatherSidebarEnable from "../weatherApp/WeatherSidebarEnable";
import { AnimatePresence, Variants, motion } from "framer-motion";
import DashboardCard from "../components/cards/DashboardCard";
import MainCard from "../components/cards/MainCard";
import tbilisiCover from "../assets/covers/tbilisi.jpg";
import formIcon from "../assets/icons/formIcon.svg";
import themeIcon from "../assets/icons/themeIcon.svg";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, delay: 0.7 },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut", duration: 1 },
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

const Journey = () => {
  const { t } = useTranslation();
  const { toggleTheme } = ThemeSelector();

  return (
    <AnimatePresence>
      <motion.section
        className="background-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: `url(${tbilisiCover})`,
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div className="row gy-2 gy-lg-4 mt-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div>
                <DashboardCard
                  content={
                    <div className="container">
                      <p>{t("dashboard_header")} </p>
                      <div className="command-buttons d-flex mt-2 mb-3 gap-3">
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
                      </div>
                      <p>{t("dashboard_footer")}</p>
                      <LanguageToggler />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <MainCard
                title={t("civilizaton_title")}
                content={t("civilizaton")}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <MainCard title={t("nature_title")} content={t("nature")} />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <MainCard title={t("culture_title")} content={t("culture")} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <MainCard title={t("wine_title")} content={t("wine")} />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <MainCard title={t("cuisine_title")} content={t("cuisine")} />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Journey;
