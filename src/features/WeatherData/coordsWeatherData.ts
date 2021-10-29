import axios from "axios";
import { geoLocation } from "../GeoLocation/geoLocationSlice";

export const getCoordsWeatherData = async ({
  data: { latitude, longitude }
}: geoLocation) => {
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const coordsAPI_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  try {
    const req = await axios.get(coordsAPI_URL);
    console.log(req);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};
