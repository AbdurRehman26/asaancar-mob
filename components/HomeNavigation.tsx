import EatsScreen from "../screens/EatsScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/SignupScreen";

export type StackList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  EatsScreen: undefined;
  SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
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
