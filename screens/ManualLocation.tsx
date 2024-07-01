import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {Icon, SearchBar} from 'react-native-elements'
import tw from "tailwind-react-native-classnames";

const ManualLocation = ()=> {

    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={tailwind`p-5 pt-10`}>

            <Text style={tailwind`text-center font-bold text-xl pt-10 pb-10`}>
                Enter Your Location
            </Text>

            <View>

                <SearchBar
                    inputContainerStyle={tw`bg-white h-10`}
                    containerStyle={tw`bg-white rounded-xl`}
                    lightTheme
                    onChangeText={(search) => setSearch(search)}
                    placeholder="Type Here..."
                    value={search}
                />

            </View>

            <View
                style={tailwind`mt-5`}>
                <TouchableOpacity style={tailwind`p-2 pb-4 flex-row items-center border-b`}>
                    <Icon
                        size={20}
                        style={tailwind`pr-2`}
                        tvParallaxProperties={undefined}
                        name='location'
                        type='ionicon'
                        color='#000'
                    />
                    <Text style={tailwind`rounded text-lg`}>Use my current location</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={tailwind`text-sm font-bold pt-3`}>
                    Search Results
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default ManualLocation;