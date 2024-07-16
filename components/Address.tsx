import {Text, View} from "react-native";
import React from "react";
import tw from "twrnc";

interface AddressProps{
    title: string
}

const Address = ({title}: AddressProps) => {
    return (
        <View style={tw`rounded border-b-2 border-gray-200 p-3`}>
            <Text style={tw`text-base`}>{title}</Text>
        </View>
    )
}

export default Address;