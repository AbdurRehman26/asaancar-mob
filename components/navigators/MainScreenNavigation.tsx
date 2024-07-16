import {createDrawerNavigator} from "@react-navigation/drawer";
import VehicleStackNavigation from "@components/navigators/VehicleStackNavigation";
import CustomDrawerNavigation from "@components/navigators/CustomDrawerNavigation";
import {Icon} from "react-native-elements";
import ProfileSettingStackNavigation from "@components/navigators/ProfileSettingStackNavigation";
import RideList from "@screens/driver/rides/RideList";
import PaymentMethodStackNavigation from "@components/navigators/PaymentMethodStackNavigation";
import Panel from "@components/fragments/Panel";
import Heading from "@components/fragments/Heading";
import InviteFriendScreen from "@screens/InviteFriendScreen";
import StartUpStackNavigation from "@components/navigators/StartUpStackNavigation";

const Drawer = createDrawerNavigator();

const MainScreenNavigation = () => {
    return <DriverScreenNavigation/>
}

const DriverScreenNavigation = () => {
    return (
        <Drawer.Navigator defaultStatus={'closed'} initialRouteName={'Profile Settings'} drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
            <Drawer.Screen
                name="StartUpStackNavigation"
                component={StartUpStackNavigation}
                options={{ headerShown: true, drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'person-outline'} />
                    ) }}
            />
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
                component={RideList}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'map-outline'} />
                    )
                }}
            />
            <Drawer.Screen
                name="Payment Methods"
                component={PaymentMethodStackNavigation}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'card-outline'} />
                    )
                }}
            />
            <Drawer.Screen
                name="Wallet (Coming Soon)"
                component={() => (<Panel panelClass={'items-center justify-center p-20 h-full'}><Heading title={'Coming Soon'}/></Panel>)}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'wallet-outline'} />
                    )
                }}
            />
            <Drawer.Screen
                name="Invite Friends"
                component={InviteFriendScreen}
                options={{
                    headerShown: true,
                    drawerIcon: () => (
                        <Icon tvParallaxProperties={false} type='ionicon' name={'send-outline'} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default MainScreenNavigation;