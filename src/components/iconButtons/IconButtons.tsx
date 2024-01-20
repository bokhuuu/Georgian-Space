import ThemeSelector from "../../themes/ThemeSelector.tsx";
import { Variants, motion } from "framer-motion";
import weatherIcon from "../../assets/icons/weatherIcon.svg";
import exchangeIcon from "../../assets/icons/exchangeIcon.svg";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";

const iconButtonVariants: Variants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const IconButtons = () => {
  const { toggleTheme } = ThemeSelector();

  return (
    <div className="container d-flex align-items-center justify-content-end gap-3 gap-md-4 gap-lg-5 ms-md-5">
      <motion.button
        className="icon-btn"
        variants={iconButtonVariants}
        whileHover="hover"
        style={{
          backgroundImage: `url(${weatherIcon})`,
        }}
      ></motion.button>
      <motion.button
        className="icon-btn"
        variants={iconButtonVariants}
        whileHover="hover"
        style={{
          backgroundImage: `url(${exchangeIcon})`,
        }}
      ></motion.button>
      <motion.button
        type="button"
        className="icon-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        variants={iconButtonVariants}
        whileHover="hover"
        style={{
          backgroundImage: `url(${formIcon})`,
          width: 30,
          height: 30,
          rotate: "45deg",
        }}
      ></motion.button>
      <motion.button
        className="icon-btn"
        variants={iconButtonVariants}
        whileHover="hover"
        onClick={toggleTheme}
        style={{
          backgroundImage: `url(${themeIcon})`,
          width: 30,
          height: 30,
          rotate: "45deg",
        }}
      ></motion.button>
    </div>
  );
};

export default IconButtons;
