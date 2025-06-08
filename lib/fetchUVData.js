import axios from "axios";

export const fetchUVData = async (lat, lng) => {
  try {
    const response = await axios.get("https://api.openuv.io/api/v1/forecast", {
      params: { lat, lng },
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_OPENUV_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching UV data:", error.response?.data || error.message);
    return null;
  }
};