import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";
import DashboardCard from "../../components/cards/DashboardCard";
import WineCard from "./WineCard";
import allWines from "../../assets/pictures/all-wines.jpg";
import whiteWines from "../../assets/pictures/white-wine.jpg";
import redWines from "../../assets/pictures/red-wine.jpg";
import arrowRight from "../../assets/symbols/arrow-right.svg";
import clearX from "../../assets/symbols/clear-x.svg";

interface Wine {
  id: number;
  type: { [key: string]: string };
  name: { [key: string]: string };
  region: { [key: string]: string };
  description: { [key: string]: string };
}

const fetchWines = async () => {
  const response = await axios.get("/db.json");
  return response.data.wines;
};

const DisplayWine = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: wines,
    isLoading,
    isError,
  } = useQuery("wines", fetchWines, {
    cacheTime: 8 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filteredWines =
    filter === "all"
      ? wines
      : wines.filter((wine: Wine) => wine.type.en === filter);

  const filteredAndSearchedWines = filteredWines.filter((wine: Wine) =>
    t(`${wine.name[i18n.language]}`)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const clearSearchInput = () => {
    setSearchQuery("");
  };

  return (
    <div className="container">
      <div className="row filter-buttons gap-2 mt-2 mb-3 d-flex">
        <div className="card-body col-12 col-md-6 col-lg-2 col-xl-1">
          <DashboardCard
            content={
              <p>
                {t("wine_filter_buttons")}
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

        <div className="col ">
          <div className="row gap-3 d-flex justify-content-end align-items-start">
            <button
              style={{
                width: 80,
                height: 80,

                backgroundImage: `url(${whiteWines})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "white solid 3px",
                borderRadius: "30%",
                cursor: "pointer",
                opacity: filter === "White" ? 0.7 : 1,
              }}
              disabled={filter === "White"}
              onClick={() => setFilter("White")}
              className={filter === "white" ? "active" : ""}
            ></button>
            <button
              style={{
                width: 80,
                height: 80,
                border: "white solid 3px",
                backgroundImage: `url(${redWines})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "30%",
                outline: "none",
                cursor: "pointer",
                opacity: filter === "Red" ? 0.7 : 1,
              }}
              disabled={filter === "Red"}
              onClick={() => setFilter("Red")}
              className={filter === "red" ? "active" : ""}
            ></button>
            <button
              style={{
                width: 80,
                height: 80,
                backgroundImage: `url(${allWines})`,
                border: "white solid 3px",
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
            <div className="d-flex justify-content-end align-items-center">
              <input
                style={{
                  width: "230px",
                  background: " ",
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
                  backgroundImage: `url(${clearX})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "25px",
                  height: "27px",
                  border: "none",
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredAndSearchedWines.map((wine: Wine) => (
          <WineCard
            key={wine.id}
            type={t(`${wine.type[i18n.language]}`)}
            name={t(`${wine.name[i18n.language]}`)}
            region={t(`${wine.region[i18n.language]}`)}
            description={t(`${wine.description[i18n.language]}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayWine;
