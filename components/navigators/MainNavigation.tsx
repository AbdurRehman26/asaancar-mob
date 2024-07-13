import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyCodeScreen from "../../screens/startup/VerifyCodeScreen";
import UserTypeSelectionScreen from "../../screens/startup/UserTypeSelectionScreen";
import AllowLocation from "../../screens/startup/AllowLocation";
import MainScreen from "../../screens/MainScreen";

export type StackList = {
    VerifyCodeScreen: undefined;
    AllowLocation:undefined;
    UserTypeSelectionScreen:undefined;
    MainScreen:undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const MainNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="MainScreen">
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
              name="MainScreen"
              component={MainScreen}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  );
};

export default MainNavigation;
