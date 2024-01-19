import useTheme from "../../themes/useTheme.tsx";
import { motion } from "framer-motion";
import weatherIcon from "../../assets/icons/weatherIcon.svg";
import exchangeIcon from "../../assets/icons/exchangeIcon.svg";
import formIcon from "../../assets/icons/formIcon.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";

const IconButtonsBox = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="container d-flex align-items-center justify-content-end gap-3 gap-md-4 gap-lg-5 ms-md-5">
      <motion.button
        className="icon-btn"
        whileHover={{ scale: 1.2 }}
        style={{
          backgroundImage: `url(${weatherIcon})`,
        }}
      ></motion.button>
      <motion.button
        className="icon-btn"
        whileHover={{ scale: 1.2 }}
        style={{
          backgroundImage: `url(${exchangeIcon})`,
        }}
      ></motion.button>
      <motion.button
        type="button"
        className="icon-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        whileHover={{ scale: 1.2 }}
        style={{
          backgroundImage: `url(${formIcon})`,
          width: 30,
          height: 30,
          rotate: "45deg",
        }}
      ></motion.button>
      <motion.button
        className="icon-btn"
        whileHover={{ scale: 1.2 }}
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

export default IconButtonsBox;
