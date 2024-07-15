import { Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Heading from "./fragments/Heading";
import Button from "./fragments/Button";
import Colors from "@constants/Colors";

interface VehicleThumbnailProps{
    title: string;
    imageUri: string;
}

const VehicleThumbnail = ({ title, imageUri }: VehicleThumbnailProps) => {

    return (
        <View style={tw`px-5 py-3 flex flex-row justify-between mt-3 bg-white shadow rounded`}>
            <View style={tw`flex flex-row`}>
                <Image
                    style={tw`relative h-20 w-20 mr-2 mt-2 text-white shadow-lg rounded-3xl`}
                    source={{uri : imageUri}}
                />

                <View style={tw`justify-center`}>
                    <Heading title={'Vehicle Name'} twClass={`text-base`}/>
                    <Heading title={'Vehicle Color'} twClass={`text-base font-normal`}/>
                    <Heading title={'Price/hr'} twClass={`text-base font-normal`}/>
                </View>
            </View>

            <View style={tw`justify-center ml-2`}>
                <Heading title={'Rides Count (40)'} twClass={`text-base`}/>
                <Button title={'View Details'} onPress={() => console.log(1)} tWStyles={`p-1`} />
                <Text style={tw`p-1 bg-${Colors.success} rounded my-1 text-center text-white`} >Approved</Text>
            </View>

        </View>
    );
};

export default VehicleThumbnail;
