import {createDrawerNavigator} from "@react-navigation/drawer";
import VehicleNavigator from "../../components/navigators/VehicleNavigator";

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName="Vehicles">
          <Drawer.Screen name="Vehicles" component={VehicleNavigator} />
      </Drawer.Navigator>
  );
};

export default HomeNavigation;
