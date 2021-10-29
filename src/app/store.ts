import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import geoLocationReducer from "../features/GeoLocation/geoLocationSlice";
import cityWeatherDataReducer from "../features/WeatherData/cityWeatherDataSlice";
import coordsWeatherDataReducer from "../features/WeatherData/coordsWeatherDataSlice";

export const store = configureStore({
  reducer: {
    geoLocation: geoLocationReducer,
    coordsWeatherData: coordsWeatherDataReducer,
    cityWeatherData: cityWeatherDataReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
