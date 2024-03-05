import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";
import WineCard from "./WineCard";
import wine from "../../../public/assets/icons/wine.png";
import whiteWine from "../../../public/assets/icons/white-wine.png";
import redWine from "../../../public/assets/icons/red-wine.png";
import clear from "../../../public/assets/icons/clear.png";

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

const DisplayWines = () => {
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
      <div className="row filter-buttons mt-1 mb-3">
        <div className="row gap-2 d-flex justify-content-center justify-content-md-end ms-1">
          <button
            style={{
              width: 50,
              height: 50,
              backgroundImage: `url(${whiteWine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "white solid 3px",
              borderRadius: "30%",
              cursor: "pointer",
              opacity: filter === "White" ? 0.8 : 1,
            }}
            disabled={filter === "White"}
            onClick={() => setFilter("White")}
            className={filter === "white" ? "active" : ""}
          ></button>
          <button
            style={{
              width: 50,
              height: 50,
              border: "white solid 3px",
              backgroundImage: `url(${redWine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30%",
              outline: "none",
              cursor: "pointer",
              opacity: filter === "Red" ? 0.8 : 1,
            }}
            disabled={filter === "Red"}
            onClick={() => setFilter("Red")}
            className={filter === "red" ? "active" : ""}
          ></button>
          <button
            style={{
              width: 50,
              height: 50,
              backgroundImage: `url(${wine})`,
              border: "white solid 3px",
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
          <input
            style={{
              width: "150px",
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
              width: 50,
              height: 50,
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

export default DisplayWines;
