import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginRequestDto } from '@shared/dto/LoginRequestDto';
import { ToggleCustomerMarketingNotificationsEnabledDto } from '@shared/dto/ToggleCustomerMarketingNotificationsEnabledDto';
import { UpdateUserProfileDto } from '@shared/dto/UpdateUserProfileDto';
import { app } from '@app/shared/lib/app';
import { updateUserProfileData } from '@shared/redux/slices/authenticationSlice';
import { UserRepository } from '@shared/repositories/UserRepository';
import { AuthenticationService } from '@shared/services/AuthenticationService';
import { NotificationsService } from '@app/shared/services/NotificationService';

export const updateUserProfile = createAsyncThunk(
    'user/updateProfile',
    async (input: UpdateUserProfileDto, thunkAPI) => {
        const userRepository = app(UserRepository);
        try {
            const data = await userRepository.updateUserProfile(input);
            thunkAPI.dispatch(updateUserProfileData(data));
            NotificationsService.success('Profile updated successfully!');
        } catch (error: any) {
            NotificationsService.exception(error);
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateUserPassword = createAsyncThunk(
    'user/updateUserPassword',
    async (input: any, thunkAPI) => {
        const authenticationService = app(AuthenticationService);
        const userRepository = app(UserRepository);
        try {
            const data = await userRepository.updateUserPassword(input);
            await authenticationService.setAccessToken(data.accessToken);
            NotificationsService.success('Password changed successfully!');
        } catch (error: any) {
            NotificationsService.exception(error);
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deactivateProfile = createAsyncThunk('user/deactivateProfile', async () => {
    const userRepository = app(UserRepository);
    try {
        await userRepository.deactivateProfile();
        NotificationsService.success('Profile deactivated successfully!');
    } catch (error: any) {
        NotificationsService.exception(error);
        return error;
    }
});

export const deleteProfile = createAsyncThunk('user/deleteProfile', async () => {
    const userRepository = app(UserRepository);
    try {
        await userRepository.deleteProfile();
        NotificationsService.success('Profile deleted successfully!');
    } catch (error: any) {
        NotificationsService.exception(error);
        return error;
    }
});

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {},
    reducers: {},
    extraReducers: {
        [updateUserProfile.rejected as any]: (state, action) => {
            return action.payload;
        },
    },
});
