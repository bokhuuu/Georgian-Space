import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";
import DashboardCard from "../../components/cards/DashboardCard";
import DishCard from "./DishCard";
import meatDishes from "../../assets/pictures/meat.jpg";
import vegetarianDishes from "../../assets/pictures/vegetarian.jpg";
import allDishes from "../../assets/pictures/all-dishes.jpg";
import arrowRight from "../../assets/symbols/arrow-right.svg";

interface Dish {
  id: number;
  name: { [key: string]: string };
  imageURL: string;
  vegetarian: { [key: string]: string };
  description: { [key: string]: string };
}

const fetchDishes = async () => {
  const response = await axios.get("/db.json");
  return response.data.dishes;
};

const DisplayDishes = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const {
    data: dishes,
    isLoading,
    isError,
  } = useQuery("dishes", fetchDishes, {
    cacheTime: 8 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filteredDishes =
    filter === "all"
      ? dishes
      : dishes.filter((dish: Dish) => dish.vegetarian.en === filter);

  return (
    <div className="container">
      <div className="row filter-buttons gap-2 mt-2 mb-3 d-flex">
        <div className="card-body col-12 col-md-6 col-lg-2 col-xl-1">
          <DashboardCard
            content={
              <p>
                {t("dish_filter_buttons")}{" "}
                <img
                  src={arrowRight}
                  style={{
                    backgroundColor: "white",
                    width: "30px",
                    marginLeft: "3px",
                    borderRadius: "20%",
                  }}
                />
              </p>
            }
          ></DashboardCard>
        </div>
        <div className="col gap-2 d-flex justify-content-end align-items-center">
          <button
            style={{
              width: 80,
              height: 80,

              backgroundImage: `url(${meatDishes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "white solid 3px",
              borderRadius: "30%",
              cursor: "pointer",
              opacity: filter === "No" ? 0.7 : 1,
            }}
            disabled={filter === "No"}
            onClick={() => setFilter("No")}
            className={filter === "No" ? "active" : ""}
          ></button>
          <button
            style={{
              width: 80,
              height: 80,
              border: "white solid 3px",
              backgroundImage: `url(${vegetarianDishes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30%",
              outline: "none",
              cursor: "pointer",
              opacity: filter === "Yes" ? 0.7 : 1,
            }}
            disabled={filter === "Yes"}
            onClick={() => setFilter("Yes")}
            className={filter === "Yes" ? "active" : ""}
          ></button>
          <button
            style={{
              width: 80,
              height: 80,
              border: "white solid 3px",
              backgroundImage: `url(${allDishes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30%",
              outline: "none",
              cursor: "pointer",
              opacity: filter === "all" ? 0.7 : 1,
            }}
            disabled={filter === "all"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active" : ""}
          ></button>
        </div>
      </div>
      <div className="row">
        {filteredDishes.map((dish: Dish) => (
          <DishCard
            key={dish.id}
            name={t(`${dish.name[i18n.language]}`)}
            description={t(`${dish.description[i18n.language]}`)}
            vegetarian={t(`${dish.vegetarian[i18n.language]}`)}
            imageURL={dish.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayDishes;
