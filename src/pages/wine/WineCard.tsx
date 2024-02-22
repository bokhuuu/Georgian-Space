import whiteWine from "../../assets/icons/white-wine.png";
import redWine from "../../assets/icons/red-wine.png";

interface WineCardProps {
  key: number;
  name: string;
  type: string;
  region: string;
  description: string;
}

const WineCard = ({ name, type, region, description }: WineCardProps) => {
  const wineTypeImage = type === "White" ? whiteWine : redWine;

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
        <div className="d-flex">
          <div className="row">
            <li className="card-text">{type}</li>
            <li className="card-text">{region}</li>
          </div>
          <div className="col d-flex justify-content-end">
            <img src={wineTypeImage} />
          </div>
        </div>
        <p className="card-text pt-3 fw-light">{description}</p>
      </div>
    </div>
  );
};

export default WineCard;
