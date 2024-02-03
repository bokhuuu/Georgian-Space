import { AnimatePresence, motion } from "framer-motion";
import CustomCard from "../components/CustomCard";
import tbilisiCover from "../assets/covers/tbilisi.jpg";
import { useTranslation } from "react-i18next";

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

const Home = () => {
  const { t } = useTranslation();

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
          height: "100vh",
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
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            minHeight: "100vh",
            padding: "10px",
            paddingBottom: "40px",
            boxSizing: "border-box",
          }}
        >
          <motion.div className="row gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard
                title={t("civilizaton-title")}
                content={t("civilizaton")}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("wine-title")} content={t("wine")} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("alphabet-title")} content={t("alphabet")} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard
                title={t("unesco-heritage-title")}
                content={t("unesco-heritage")}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("folklore-title")} content={t("folklore")} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("honey-title")} content={t("honey")} />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
