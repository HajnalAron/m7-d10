import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getGeoLocation } from "../features/GeoLocation/geoLocation";
import {
  geoLocationData,
  setGeoLocation
} from "../features/GeoLocation/geoLocationSlice";
import { getCityWeatherData } from "../features/WeatherData/cityWeatherDataSlice";
import { getCoordsWeatherData } from "../features/WeatherData/coordsWeatherData";
import { setCoordsWeatherData } from "../features/WeatherData/coordsWeatherDataSlice";

export default function HomePage() {
  const geoCoords = useAppSelector(geoLocationData);
  const dispatch = useAppDispatch();
  const getGeoData = async () => {
    const geoData = await getGeoLocation();
    dispatch(setGeoLocation(geoData));
  };
  const getCoordsData = async () => {
    const coordsWeatherData = await getCoordsWeatherData(geoCoords);
    dispatch(setCoordsWeatherData(await coordsWeatherData));
  };
  useEffect(() => {
    getGeoData();
    dispatch(getCityWeatherData("Budapest"));
  }, []);

  useEffect(() => {
    getCoordsData();
  }, [geoCoords]);
  return <div></div>;
}
