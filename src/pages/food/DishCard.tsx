import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useImageURL } from "../../firebase/useImageURL";
import nonVegetarianImage from "../../../public/assets/icons/non-vegetarian.png";
import vegetarianImage from "../../../public/assets/icons/vegetarian.png";

interface DishCardProps {
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
  const { fetchedImageURL, error } = useImageURL(imageURL);
  const [imageLoaded, setImageLoaded] = useState(false);

  const dishTypeImage =
    vegetarian === "Yes" || vegetarian === "კი"
      ? vegetarianImage
      : nonVegetarianImage;

  useEffect(() => {
    if (fetchedImageURL) {
      setImageLoaded(true);
    }
  }, [fetchedImageURL]);

  return (
    <div
      className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
      style={{ border: "white double 1px" }}
    >
      <div className="card-header" style={{ borderBottom: "white solid 1px" }}>
        <div className="d-flex justify-content-start">
          {error ? (
            <p>Error: {error.message}</p>
          ) : (
            imageLoaded && (
              <img
                src={fetchedImageURL || ""}
                alt={name}
                style={{
                  width: "230px",
                  height: "120px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            )
          )}
        </div>
        <div>
          <h5 className="fw-bolder">{name}</h5>
        </div>
      </div>
      <div className="card-body">
        <div className="col d-flex justify-content-space-between align-items-center">
          <div className="col">{t("dish_card_text")}</div>
          <div>
            <img src={dishTypeImage} />
          </div>
        </div>
        <p className="card-text pt-3 fw-light">{description}</p>
      </div>
    </div>
  );
};

export default DishCard;
