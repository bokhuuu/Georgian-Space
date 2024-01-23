import axios from "axios";

const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;

    const response = axios.get(apiUrl);
    console.log((await response).data);

    return response;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export default fetchWeatherByCoordinates;
