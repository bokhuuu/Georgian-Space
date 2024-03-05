import { QueryClientProvider, QueryClient } from "react-query";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import DisplayWine from "./DisplayWines";
import DashboardCard from "../../components/cards/DashboardCard";
import tushetiCover from "../../../public/assets/covers/tusheti.jpg";

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

const winesQueryClient = new QueryClient();

const Wine = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <QueryClientProvider client={winesQueryClient}>
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
              backgroundImage: `url(${tushetiCover})`,
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
              minHeight: "100vh",
              paddingBottom: "40px",
              boxSizing: "border-box",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="card-body col-12 d-flex">
                  <DashboardCard
                    content={
                      <>
                        <p>{t("wine_dashboard")}</p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <DisplayWine />
            </div>
          </motion.div>
        </motion.section>
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default Wine;
