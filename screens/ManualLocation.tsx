import {Text, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import Map from "@components/Map";
import Button from "@components/fragments/Button";
import {useEffect, useState} from "react";
import * as Location from 'expo-location';
import {selectOrigin} from "../app/slices/navigationSlice";
import {useSelector} from "react-redux";
import Heading from "@components/fragments/Heading";

const ManualLocation = ()=> {

    const origin = useSelector(selectOrigin);
    const [address, setAddress] = useState('')

    Location.reverseGeocodeAsync({
        latitude: origin?.location?.lat ?? 0,
        longitude: origin?.location?.lng ?? 0
    }).then((response) => {
        setAddress(response[0].formattedAddress ?? '')
    });

    return (
        <View>
            <View style={tailwind`h-2/3`}>
                <Map />
            </View>
            <View style={tailwind`h-1/3`}>
                <View>
                    <Heading title={address} twClass={'m-10 mb-0 text-sm'}/>
                </View>

                <Button tWStyles={'m-10'} title={'Select Pickup'} onPress={() => console.log('pressed')}/>
            </View>
        </View>
    );
};

export default ManualLocation;