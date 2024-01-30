import DisplayWeather from "./DisplayWeather";

const locations = [
  "Telavi",
  "Tbilisi",
  "Gudauri",
  "Borjomi",
  "Kutaisi",
  "Zugdidi",
  "Batumi",
  "Mestia",
];

const WeatherComponent = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-3 gap-md-4">
      {locations.map((location) => (
        <DisplayWeather key={location} location={location} />
      ))}
    </div>
  );
};

export default WeatherComponent;
