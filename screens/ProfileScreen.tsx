import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {Avatar} from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const ProfileScreen = ()=> {

    const [value, setValue] = useState('');

    return (
        <SafeAreaView style={tailwind`p-5 pt-20`}>
            <Text style={tailwind`text-center font-bold text-xl pt-10`}>
                Profile Update
            </Text>
            <View style={tailwind`items-center mt-5`}>
                <Avatar
                    overlayContainerStyle={tailwind`bg-red-600`}
                    size="large"
                    rounded
                    title="CR"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>

            <View>
                <Text style={tailwind`font-normal text-lg pb-2 pt-4`}>
                    Name
                </Text>
                <TextInput style={tw`rounded border-2 border-gray-200 bg-white p-2`}/>

            </View>

            <View
                style={tailwind`rounded bg-purple-500 p-4 mt-4`}>
                <TouchableOpacity>
                    <Text style={tailwind`text-center text-white font-bold`}>Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default ProfileScreen;