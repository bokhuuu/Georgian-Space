import { AnimatePresence, motion } from "framer-motion";
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
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="Top popover"
        >
          Popover on top
        </button>
      </motion.section>
    </AnimatePresence>
  );
};

export default Culture;
