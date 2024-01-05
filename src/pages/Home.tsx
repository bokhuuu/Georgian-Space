import { motion } from "framer-motion";
import CardBox from "../components/UI/card/CardBox";

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
            <CardBox title="box 1" content="box 1 content" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CardBox title="box 1" content="box 1 content" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CardBox
              title="History"
              content="Argonauts
Colchis was the ancient name of West Georgia. In Greek mythology, Colchis was the location of the Golden Fleece sought by Jason and the Argonauts in Apollonius Rhodius’ epic tale Argonautica. Princess Medea and the Golden Fleece are believed to be of Georgian origin, from ancient Aia. Numerous golden artifacts have been found here during excavations. The incorporation of the Golden Fleece into the myth may have derived from the local practice of using fleeces to sift gold dust from rivers.This tradition still exists in Svaneti region."
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
