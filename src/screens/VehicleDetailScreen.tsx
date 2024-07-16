import {Text, View, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import VehicleMediaSwiper from "@components/VehicleMediaSwiper";
import tw from "twrnc";
import {Avatar, Button, Icon} from "react-native-elements";
import tailwind from "twrnc";
import React, {useState} from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    radioButton: {
        marginRight: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#007BFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
    },
    radioButtonText: {
        fontSize: 16,
    },
});
const CustomRadioButton = ({ label, selected, onSelect }: any) => (
    <TouchableOpacity
        style={[styles.radioButton,
            { backgroundColor: selected ? '#007BFF' : '#FFF' }]}
        onPress={onSelect}
    >
        <Text style={[styles.radioButtonText,
            { color: selected ? '#FFF' : '#000' }]}>
            {label}
        </Text>
    </TouchableOpacity>
);
const VehicleDetailScreen = ()=> {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
            <View style={tw`h-60`}>
                <VehicleMediaSwiper/>
            </View>
            <View style={tw`flex-row justify-between p-4`}>
                <Text style={tw`font-semibold text-2xl`}>Tesla</Text>
                <Text style={tw`font-semibold text-2xl`}>200/hr</Text>
            </View>
            <View style={tw`flex-row px-4 items-center`}>
                <Icon tvParallaxProperties={false} type={'ionicon'} name={'star'}></Icon>
                <Text style={tw` text-xl`}>5.0 -</Text>
                <Text style={tw` text-xl`}> 10 Trips</Text>
            </View>

            <View style={tw`p-4`}>
                <Text style={tw`font-bold text-2xl`}>Driver</Text>
                <View style={tw`rounded-lg bg-red-200 mt-2 p-4 flex-row justify-between`}>
                    <View style={tw`flex-row`}>
                        <Avatar
                            overlayContainerStyle={tailwind`bg-red-600`}
                            size="large"
                            rounded
                            title="CR"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <View style={tw`font-semibold text-2xl mx-2`}>
                            <Text style={tw`text-xl`}>Tesla</Text>
                            <Text style={tw`text-xl`}>Tesla</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row`}>
                        <Icon tvParallaxProperties={false} type={'ionicon'} name={'message'} />
                        <Icon tvParallaxProperties={false} type={'ionicon'} name={'call'} />
                    </View>
                </View>
            </View>

            <View style={tw`p-4`}>
                <Text style={tw`font-bold text-2xl`}>Rent Type</Text>
                <View style={tw`pb-4 pt-0 flex-row`}>
                    <CustomRadioButton
                        label="With Driver"
                        selected={selectedValue === 'option1'}
                        onSelect={() => setSelectedValue('option1')}
                    />
                    <CustomRadioButton
                        label="Driver"
                        selected={selectedValue === 'option2'}
                        onSelect={() => setSelectedValue('option2')}
                    />
                </View>
            </View>
            </ScrollView>

            <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <Text>Price</Text>
                        <Text>500</Text>
                    </View>
                    <Button title={'Book Now'}></Button>
                </View>
            </View>
        </View>
    );
};

export default VehicleDetailScreen;