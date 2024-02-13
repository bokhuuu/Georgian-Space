interface DashboardCardProps {
  width?: string;
  height?: string;
  content: React.ReactNode;
  className?: string;
}

const DashboardCard = ({ width, height, content }: DashboardCardProps) => {
  return (
    <div
      className="dashboard-card card border-2 mb-3 fw-bolder"
      style={{
        opacity: 0.9,
        width: width,
        height: height,
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div className="card-body">{content}</div>
    </div>
  );
};

export default DashboardCard;
