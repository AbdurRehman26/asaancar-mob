import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import {LocationObject} from "expo-location";

type LocationState = {
    location: LocationObject;
};

const initialState: LocationState = {
    location: {
        timestamp: 0,
        coords: {
            speed: 1,
            longitude: 0,
            latitude: 0,
            accuracy: 1,
            altitude: 1,
            altitudeAccuracy: 1,
            heading: 1
        }
    },
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationObject>) => {
            state.location = action.payload;
        },
    },
});

export const { setLocation } =
    locationSlice.actions;

export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer;
