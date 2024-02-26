import { motion } from "framer-motion";
import closeIcon from "../../assets/icons/closeIcon.png";
import { useEffect } from "react";

interface LocationModalProps {
  name: string;
  description: string;
  imageURLs: string[];
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
  name,
  description,
  imageURLs,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    // Scroll to the top when the modal is opened
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  borderBottom: "white solid 1px",
                }}
              >
                <h5 className="modal-title fw-bolder">{name}</h5>
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 20px rgb(255,255,255)",
                    boxShadow: "0px 0px 20px rgb(255,255,255)",
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                    },
                  }}
                  style={{
                    backgroundImage: `url(${closeIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    width: "50px",
                    height: "50px",
                    // border: "none",
                    borderRadius: "10%",
                  }}
                ></motion.button>
              </div>
              <div className="modal-body fw-light">
                <p>{description}</p>
                <div
                  className="modal-footer"
                  style={{
                    borderTop: "white solid 1px",
                  }}
                >
                  <ul>
                    {imageURLs.map((url, index) => (
                      <li key={index}>{url}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="modal-backdrop fade show custom-backdrop"
          style={{
            opacity: 0.55,
            // position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // zIndex: 500, // Ensure the backdrop is above other content
          }}
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default LocationModal;
