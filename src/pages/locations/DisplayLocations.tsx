import axios from "axios";
import { useQuery } from "react-query";
import LocationCard from "./LocationCard";
import i18next from "i18next";

interface Location {
  id: number;
  name: { [key: string]: string };
  intro: { [key: string]: string };
  description: { [key: string]: string };
  imageURLs: string[];
}
const fetchLocations = async () => {
  const response = await axios.get("db.json");
  return response.data.locations;
};

const DisplayLocations = () => {
  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery("locations", fetchLocations, {
    cacheTime: 8 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="row">
      {locations.map((location: Location) => (
        <LocationCard
          id={location.id}
          key={location.id}
          name={location.name[i18next.language]}
          intro={location.intro[i18next.language]}
          description={location.description[i18next.language]}
          imageURLs={location.imageURLs}
        />
      ))}
    </div>
  );
};

export default DisplayLocations;
