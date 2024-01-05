import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
}

// Define a reusable button motion variant
const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 12px rgb(255,255,255)",
    boxShadow: "0px 0px 12px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: 2,
      repeatType: "mirror",
    },
  },
};

// Example Button component using Framer Motion
const AnimatedButton = () => {
  return (
    <motion.button
      className="btn"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      Your Button Text
    </motion.button>
  );
};

export default AnimatedButton;
