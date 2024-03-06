// import { QueryClient, QueryClientProvider } from "react-query";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import DisplayLocations from "./DisplayLocations";
import DashboardCard from "../../components/cards/DashboardCard";
import gergetiCover from "../../../public/assets/covers/gergeti.jpg";

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

// const locationsQueryClient = new QueryClient();

const Locations = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {/* <QueryClientProvider client={locationsQueryClient}> */}
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
            backgroundImage: `url(${gergetiCover})`,
            backgroundSize: "cover",
          }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            minHeight: "100vh",
            paddingBottom: "40px",
            boxSizing: "border-box",
          }}
        >
          <div className="container ">
            <div className="row justify-content-center">
              <div className="card-body col-12 mb-2" style={{ opacity: 0.84 }}>
                <DashboardCard
                  content={
                    <>
                      <p>{t("nature_page.0.climate")}</p>
                      <hr style={{ border: "white dotted 3px" }} />
                      <p>{t("nature_page.0.mountains")}</p>
                      <hr style={{ border: "white dotted 3px" }} />
                      <p>{t("nature_page.0.waters")}</p>
                    </>
                  }
                />
              </div>

              <div className="container ">
                <DisplayLocations />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* </QueryClientProvider> */}
    </AnimatePresence>
  );
};

export default Locations;
