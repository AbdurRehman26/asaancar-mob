import {ScrollView, Text, View} from "react-native";
import {Icon} from "react-native-elements";
import Colors from "../constants/Colors";
import tw from "tailwind-react-native-classnames";
import Heading from "../components/fragments/Heading";
import Panel from "../components/fragments/Panel";
import Button from "../components/fragments/Button";

const InviteFriendScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
                <Icon style={tw`mt-10`} name={'send-outline'} size={200} color={Colors.primaryCode} type={'ionicon'} tvParallaxProperties={false} />
                <View style={tw`items-center mt-3`}>
                    <Heading title={'Share you code invite'}/>
                    <View style={tw`items-center border-dashed border-2 border-sky-500 mt-5 p-3 w-2/4 bg-white`}>
                        <Text>asda7249a</Text>
                    </View>
                </View>

                <View style={tw`items-center p-4 mt-10`}>
                    <Heading twClass={`text-lg`} title={'Invite your friends & get a 50% discount on your next 3 rides'}/>
                </View>
            </ScrollView>

            <Panel panelClass={'items-center justify-center pb-4'}>
                <Button tWStyles={`w-5/6`} title={'Invite Now'} onPress={() => console.log()}/>
            </Panel>
        </View>
    )
}

export default InviteFriendScreen;