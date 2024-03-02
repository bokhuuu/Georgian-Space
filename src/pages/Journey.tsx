import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import MainCard from "../components/cards/MainCard";
import tbilisiCover from "../../public/assets/covers/tbilisi.jpg";
import logoIcon from "../../public/assets/icons/logo.jpg";
import { StyledLogoIcon } from "../components/Header";
import { Link } from "react-router-dom";
import DashboardCard from "../components/cards/DashboardCard";

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

const Journey = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.section
        className="background-section mb-5"
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
          <motion.div className="row gy-2 gy-lg-3 mt-1 mb-3">
            <div className="col-12">
              <DashboardCard
                content={
                  <div className="container">
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-start ms-md-2">
                        <motion.div
                          className="logo"
                          animate={{
                            rotateX: 360,
                            scale: [1.2, 0.8, 1.2],
                            transition: {
                              duration: 8,
                              repeat: Infinity,
                              repeatType: "mirror",
                            },
                          }}
                        >
                          <Link to="/">
                            <StyledLogoIcon
                              src={logoIcon}
                              style={{
                                marginLeft: "-12px",
                                marginRight: "10px",
                              }}
                            />
                          </Link>
                        </motion.div>
                        <div className="ms-md-3">
                          <p>{t("dashboard_footer")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6 mb-2">
              <MainCard title={t("culture_title")} content={t("culture")} />
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-2">
              <MainCard title={t("wine_title")} content={t("wine")} />
            </div>

            <div className="col-12 col-md-6 col-lg-6 mb-2">
              <MainCard title={t("cuisine_title")} content={t("cuisine")} />
            </div>

            <div className="col-12 col-md-6 col-lg-6 mb-2">
              <MainCard title={t("nature_title")} content={t("nature")} />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Journey;
