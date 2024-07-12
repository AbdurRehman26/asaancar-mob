import { View } from "react-native";
import Map from "../components/Map";
import React from "react";
import tailwind from "tailwind-react-native-classnames";

const MapScreen = () => {

  return (
    <View>
      <View style={tailwind`h-1/2`}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
