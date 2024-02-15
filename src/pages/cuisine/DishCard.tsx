import { useTranslation } from "react-i18next";
import { useImageURL } from "../../firebase/useImageURL";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

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
  const { fetchedImageURL, error } = useImageURL(imageURL);
  const [cachedImage, setCachedImage] = useLocalStorage<string | null>(
    imageURL,
    null
  );

  useEffect(() => {
    if (fetchedImageURL) {
      setCachedImage(fetchedImageURL);
    }
  }, [fetchedImageURL, setCachedImage]);

  return (
    <div
      className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
      style={{
        border: "white double 1px",
      }}
    >
      <div className="card-header" style={{ borderBottom: "white solid 1px" }}>
        <div className="d-flex justify-content-start">
          {error ? (
            <p>Error: {error.message}</p>
          ) : (
            cachedImage && (
              <img
                src={cachedImage}
                alt={name}
                style={{
                  width: "230px",
                  height: "120px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            )
          )}
        </div>
        <div>
          <h5 className="fw-bolder">{name}</h5>
        </div>
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
