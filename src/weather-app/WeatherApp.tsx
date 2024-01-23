// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchData = async () => {
//   try {
//     // Make an API call using Axios
//     const response = await axios.get("https://api.example.com/data");

//     // Return the data from the API response
//     return response.data;
//   } catch (error) {
//     // Handle errors
//     // console.error("Error fetching data:", error);
//     throw new Error("Failed to fetch data");
//   }
// };

// export const WeatherApp = () => {
//   const { data } = useQuery({
//     queryKey: ["test"],
//     queryFn: fetchData,
//   });

//   return <div>WeatherApp</div>;
// };

// export default WeatherApp;
