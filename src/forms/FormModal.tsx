import Form from "./Form";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FormModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        zIndex: 1500,
        background: "rgb(123, 148, 168)",
        opacity: 0.98,
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ border: "white 2px double" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">
              Contribution Form
            </h1>
            <motion.button
              type="button"
              className="btn"
              data-bs-dismiss="modal"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 12px rgb(255,255,255)",
                boxShadow: "0px 0px 12px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  repeat: 2,
                  repeatType: "mirror",
                },
              }}
            >
              Close
            </motion.button>
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
