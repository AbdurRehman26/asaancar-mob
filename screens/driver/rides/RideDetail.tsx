import {ScrollView, Text, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import Map from "@components/Map";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Button from "@components/Button";
import Colors from "@constants/Colors";
import {Avatar} from "react-native-elements";
import Heading from "@components/Heading";
import { Icon } from "react-native-elements";

const RideDetail = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <View style={tailwind`h-1/3`}>
                <Map />
            </View>
            <ScrollView>
                <View style={tailwind`h-2/3`}>
                    <View style={tw`flex-row p-4 items-center`}>
                        <View>
                            <Avatar
                                overlayContainerStyle={tailwind`bg-red-600`}
                                size="medium"
                                rounded
                                title="CR"
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                        </View>
                        <View>
                            <Heading twClass={`font-normal text-lg ml-2`} title={'Name of Driver'}/>
                            <Icon
                                style={tailwind`p-2 bg-transparent rounded-full w-10`}
                                type="antdesign"
                                color="gold"
                                name="star"
                            />
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mx-5`}>
                        <Heading twClass={`text-lg`} title={'City Aspire'}/>
                        <View style={tw`flex-row items-center`}>
                            <Icon
                                style={tailwind`p-2 bg-transparent rounded-full w-10`}
                                type="antdesign"
                                color="gold"
                                name="star"
                            />
                            <Heading twClass={`text-lg`} title={'APZ-001'}/>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between mx-5`}>
                        <Button tWStyles={`w-36`} title={'Message'} onPress={() => console.log(1)}/>
                        <Button tWStyles={`w-36 bg-${Colors.primaryDisabled}`} title={'Call'} onPress={() => console.log(1)}/>
                    </View>

                    <View style={tw`mx-5 mt-5`}>
                        <Heading title={'Ride Info'}/>
                        <View style={tw`flex-row mt-2 items-center`}>
                            <Icon
                                style={tailwind`bg-transparent mr-2 rounded-full w-6`}
                                type="antdesign"
                                color="gold"
                                name="star"
                            />
                            <Text>D-68/A Shah Faisal Town</Text>
                        </View>
                        <View style={tw`mt-4 flex-row items-center`}>
                            <Icon
                                style={tailwind`bg-transparent mr-2 rounded-full w-6`}
                                type="ionicon"
                                color="black"
                                name="cash-outline"
                            />
                            <Text>1000/hr</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                <View style={tw`flex-row justify-between`}>
                    <Button title={'Accept'} tWStyles={`bg-${Colors.success} w-36`} onPress={() => console.log(1)}></Button>
                    <Button title={'Decline'} tWStyles={`bg-${Colors.danger} w-28`} onPress={() => console.log(1)}></Button>
                </View>
            </View>
        </View>
    )
}

export default RideDetail;