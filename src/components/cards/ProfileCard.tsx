interface ProfileCardProps {
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
    <div className="card profile-card">
      <div className="card-header d-flex justify-content-between align-items-center pe-2">
        <img src={imageURL} style={{ maxWidth: "50px", maxHeight: "50px" }} />
        <h5 className="mb-0 ms-2">{name}</h5>
      </div>
      <div className="card-body">
        <li className="card-text mb-2">{type}</li>
        <li className="card-text mb-2">{region}</li>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
