import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileSettingScreen from "@screens/ProfileSettingScreen";
import AccountInfo from "@screens/setting/AccountInfo";
import ContactUs from "@screens/setting/ContactUs";

const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    ProfileSettingScreen: undefined;
    AccountInfo: undefined;
    ContactUs: undefined;
};

const ProfileSettingStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileSettingScreen">
            <Stack.Screen
                name="ProfileSettingScreen"
                component={ProfileSettingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AccountInfo"
                component={AccountInfo}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ContactUs"
                component={ContactUs}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileSettingStackNavigation;