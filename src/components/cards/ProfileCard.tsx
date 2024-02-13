interface ProfileCardProps {
  key: number;
  name: string;
  type: string;
  region: string;
  description: string;
}

const ProfileCard = ({ name, type, region, description }: ProfileCardProps) => {
  return (
    <div
      className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
      style={{
        border: "white double 1px",
      }}
    >
      <div
        className="card-header d-flex justify-content-between align-items-center"
        style={{ borderBottom: "white solid 1px" }}
      >
        <h5 className="fw-bolder">{name}</h5>
      </div>
      <div className="card-body">
        <li className="card-text">{type}</li>
        <li className="card-text">{region}</li>
        <p className="card-text pt-3">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
