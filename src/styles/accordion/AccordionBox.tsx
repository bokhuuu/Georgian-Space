interface AccordionBoxProps {
  title: string;
  content: React.ReactNode;
}

const AccordionBox = ({ title, content }: AccordionBoxProps) => {
  return (
    <>
      <div className="accordion" id="chapters">
        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="heading-1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#chapter-1"
              aria-expanded="true"
              aria-controls="chapter-1"
            >
              {title}
            </button>
          </h2>

          <div
            className="accordion-collapse collapse"
            id="chapter-1"
            aria-labelledby="heading-1"
            data-bs-parent="#chapters"
          >
            <div className="accordion-body">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionBox;
