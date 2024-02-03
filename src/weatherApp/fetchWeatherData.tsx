import axios from "axios";
import { useQuery } from "react-query";

const fetchWeatherData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  const response = await axios.get(apiUrl);
  return response.data;
};

const useWeatherData = (lat: number, lon: number) => {
  return useQuery(["weather", lat, lon], () => fetchWeatherData(lat, lon), {
    enabled: !!lat && !!lon,
    cacheTime: 4 * 60 * 60 * 1000,
    staleTime: 4 * 60 * 60 * 1000,
  });
};

export default useWeatherData;
