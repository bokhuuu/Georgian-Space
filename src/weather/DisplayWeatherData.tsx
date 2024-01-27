import useCoordinatesData from "./fetchCoordinatesData";
import useWeatherData from "./fetchWeatherData";

interface DisplayWeatherDataProps {
  location: string;
}

const DisplayWeatherData: React.FC<DisplayWeatherDataProps> = ({
  location,
}) => {
  const coordinatesQuery = useCoordinatesData(location);
  const {
    data: coordinatesData,
    isLoading: coordinatesLoading,
    isError: coordinatesError,
  } = coordinatesQuery;

  const {
    data: weatherData,
    isLoading: weatherLoading,
    isError: weatherError,
  } = useWeatherData(coordinatesData?.[0], coordinatesData?.[1]);

  if (coordinatesLoading || weatherLoading) {
    return <div>Loading...</div>;
  }

  if (coordinatesError || weatherError || !coordinatesData) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  if (!coordinatesData[0] || !coordinatesData[1]) {
    return <div>Error: Coordinates not found for location {location}</div>;
  }

  return (
    <div>
      <h5>{location}</h5>
      {Math.round(weatherData.current.temp)} °c
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      {weatherData.current.weather[0].description}
    </div>
  );
};

export default DisplayWeatherData;
