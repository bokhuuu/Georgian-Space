import { motion, Variants } from "framer-motion";
import binocularsIcon from "../../assets/icons/binoculars.svg";

interface LocationCardProps {
  id: number;
  name: string;
  intro: string;
}

const btnVariants: Variants = {
  hover: {
    scaleX: 1.2,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const LocationCard = ({ name, intro }: LocationCardProps) => {
  return (
    <div
      className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
      style={{
        border: "white double 1px",
      }}
    >
      <div
        className="card-header d-flex justify-content-between align-items-center"
        style={{ borderBottom: "white solid 1px" }}
      >
        <h5 className="fw-bolder">{name}</h5>
        <button
          className="d-flex justify-content-center mb-2"
          style={{
            backgroundImage: `url(${binocularsIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
            width: "50px", // Adjust as needed
            height: "50px", // Adjust as needed
            border: "none", // Remove default button border if needed
          }}
        >
          <motion.img
            variants={btnVariants}
            whileHover="hover"
            src={binocularsIcon}
            alt="Arrow Right"
            style={{
              backgroundColor: "transparent",
              width: "100%", // Fill the button width
              height: "100%", // Fill the button height
              // borderRadius: "20%", // Make it round if needed
            }}
          />
        </button>
      </div>
      <div className="card-body">
        <p className="card-text pt-3 fw-light">{intro}</p>
      </div>
    </div>
  );
};

export default LocationCard;
