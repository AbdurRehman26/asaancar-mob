import {createNativeStackNavigator} from "@react-navigation/native-stack";
import VehiclesList from "../../screens/driver/VehiclesList";
import AddVehicle from "../../screens/AddVehicle";

const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    VehiclesList: undefined;
    AddVehicle: undefined;
};

const VehicleStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="VehiclesList">
            <Stack.Screen
                name="VehiclesList"
                component={VehiclesList}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AddVehicle"
                component={AddVehicle}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default VehicleStackNavigation;