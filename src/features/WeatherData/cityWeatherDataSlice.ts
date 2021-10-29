import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axios from "axios";
import { WeatherData } from "../../typings/weatherData";

type WeatherDataState = WeatherData | null;

const initialState = null as WeatherDataState;

export const getCityWeatherData = createAsyncThunk(
  "cityWeatherData/getCityWeatherData",
  async (cityName: string) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const cityAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    try {
      const req = await Axios.get(cityAPI_URL);
      return req.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const cityWeatherData = createSlice({
  name: "cityWeatherData",
  initialState,
  reducers: {
    setCityWeatherData: (state, action: PayloadAction<WeatherData>) => {
      return (state = action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCityWeatherData.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  }
});

export const { setCityWeatherData } = cityWeatherData.actions;

export default cityWeatherData.reducer;
