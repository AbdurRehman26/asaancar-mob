import { Image, Text, View} from "react-native";
import tw from "twrnc";
import {Button} from "react-native-elements";

interface VehicleCardProps{
    title: string;
    imageUri: string;
}

const VehicleCard = ({ title, imageUri }: VehicleCardProps) => {

    return (
        <View style={tw`relative flex flex-col mr-4 mt-5 text-gray-700 bg-white shadow-md rounded-xl`}>
            <Image
                style={tw`relative h-56 mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl`}
                source={{uri : imageUri}}
            />

            <View style={tw`px-3 pt-3 flex-row justify-between`}>
                <Text
                    style={tw`mb-1 pb-1 font-sans text-base font-semibold tracking-normal`}>
                    {title}
                </Text>

                <Text style={tw`font-sans text-base font-light`}>
                    200/hr
                </Text>
            </View>

            <View style={tw`p-3`}>
                <Text
                    style={tw`mb-2 border-b border-gray-400 pb-2 font-sans text-xl font-semibold tracking-normal`}>
                    {title}
                </Text>

                <Text style={tw`font-sans text-base font-light`}>
                    Barcelona.
                </Text>
            </View>

            <View style={tw`p-2 pb-4 pt-0 flex-row justify-between`}>
                <Button
                    style={tw`font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md w-60`}
                    title={'Book Now'}
                >
                </Button>

                <Button
                    style={tw`font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md w-60`}
                    title={'View Details'}
                >
                </Button>
            </View>
        </View>
    );
};

export default VehicleCard;
