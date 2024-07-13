import {createDrawerNavigator} from "@react-navigation/drawer";
import {useSelector} from "react-redux";
import {selectUserType} from "../app/slices/userSlice";
import ProfileSettingScreen from "./ProfileSettingScreen";
import VehicleStackNavigation from "../components/navigators/VehicleStackNavigation";
import CustomDrawerNavigation from "../components/navigators/CustomDrawerNavigation";

const Drawer = createDrawerNavigator();

const MainScreen = () => {

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
            <Drawer.Screen
                name="Vehicles"
                component={VehicleStackNavigation}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Profile Settings"
                component={ProfileSettingScreen}
                options={{ headerShown: true }}
            />
        </Drawer.Navigator>
    )
}

export default MainScreen;