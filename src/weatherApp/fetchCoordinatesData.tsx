import axios from "axios";
import { useQuery } from "react-query";

const fetchCoordinatesData = async (location: string) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;

  const response = await axios.get(apiUrl);

  const { lat, lon } = response.data[0];
  return [lat, lon];
};

const useCoordinatesData = (location: string) => {
  return useQuery(
    ["coordinates", location],
    () => fetchCoordinatesData(location),
    {
      cacheTime: 4 * 60 * 60 * 1000,
      staleTime: 4 * 60 * 60 * 1000,
    }
  );
};

export default useCoordinatesData;
