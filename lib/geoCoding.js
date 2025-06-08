import axios from "axios";

export const fetchGeoData = async (value) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
    );
    const [geo] = response.data;
    return { lat: geo.lat, lng: geo.lon };
  } catch (error) {
    console.error("Error fetching geo data:", error);
    return null;
  }
};
