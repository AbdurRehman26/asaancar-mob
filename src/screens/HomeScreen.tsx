import {Text, View} from "react-native";
import Map from "@components/Map";
import React from "react";
import tw from "twrnc";
import Panel from "@components/fragments/Panel";
import InputText from "@components/fragments/InputText";
import Heading from "@components/fragments/Heading";
import {Icon} from "react-native-elements";

const MapScreen = () => {

  return (
    <View>
      <View style={tw`h-4/7`}>
        <Map />
      </View>
        <View style={tw`h-3/7`}>
            <Panel panelClass={'h-full pt-7 px-0 flex-col items-start'}>
                <InputText placeHolder={'Set your location'} twClasses={'w-80'}/>

                <View style={tw`flex-row items-center mt-2 border-b-2 border-gray-100 w-full p-4`}>
                    <Icon type={'ionicon'} style={tw`bg-gray-100 rounded-full p-4 mr-4`} name={'home'} />
                    <View>
                        <Text>Home</Text>
                        <Text>D-68/A Shah Faisal Town Malir Halt</Text>
                    </View>
                </View>


            </Panel>
        </View>
    </View>
  );
};

export default MapScreen;
