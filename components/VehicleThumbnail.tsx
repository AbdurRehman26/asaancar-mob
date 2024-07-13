import { Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Heading from "./Heading";
import Button from "./Button";
import Colors from "../constants/Colors";

interface VehicleThumbnailProps{
    title: string;
    imageUri: string;
}

const VehicleThumbnail = ({ title, imageUri }: VehicleThumbnailProps) => {

    return (
        <View style={tw`relative mx-5 px-2 flex flex-row mr-4 mt-5 bg-white shadow-md rounded-xl`}>
            <Image
                style={tw`relative h-24 w-24 my-2 mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl`}
                source={{uri : imageUri}}
            />

            <View style={tw`justify-center`}>
                <Heading title={'Vehicle Name'} twClass={`text-base`}/>
                <Heading title={'Vehicle Color'} twClass={`text-base font-normal`}/>
                <Heading title={'Price/hr'} twClass={`text-base font-normal`}/>
            </View>

            <View style={tw`justify-center ml-4`}>
                <Heading title={'Rides Count (40)'} twClass={`text-base`}/>
                <Button title={'View Details'} onPress={() => console.log(1)} tWStyles={`p-1`} />
                <Text style={tw`p-1 bg-${Colors.success} rounded my-1 text-center text-white`} >Approved</Text>
            </View>

        </View>
    );
};

export default VehicleThumbnail;
