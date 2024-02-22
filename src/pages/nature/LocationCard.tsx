import MiniDashboardCard from "../../components/cards/MiniDashboardCard";

interface LocationCardProps {
  id: number;
  name: string;
  intro: string;
}

const LocationCard = ({ name, intro }: LocationCardProps) => {
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <MiniDashboardCard title={name} content={intro} />
    </div>
  );
};

export default LocationCard;
