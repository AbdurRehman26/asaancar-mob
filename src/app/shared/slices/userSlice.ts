import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type UserState = {
    type: string;
};

const initialState: UserState = {
    type: 'PASSENGER',
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
    },
});

export const { setUserType } =
    userSlice.actions;

export const selectUserType = (state: RootState) => state.user.type;

export default userSlice.reducer;
