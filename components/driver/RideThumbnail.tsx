import { Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Heading from "../../components/fragments/Heading";
import Button from "../../components/fragments/Button";
import Colors from "../../constants/Colors";
import {Icon} from "react-native-elements";

interface VehicleThumbnailProps{
    title: string;
    imageUri: string;
}

const RideThumbnail = ({ title, imageUri }: VehicleThumbnailProps) => {

    return (
        <View style={tw`mx-3 py-3 flex flex-col mt-3 bg-white shadow rounded`}>
            <View style={tw`flex-row justify-between`}>
                <Heading twClass={`text-lg mx-4 text-${Colors.primary}`} title={'Ride #1056'}/>
                <Text style={tw`bg-${Colors.pending} text-white p-2 rounded-l-lg`}>PENDING</Text>
            </View>

            <View style={tw`flex-row mx-4 mt-4 items-center`}>
                <Icon tvParallaxProperties={false} type={'ionicon'} name={'location-outline'}/>
                <Heading twClass={`text-base font-normal mx-2`} title={'D-68/A Shah Faisal Town'}/>
            </View>

            <View style={tw`flex-row mx-4 mt-4 items-center`}>
                <Heading twClass={`text-sm font-normal mx-2`} title={'Scheduled at: 10/12/2024 10:15:00'}/>
            </View>

            <View style={tw`justify-center mx-4`}>
                <Button title={'Approve'} onPress={() => console.log(1)} tWStyles={`p-2 bg-${Colors.success}`} />
                <Button title={'Decline'} onPress={() => console.log(1)} tWStyles={`p-2 bg-${Colors.danger}`} />
                <Button title={'Chat'} onPress={() => console.log(1)} tWStyles={`p-2 bg-${Colors.primaryDisabled}`} />
            </View>

        </View>
    );
};

export default RideThumbnail;
