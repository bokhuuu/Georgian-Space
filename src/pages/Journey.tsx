import Dashboard from "../components/dashboard/Dashboard";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import tbilisiCover from "../assets/covers/tbilisi.jpg";

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
          <motion.div className="row gy-2 gy-lg-4 mt-3 mb-5">
            <div className="col-12 col-md-6 col-lg-4">
              <Dashboard />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard
                title={t("civilizaton_title")}
                content={t("civilizaton")}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("nature_title")} content={t("nature")} />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("culture_title")} content={t("culture")} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("wine_title")} content={t("wine")} />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title={t("cuisine_title")} content={t("cuisine")} />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Journey;
