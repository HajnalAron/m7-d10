import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../typings/weatherData";

type WeatherDataState = WeatherData | null;

const initialState = null as WeatherDataState;

export const coordsWeatherData = createSlice({
  name: "coordsWeatherData",
  initialState,
  reducers: {
    setCoordsWeatherData: (state, action: PayloadAction<WeatherData>) => {
      return (state = action.payload);
    }
  }
});

export const { setCoordsWeatherData } = coordsWeatherData.actions;

export default coordsWeatherData.reducer;
