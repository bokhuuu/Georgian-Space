import axios from "axios";

const fetchCordinates = async (location: string) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    const { lat, lon } = response.data[0];

    return [lat, lon];
  } catch (error) {
    throw new Error("Failed to fetch cordinates data");
  }
};

export default fetchCordinates;
