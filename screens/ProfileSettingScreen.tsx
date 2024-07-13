import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet, TextInput, ScrollView} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {Avatar} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import Colors from "../constants/Colors";
import Heading from "../components/Heading";

const ProfileSettingScreen = ()=> {

    const [value, setValue] = useState('');

    return (
        <SafeAreaView style={tailwind`p-5 pt-20`}>
            <Heading title={'Profile Settings'} twClass={`text-center`}/>
            <ScrollView>
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
                <Heading twClass={`font-normal text-lg`} title={'Name'}/>
                <TextInput style={tw`rounded border-2 border-gray-200 bg-white p-4`}/>

            </View>


            <Button title={'Save'} onPress={() => console.log('')}/>
            <Button title={'Logout'} tWStyles={`bg-${Colors.primaryDisabled}`} onPress={() => console.log('')}/>
            <Button title={'Delete Account'} tWStyles={`bg-${Colors.danger}`} onPress={() => console.log('')}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileSettingScreen;