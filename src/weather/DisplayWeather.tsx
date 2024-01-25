import { useState, useEffect } from "react";
import fetchCoordinatesData from "./fetchCoordinatesData";
import fetchWeatherData from "./fetchWeatherData";

interface WeatherData {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

interface WeatherProps {
  location: string;
}

const DisplayWeather: React.FC<WeatherProps> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lat, lon] = await fetchCoordinatesData(location);

        const locationWeather = await fetchWeatherData(lat, lon);

        setWeatherData(locationWeather);
      } catch (error) {
        console.error(`Error fetching data for ${location}:`, error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <>
      <h5>{location}</h5>
      {weatherData ? (
        <div>
          {Math.round(weatherData.current.temp)} °c
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          {weatherData.current.weather[0].description}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DisplayWeather;
