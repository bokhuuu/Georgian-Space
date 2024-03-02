import Form from "./Form";
import { motion } from "framer-motion";
import closeIcon from "../../public/assets/icons/closeIcon.png";

const FormModal = () => {
  return (
    <div
      className="modal fade"
      id="formModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ border: "white 2px double" }}>
          <div className="modal-header">
            <h1
              className="modal-title fs-5 fw-bolder"
              id="exampleModalLabel"
            ></h1>
            <motion.button
              type="button"
              data-bs-dismiss="modal"
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
          <div className="modal-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
