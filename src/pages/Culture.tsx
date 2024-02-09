import { AnimatePresence, motion } from "framer-motion";
import CustomCard from "../components/cards/HugeCard";
import mtskhetaCover from "../assets/covers/mtskheta.jpg";

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

const Culture = () => {
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
            backgroundImage: `url(${mtskhetaCover})`,
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
            padding: "20px",
            paddingBottom: "40px",
            boxSizing: "border-box",
          }}
        >
          <motion.div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title="box 1" content="box 1 content" />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard title="box 1" content="box 1 content" />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CustomCard
                title="History"
                content="Argonauts in, from ancient Ais excavations. The incorporation of the Golden Fleece into the myth may have derived from the local practice of using fleeces to sift gold dust from rivers. This tradition still exists in Svaneti region."
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Culture;
