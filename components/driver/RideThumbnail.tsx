import { Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";

interface VehicleThumbnailProps{
    title: string;
    imageUri: string;
}

const RideThumbnail = ({ title, imageUri }: VehicleThumbnailProps) => {

    return (
        <View style={tw`px-2 py-3 flex flex-row mt-3 bg-white shadow rounded`}>
            <View style={tw`justify-center`}>
                <Heading title={'Vehicle Name'} twClass={`text-base`}/>
                <Heading title={'Vehicle Color'} twClass={`text-base font-normal`}/>
                <Heading title={'Price/hr'} twClass={`text-base font-normal`}/>
            </View>

            <View style={tw`justify-center ml-2`}>
                <Heading title={'Rides Count (40)'} twClass={`text-base`}/>
                <Button title={'View Details'} onPress={() => console.log(1)} tWStyles={`p-1`} />
                <Text style={tw`p-1 bg-${Colors.success} rounded my-1 text-center text-white`} >Approved</Text>
            </View>

        </View>
    );
};

export default RideThumbnail;
