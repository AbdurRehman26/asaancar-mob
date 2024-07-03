import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View} from "react-native";
import React, {useCallback, useEffect} from "react";
import tailwind from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements'
import Colors from "../constants/Colors";
import * as Location from 'expo-location';
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    setLocation,
    selectLocation
} from "../app/slices/locationSlice";
const AllowLocation = ({ navigation })=> {

    const locationSelector = useSelector(selectLocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if(locationSelector.location.coords.latitude !== 0){
            navigation.navigate('ManualLocation')
        }
    }, []);


    const allowLocation = useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            alert('Permission not granted');
        }

        let location = await Location.getCurrentPositionAsync({});
            dispatch(setLocation(location));
            navigation.navigate('ManualLocation')
    }, []);
    
    return (
        <SafeAreaView style={tailwind`p-5 pt-10`}>
            <View style={tailwind`items-center mt-10`}>
                <Icon
                    reverse
                    size={40}
                    tvParallaxProperties={undefined}
                    name='location-outline'
                    type='ionicon'
                    color={`${Colors.primaryCode}`}
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

                <Button title={'Allow Location Access'} onPress={allowLocation}/>

                <TouchableOpacity>
                    <Text style={tailwind`mt-5 rounded p-4 bg-purple-100 text-center text-purple-600 font-bold`}>Enter Location Manually</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

export default AllowLocation;