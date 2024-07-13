import {createDrawerNavigator} from "@react-navigation/drawer";
import ProfileSettingScreen from "./ProfileSettingScreen";
import VehicleStackNavigation from "../components/navigators/VehicleStackNavigation";
import CustomDrawerNavigation from "../components/navigators/CustomDrawerNavigation";
import RideMain from "./driver/rides/RideMain";
import RideDetail from "./driver/rides/RideDetail";

const Drawer = createDrawerNavigator();

const MainScreen = () => {

    return (
        <Drawer.Navigator initialRouteName={'RideDetail'} drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
            <Drawer.Screen
                name="Profile Settings"
                component={ProfileSettingScreen}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Vehicles"
                component={VehicleStackNavigation}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="RideMain"
                component={RideMain}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="RideDetail"
                component={RideDetail}
                options={{ headerShown: false }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default MainScreen;