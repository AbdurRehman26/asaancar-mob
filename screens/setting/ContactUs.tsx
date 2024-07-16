import {ScrollView, Text, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "twrnc";
import Colors from "@constants/Colors";
import Heading from "@components/fragments/Heading";
import Panel from "@components/fragments/Panel";
import Button from "@components/fragments/Button";
import InputText from "@components/fragments/InputText";

const ContactUs = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
                <View style={tw`items-center`}>
                    <Icon name={'mail-outline'} size={200} color={Colors.primaryCode} type={'ionicon'} tvParallaxProperties={false} />
                    <Heading title={'How can we help you?'}/>
                    <Panel panelClass={'w-5/6 mt-10 justify-around'}>
                        <Icon size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'call'} />
                        <Icon size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'mail'} />
                        <Icon size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'mail'} />
                        <Icon size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'mail'} />
                    </Panel>
                </View>

                <View>
                    <View style={tw`mt-2 my-2 mx-4`}>
                        <InputText label={'Whats your feedback about ?'}/>
                        <InputText lines={4} label={'Please write in detail'}/>

                    </View>
                </View>

            </ScrollView>
            <View>
                <Panel panelClass={'flex-row items-center justify-center'}>
                    <Button tWStyles={`w-5/6`} title={'Submit'} onPress={() => console.log()}/>
                </Panel>
            </View>
        </View>
    )
}

export default ContactUs;