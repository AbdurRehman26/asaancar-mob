import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import locationReducer from "./slices/locationSlice";

export const store = configureStore({
  reducer: { navigation: navigationReducer, location: locationReducer, },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
