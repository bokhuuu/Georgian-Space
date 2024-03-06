// import { QueryClientProvider, QueryClient } from "react-query";
import { useTranslation } from "react-i18next";
import DashboardCard from "../../components/cards/DashboardCard";
import DisplayDishes from "./DisplayDishes";
import { AnimatePresence, motion } from "framer-motion";
import svanetiCover from "../../../public/assets/covers/svaneti.jpg";

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

// const dishQueryClient = new QueryClient();

const Food = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {/* <QueryClientProvider client={dishQueryClient}> */}
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
            backgroundImage: `url(${svanetiCover})`,
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
              <div
                className="card-body col-12 d-flex"
                style={{ opacity: 0.84 }}
              >
                <DashboardCard
                  content={
                    <>
                      <p>{t("cuisine_dashboard")}</p>
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <DisplayDishes />
          </div>
        </motion.div>
      </motion.section>
      {/* </QueryClientProvider> */}
    </AnimatePresence>
  );
};

export default Food;
