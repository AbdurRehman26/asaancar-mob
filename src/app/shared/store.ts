import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: { navigation: navigationReducer, user: userReducer },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
