import axios from "axios";

const fetchWeatherData = async (lat: number, lon: number) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

    const response = axios.get(apiUrl);
    return (await response).data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export default fetchWeatherData;
