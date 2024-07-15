import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PaymentMethodListScreen from "../../screens/payment-method/PaymentMethodListScreen";
import PaymentMethodViewScreen from "../../screens/payment-method/PaymentMethodViewScreen";
import PaymentMethodAddEditScreen from "../../screens/payment-method/PaymentMethodAddEditScreen";

const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    PaymentMethodListScreen: undefined;
    PaymentMethodViewScreen: undefined;
    PaymentMethodAddEditScreen: undefined;
};

const PaymentMethodStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="PaymentMethodListScreen">
            <Stack.Screen
                name="PaymentMethodListScreen"
                component={PaymentMethodListScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PaymentMethodViewScreen"
                component={PaymentMethodViewScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PaymentMethodAddEditScreen"
                component={PaymentMethodAddEditScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default PaymentMethodStackNavigation;