import DisplayWeatherData from "./DisplayWeatherData";

const locations = [
  "Telavi",
  "Tbilisi",
  "Bakuriani",
  "Gudauri",
  "Borjomi",
  "Kutaisi",
  "Zugdidi",
  "Batumi",
  "Mestia",
];

const WeatherApp = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {locations.map((location) => (
        <DisplayWeatherData key={location} location={location} />
      ))}
    </div>
  );
};

export default WeatherApp;
