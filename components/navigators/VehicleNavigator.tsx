import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Vehicles from "../../screens/Vehicles";
import AddVehicle from "../../screens/AddVehicle";

const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    Vehicles: undefined;
    AddVehicle: undefined;
};

const VehicleNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Vehicles">
            <Stack.Screen
                name="Vehicles"
                component={Vehicles}
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

export default VehicleNavigator;