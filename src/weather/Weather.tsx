import DisplayWeather from "./DisplayWeather";

const locations = [
  "tbilisi",
  "telavi",
  "gudauri",
  "borjomi",
  "kutaisi",
  "zugdidi",
  "batumi",
  "mestia",
];

const WeatherApp = () => {
  return (
    <div>
      {locations.map((location) => (
        <DisplayWeather key={location} location={location} />
      ))}
    </div>
  );
};

export default WeatherApp;
