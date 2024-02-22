import { AnimatePresence, motion } from "framer-motion";
import gergetiCover from "../../assets/covers/gergeti.jpg";
import DashboardCard from "../../components/cards/DashboardCard";
import { QueryClient, QueryClientProvider } from "react-query";
import { useTranslation } from "react-i18next";
import DisplayLocations from "./DisplayLocations";

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

const naturesQueryClient = new QueryClient();

const Nature = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <QueryClientProvider client={naturesQueryClient}>
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
              padding: "20px",
              paddingBottom: "40px",
              boxSizing: "border-box",
            }}
          >
            <div className="container ">
              <div className="row justify-content-center">
                <div className="card-body col-12 mb-2">
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
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default Nature;
