import {createDrawerNavigator} from "@react-navigation/drawer";
import ProfileSettingScreen from "./ProfileSettingScreen";
import VehicleStackNavigation from "../components/navigators/VehicleStackNavigation";
import CustomDrawerNavigation from "../components/navigators/CustomDrawerNavigation";
import RideMain from "./driver/rides/RideMain";
import RideDetail from "./driver/rides/RideDetail";
import {Icon} from "react-native-elements";
import ProfileSettingStackNavigation from "../components/navigators/ProfileSettingStackNavigation";

const Drawer = createDrawerNavigator();

const MainScreen = () => {

    return (
        <Drawer.Navigator defaultStatus={'closed'} initialRouteName={'Trips'} drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
            <Drawer.Screen
                name="Profile Settings"
                component={ProfileSettingStackNavigation}
                options={{ headerShown: true, drawerIcon: () => (
                    <Icon tvParallaxProperties={false} type='ionicon' name={'person-outline'} />
                    ) }}
            />
            <Drawer.Screen
                name="My Vehicles"
                component={VehicleStackNavigation}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'car-outline'} />
                    )
            }}
            />
            <Drawer.Screen
                name="Trips"
                component={RideMain}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'map-outline'} />
                    )
            }}
            />
                <Drawer.Screen
                    name="Payment"
                    component={RideMain}
                    options={{
                            headerShown: true,
                            drawerIcon: () => (
                                <Icon tvParallaxProperties={false} type='ionicon' name={'card-outline'} />
                            )
                    }}
                />
                <Drawer.Screen
                    name="Wallet"
                    component={RideMain}
                    options={{
                            headerShown: true,
                            drawerIcon: () => (
                                <Icon tvParallaxProperties={false} type='ionicon' name={'wallet-outline'} />
                            )
                    }}
                />
        </Drawer.Navigator>
    )
}

export default MainScreen;