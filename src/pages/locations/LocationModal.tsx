import { motion } from "framer-motion";
import closeIcon from "../../../public/assets/icons/closeIcon.png";
import { useEffect, useState } from "react";
import { useImageURL } from "../../firebase/useImageURL";

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
  const [currentImageURL, setCurrentImageURL] = useState("");

  const { fetchedImageURL: fetchedImageURL1 } = useImageURL(imageURLs[0]);
  const { fetchedImageURL: fetchedImageURL2 } = useImageURL(imageURLs[1]);
  const { fetchedImageURL: fetchedImageURL3 } = useImageURL(imageURLs[2]);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleImageClick = (imageURL: string) => {
    setCurrentImageURL(imageURL);
    window.scrollTo(0, 100);
  };

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
                    borderRadius: "10%",
                  }}
                ></motion.button>
              </div>
              <div className="modal-body fw-light ">
                <p>{description}</p>
                <div
                  className="modal-footer d-flex align-items-center justify-content-center"
                  style={{
                    borderTop: "white solid 1px",
                  }}
                >
                  {currentImageURL && (
                    <img
                      src={currentImageURL}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "350px",
                      }}
                    />
                  )}
                  <div className="row justify-content-center">
                    <img
                      src={fetchedImageURL1 || ""}
                      alt={name}
                      style={{
                        width: "230px",
                        height: "120px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(fetchedImageURL1 ?? "")}
                    />
                    <img
                      src={fetchedImageURL2 || ""}
                      alt={name}
                      style={{
                        width: "230px",
                        height: "120px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(fetchedImageURL2 ?? "")}
                    />
                    <img
                      src={fetchedImageURL3 || ""}
                      alt={name}
                      style={{
                        width: "230px",
                        height: "120px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(fetchedImageURL3 ?? "")}
                    />
                  </div>
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
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default LocationModal;
