import { AnimatePresence, motion } from "framer-motion";
import tushetiCover from "../assets/covers/tusheti.jpg";
import ReviewerCard from "../components/cards/ReviewerCard";
// import ProfileCard from "../components/cards/ProfileCard";
// import DisplayWineList from "./DisplayWineList";
import { QueryClientProvider, QueryClient } from "react-query";

const winesQueryClient = new QueryClient();

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 0.9,
    x: 0,
    transition: { duration: 1.5, delay: 0.7 },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Wine = () => {
  return (
    <QueryClientProvider client={winesQueryClient}>
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
              padding: "20px",
              paddingBottom: "40px",
              boxSizing: "border-box",
            }}
          >
            <div className="container">
              <ReviewerCard content="vvvv" />
              <ReviewerCard content="vvvv" />
            </div>
            <div className="">{/* <DisplayWineList /> */}</div>
            {/* </motion.div> */}
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default Wine;
