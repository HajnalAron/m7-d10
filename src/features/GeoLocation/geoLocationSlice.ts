import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface geoLocation {
  data: {
    latitude: number | null;
    longitude: number | null;
  };
}

const initialState: geoLocation = {
  data: {
    longitude: null,
    latitude: null
  }
};

export const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {
    setGeoLocation: (state, action: PayloadAction<geoLocation>) => {
      return (state = action.payload);
    }
  }
});

export const { setGeoLocation } = geoLocationSlice.actions;

export const geoLocationData = (state: RootState) => state.geoLocation;

export default geoLocationSlice.reducer;
