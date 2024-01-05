import ContributionForm from "../../forms/ContributionForm";

const ModalBox = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ zIndex: 1500 }}
    >
      <div className="modal-dialog ">
        <div className="modal-content" style={{ background: "var(--primary)" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">
              Contribution Form
            </h1>
            <button type="button" className="btn" data-bs-dismiss="modal">
              Close
            </button>
          </div>
          <div className="modal-body">
            <ContributionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
