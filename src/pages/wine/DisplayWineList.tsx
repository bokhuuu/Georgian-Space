import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";
import DashboardCard from "../../components/cards/DashboardCard";
import ProfileCard from "../../components/cards/ProfileCard";
import allWines from "../../assets/pictures/all-wines.jpg";
import whiteWines from "../../assets/pictures/white-wine.jpg";
import redWines from "../../assets/pictures/red-wine.jpg";

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

const DisplayWineList = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

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

  return (
    <div className="container">
      <div className="row filter-buttons gap-2 mt-2 mb-3 d-flex">
        <div className="card-body col-12 col-md-6 col-lg-2 col-xl-1">
          <DashboardCard
            content={<p>{t("wine_filter_buttons")}</p>}
          ></DashboardCard>
        </div>
        <div className="col gap-2 d-flex justify-content-end align-items-center">
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
        </div>
      </div>
      <div className="row">
        {filteredWines.map((wine: Wine) => (
          <ProfileCard
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

export default DisplayWineList;