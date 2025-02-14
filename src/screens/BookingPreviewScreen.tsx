import {Text, View, Image} from "react-native";
import tw from "twrnc";
import {Button, Icon} from "react-native-elements";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const BookingPreviewScreen = ()=> {
    const imageUri = 'https://fastly.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8'

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', marginTop: 20}}>

            <View>
                <View>
                    <Text style={tw`font-bold text-2xl text-center`}>Request a booking</Text>
                </View>

                <View style={tw`flex-row mt-4`}>
                    <Image
                        style={tw`relative h-20 w-40 mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl`}
                        source={{uri : imageUri}}
                    />
                    <View>
                        <Text style={tw`font-bold text-lg`}>Tesla Roadster</Text>
                        <View style={tw`flex-row items-center`}>
                            <Icon type={'ionicon'} tvParallaxProperties={false} name={'star'}></Icon>
                            <Text style={tw` text-xl`}>5.0 -</Text>
                            <Text style={tw` text-xl`}> 10 Trips</Text>
                        </View>
                    </View>

                </View>

                <View style={tw`p-2 mt-4`}>
                    <Text style={tw`font-bold text-lg`}>Trip Date & Time</Text>
                    <View style={tw`flex-row rounded bg-green-100 items-center justify-between p-2`}>
                        <View>
                            <Text>10 Aug, Thu</Text>
                            <Text>5 PM</Text>
                        </View>
                        <View>
                            <Text>{'------ >'}</Text>
                        </View>
                        <View>
                            <Text>10 Aug, Thu</Text>
                            <Text>5 PM</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`p-2 mt-4`}>
                    <Text style={tw`font-bold text-lg`}>Pickup</Text>
                    <View style={tw`flex-row rounded items-center p-2`}>
                        <View>
                            <Icon type={'ionicon'} tvParallaxProperties={false} color={'red'} name={'map'}/>
                        </View>
                        <View>
                            <Text>Karachi, 75100</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <Text>Price</Text>
                        <Text>500</Text>
                    </View>
                    <Button title={'Book Now'}></Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BookingPreviewScreen;