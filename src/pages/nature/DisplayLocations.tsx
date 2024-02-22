import axios from "axios";
import { useQuery } from "react-query";
import LocationCard from "./LocationCard";

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
      {locations.map((location) => (
        <LocationCard
          id={0}
          name={location.name.en}
          intro={location.intro.en}
        />
      ))}
    </div>
  );
};

export default DisplayLocations;
