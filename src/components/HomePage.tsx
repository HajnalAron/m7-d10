import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getGeoLocation } from "../features/GeoLocation/geoLocation";
import {
  geoLocationData,
  setGeoLocation
} from "../features/GeoLocation/geoLocationSlice";
import { getCoordsWeatherData } from "../features/WeatherData/coordsWeatherData";
import { setCoordsWeatherData } from "../features/WeatherData/coordsWeatherDataSlice";

export default function HomePage() {
  const geoCoords = useAppSelector(geoLocationData);
  const dispatch = useAppDispatch();
  const getGeoData = async () => {
    const geoData = await getGeoLocation();
    dispatch(setGeoLocation(geoData));
    const coordsWeatherData = await getCoordsWeatherData(geoCoords);
    dispatch(setCoordsWeatherData(coordsWeatherData));
  };
  useEffect(() => {
    getGeoData();
  }, []);
  return <div></div>;
}
