import styled from "styled-components";

interface DashboardCardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const DashboardCard = ({ title, content }: DashboardCardProps) => {
  return (
    <StyledDashboard className="dashboard-card card border-2">
      {title}
      <div className="card-body">{content}</div>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  /* opacity: 0.9; */
  position: "relative";
  overflow-y: auto;
  margin-bottom: 10px;
  /* Apply specific height for small screens */
  @media (max-width: 767px) {
    height: 317px; /* Adjust the height as needed */
  }
`;

export default DashboardCard;
