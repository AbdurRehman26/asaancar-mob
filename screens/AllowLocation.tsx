import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements'

const AllowLocation = ()=> {

    const [value, setValue] = useState('');

    return (
        <SafeAreaView style={tailwind`p-5 pt-10`}>
            <View style={tailwind`items-center mt-10`}>


                <Icon
                    reverse
                    size={50}
                    tvParallaxProperties={undefined}
                    name='location-outline'
                    type='ionicon'
                    color='#517fa4'
                />

            </View>

            <Text style={tailwind`text-center font-bold text-2xl pt-10`}>
                What is your location?
            </Text>

            <View>
                <Text style={tailwind`font-normal text-center pb-2 pt-4`}>
                    By signing up, you agree to GoGoRide's Terms of Service and Privacy Policy
                </Text>

            </View>

            <View
                style={tailwind`mt-10`}>
                <TouchableOpacity>
                    <Text style={tailwind`rounded  p-4 bg-purple-500  text-center text-white font-bold`}>Allow Location Access</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={tailwind`mt-5 rounded p-4 bg-purple-100 text-center text-purple-600 font-bold`}>Enter Location Manually</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

export default AllowLocation;