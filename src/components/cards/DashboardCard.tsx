import styled from "styled-components";

interface DashboardCardProps {
  title?: string;
  content: React.ReactNode;
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
  position: "relative";
  overflow-y: auto;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    height: 317px;
  }
`;

export default DashboardCard;
