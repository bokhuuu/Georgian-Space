// import axios from "axios";
// import { useQuery } from "react-query";
// import ProfileCard from "../components/cards/ProfileCard";
// import { useTranslation } from "react-i18next";
// // import useLanguageCookie from "../i18next/useLanguageCookie";
// import { useState } from "react";
// import allWines from "../assets/pictures/all-wines.jpg";
// import whiteWines from "../assets/pictures/white-wine.jpg";
// import redWines from "../assets/pictures/red-wine.jpg";

// const fetchWines = async () => {
//   const response = await axios.get("/db.json");
//   return response.data.wines;
// };

// const DisplayWineList = () => {
//   const { t } = useTranslation();
//   // const { getLanguageFromCookie } = useLanguageCookie();
//   // const currentLanguage = getLanguageFromCookie() || "en";
//   const [filter, setFilter] = useState("all");

//   const {
//     data: wines,
//     isLoading,
//     isError,
//   } = useQuery("wines", fetchWines, {
//     cacheTime: 8 * 60 * 60 * 1000,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

//   const filteredWines =
//     filter === "all"
//       ? wines
//       // : wines.filter((wine) => wine.type[currentLanguage] === filter);

//   return (
//     <div className="container">
//       <div className="row filter-buttons gap-2 ms-1 mt-2 mb-3 d-flex">
//         <button
//           style={{
//             width: 80,
//             height: 80,
//             backgroundImage: `url(${allWines})`,
//             border: "white solid 3px",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "30%", // Optionally remove the border
//             outline: "none", // Optionally remove the outline
//             cursor: "pointer", // Make the cursor change to pointer on hover
//             opacity: filter === "all" ? 0.7 : 1,
//           }}
//           disabled={filter === "all"}
//           onClick={() => setFilter("all")}
//           className={filter === "all" ? "active" : ""}
//         ></button>
//         <button
//           style={{
//             width: 80,
//             height: 80,

//             backgroundImage: `url(${whiteWines})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             border: "white solid 3px",
//             borderRadius: "30%", // Optionally remove the borderRadius30%      outline: "none", // Optionally remove the outline
//             cursor: "pointer", // Make the cursor change to pointer on hover
//             opacity: filter === "White" ? 0.7 : 1,
//           }}
//           disabled={filter === "White"}
//           onClick={() => setFilter("White")}
//           className={filter === "white" ? "active" : ""}
//         ></button>
//         <button
//           style={{
//             width: 80,
//             height: 80,
//             border: "white solid 3px",
//             backgroundImage: `url(${redWines})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "30%", // Optionally remove the border
//             outline: "none", // Optionally remove the outline
//             cursor: "pointer", // Make the cursor change to pointer on hover
//             opacity: filter === "Red" ? 0.7 : 1,
//           }}
//           disabled={filter === "Red"}
//           onClick={() => setFilter("Red")}
//           className={filter === "red" ? "active" : ""}
//         ></button>
//       </div>

//       <div className="row ms-1">
//         {filteredWines.map((wine) => (
//           <ProfileCard
//             key={wine.id}
//             type={t(wine.type[currentLanguage])}
//             name={t(wine.name[currentLanguage])} // Translate name based on the current language
//             region={t(wine.region[currentLanguage])} // Translate region based on the current language
//             description={t(wine.description[currentLanguage])} // Translate description based on the current language
//             imageURL={wine.image.url}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DisplayWineList;
