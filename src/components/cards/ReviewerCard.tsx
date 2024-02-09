interface ReviewerCardProps {
  width?: string;
  height?: string;
  content: React.ReactNode;
  className?: string;
}

const ReviewerCard = ({ width, height, content }: ReviewerCardProps) => {
  return (
    <div
      className="reviewer-card card border-2 mb-3"
      style={{
        opacity: 0.9,
        width: width,
        height: height,
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div
        className="card-body"
        style={{
          opacity: 0.9,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ReviewerCard;
