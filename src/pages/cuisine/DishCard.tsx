import { useTranslation } from "react-i18next";

interface DishCardProps {
  key: number;
  name: string;
  vegetarian: string;
  imageURL: string;
  description: string;
}

const DishCard = ({
  name,
  vegetarian,
  imageURL,
  description,
}: DishCardProps) => {
  const { t } = useTranslation();

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
        <img src={imageURL} />
      </div>
      <div className="card-body">
        <p className="card-text dish-card-text">
          {t("dish_card_text")} - {vegetarian}
        </p>
        <p className="card-text pt-3">{description}</p>
      </div>
    </div>
  );
};

export default DishCard;
