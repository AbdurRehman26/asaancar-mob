import { Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Button} from "react-native-elements";

interface VehicleThumbnailProps{
    title: string;
    imageUri: string;
}

const VehicleThumbnail = ({ title, imageUri }: VehicleThumbnailProps) => {

    return (
        <View style={tw`relative justify-between m-3 flex flex-row mr-4 mt-5 text-gray-700 bg-white shadow-md rounded-xl`}>
            <Image
                style={tw`relative h-36 w-36 my-2 mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl`}
                source={{uri : imageUri}}
            />

            <View>
                <Text
                    style={tw`mt-2 mx-2 pb-1 font-sans text-base font-semibold tracking-normal`}>
                    Honda City
                </Text>

                <Text style={tw`mt-2 mx-2 font-sans text-base font-light`}>
                    Beige
                </Text>

                <Text style={tw`mt-2 mx-2 font-sans text-base font-light`}>
                    500/hr
                </Text>

            </View>
        </View>
    );
};

export default VehicleThumbnail;
