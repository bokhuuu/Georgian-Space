interface ProfileCardProps {
  key: number;
  name: string;
  type: string;
  region: string;
  description: string;
  imageURL: string;
}

const ProfileCard = ({
  name,
  type,
  region,
  description,
  imageURL,
}: ProfileCardProps) => {
  return (
    <div
      className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
      style={{
        // borderRight: "white double 2px",
        borderLeft: "white double 2px",
      }}
    >
      <div
        className="card-header d-flex justify-content-between align-items-center"
        style={{ borderBottom: "white dotted 2px" }}
      >
        <h5>{name}</h5>
        <img src={imageURL} style={{}} />
      </div>
      <div className="card-body">
        <li className="card-text">{type}</li>
        <li className="card-text">{region}</li>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
