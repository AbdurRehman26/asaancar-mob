import EatsScreen from "../screens/EatsScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/SignupScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AllowLocation from "../screens/AllowLocation";
import ManualLocation from "../screens/ManualLocation";
import VehicleList from "../screens/VehicleList";
import VehicleDetail from "../screens/VehicleDetailScreen";
import BookingPreviewScreen from "../screens/BookingPreviewScreen";

export type StackList = {
    HomeScreen: undefined;
    MapScreen: undefined;
    EatsScreen: undefined;
    SignupScreen: undefined;
    VerifyCodeScreen: undefined;
    ProfileScreen: undefined;
    AllowLocation:undefined;
    ManualLocation:undefined;
    VehicleList:undefined;
    VehicleDetail:undefined;
    BookingPreviewScreen:undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ManualLocation">
        <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="VerifyCodeScreen"
            component={VerifyCodeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="AllowLocation"
            component={AllowLocation}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="ManualLocation"
            component={ManualLocation}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EatsScreen"
        component={EatsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
