import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyCodeScreen from "@screens/startup/VerifyCodeScreen";
import UserTypeSelectionScreen from "@screens/startup/UserTypeSelectionScreen";
import AllowLocation from "@screens/startup/AllowLocation";
import MainScreenNavigation from "./MainScreenNavigation";

export type StackList = {
    VerifyCodeScreen: undefined;
    AllowLocation:undefined;
    UserTypeSelectionScreen:undefined;
    MainScreenNavigation:undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const StartUpStackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="VerifyCodeScreen">
          <Stack.Screen
              name="VerifyCodeScreen"
              component={VerifyCodeScreen}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="UserTypeSelectionScreen"
              component={UserTypeSelectionScreen}
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
              name="MainScreenNavigation"
              component={MainScreenNavigation}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  );
};

export default StartUpStackNavigation;
