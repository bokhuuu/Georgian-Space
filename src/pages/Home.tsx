import { motion } from "framer-motion";
import CustomCard from "../components/CustomCard";

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
  return (
    <section>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
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
              content="Argonauts
in, from ancient Ais haxcavations. The incorporation of the Golden Fleece into the myth may have derived from the local practice of using fleeces to sift gold dust from rivers.This tradition still exists in Svaneti region."
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
