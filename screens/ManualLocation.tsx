import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, FlatList, StyleSheet} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {Icon, SearchBar} from 'react-native-elements'
import tw from "tailwind-react-native-classnames";
import {useDispatch, useSelector} from "react-redux";
import {selectLocation, setLocation} from "../app/slices/locationSlice";
import * as Location from 'expo-location';
import Address from "../components/Address";
import Colors from "../constants/Colors";
import {setDestination, setOrigin} from "../app/slices/navigationSlice";
import {GOOGLE_MAPS_API_KEY} from "@env";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Map from "../components/Map";

const ManualLocation = ()=> {

    const locationSelector = useSelector(selectLocation);
    const [addresses, setAddresses] = useState([]);
    const dispatch = useDispatch();
    const allowLocation = useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            alert('Permission not granted');
        }

        let location = await Location.getCurrentPositionAsync({});
        dispatch(setLocation(location));
    }, []);

    useEffect(() => {
        Location.reverseGeocodeAsync(locationSelector.location.coords).then((response: any) => {
            setAddresses(response)
        })
    }, [locationSelector]);

    return (
        <SafeAreaView style={tailwind`p-5 pt-10`}>

            <Text style={tailwind`text-center font-bold text-xl pt-10 pb-10`}>
                Enter Your Location
            </Text>

            <View>

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where from?"
                    enablePoweredByContainer={false}
                    minLength={2}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                        dispatch(
                            setOrigin({
                                location: details?.geometry.location,
                                description: data.description,
                            })
                        );
                        dispatch(setDestination(null));
                    }}
                    onFail={(error) => console.log(error)}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: "en",
                    }}
                    styles={{
                        container: {
                            flex: 0
                        },
                    }}
                />

            </View>

            <View>
                <TouchableOpacity onPress={allowLocation} style={tailwind`p-2 pb-4 flex-row items-center border-b`}>
                    <Icon
                        size={20}
                        style={tailwind`pr-2`}
                        tvParallaxProperties={undefined}
                        name='location'
                        type='ionicon'
                        color={Colors.primaryCode}
                    />
                    <Text style={tailwind`rounded text-lg`}>Use my current location</Text>
                </TouchableOpacity>
            </View>

            <Map/>
        </SafeAreaView>
    );
};

export default ManualLocation;