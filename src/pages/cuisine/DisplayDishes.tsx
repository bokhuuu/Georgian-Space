import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";
import DishCard from "./DishCard";
import nonVegetarian from "../../assets/icons/non-vegetarian.png";
import vegetarian from "../../assets/icons/vegetarian.png";
import cuisine from "../../assets/icons/cuisine.png";
import clear from "../../assets/icons/clear.png";

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
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredAndSearchedDishes = filteredDishes.filter((dish: Dish) =>
    t(`${dish.name[i18n.language]}`)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const clearSearchInput = () => {
    setSearchQuery("");
  };

  return (
    <div className="container">
      <div className="row filter-buttons gap-2 mt-2 mb-3 d-flex">
        <div className="row gap-2 d-flex justify-content-center justify-content-md-end ms-1">
          <button
            style={{
              width: 80,
              height: 80,
              backgroundImage: `url(${nonVegetarian})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "white solid 3px",
              borderRadius: "30%",
              cursor: "pointer",
              opacity: filter === "No" ? 0.8 : 1,
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
              backgroundImage: `url(${vegetarian})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30%",
              outline: "none",
              cursor: "pointer",
              opacity: filter === "Yes" ? 0.8 : 1,
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
              backgroundImage: `url(${cuisine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30%",
              outline: "none",
              cursor: "pointer",
              opacity: filter === "all" ? 0.8 : 1,
            }}
            disabled={filter === "all"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active" : ""}
          ></button>
          <div className="d-flex justify-content-center justify-content-md-end">
            <input
              style={{
                width: "190px",
              }}
              type="text"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="input-button"
              onClick={clearSearchInput}
              style={{
                width: 40,
                height: 40,
                backgroundImage: `url(${clear})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "white solid 3px",
                borderRadius: "30%",
                cursor: "pointer",
              }}
            ></button>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredAndSearchedDishes.map((dish: Dish) => (
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
