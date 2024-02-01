import { AnimatePresence, motion } from "framer-motion";
import CustomCard from "../components/CustomCard";
import gergetiCover from "../assets/covers/gergeti.jpg";

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

const Discover = () => {
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
            backgroundImage: `url(${gergetiCover})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
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

export default Discover;

// import { useImageURL } from "../hooks/useImageURL";

// const Discover = () => {
//   const { imageURL, error } = useImageURL("food/khinkali.jpg");

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {imageURL ? (
//         <img
//           src={imageURL}
//           alt="khinkali"
//           style={{ width: 200, height: 200 }}
//         />
//       ) : (
//         <p>Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default Discover;
