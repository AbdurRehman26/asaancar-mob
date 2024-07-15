import Panel from "../../components/fragments/Panel";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Colors from "../../constants/Colors";
import Heading from "../../components/fragments/Heading";
import {View} from "react-native";
import Button from "../../components/fragments/Button";

const PaymentMethodViewScreen = () => {
    return (
        <View>
            <Panel panelClass={'p-5 mt-5'}>
                <View>
                    <View style={tw`flex-row`}>
                        <Icon style={tw`mx-5`} size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'card'} />
                        <Heading title={'***** 12355'}/>
                    </View>

                    <View style={tw`flex-col mx-5`}>
                        <Heading twClass={`text-base font-normal`} title={'Expiry Date'}/>
                        <Heading twClass={`text-sm font-normal`} title={'12/2025'}/>
                    </View>

                    <View style={tw`flex-row mx-5 items-center mt-5`}>
                        <Icon size={25} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'create-outline'} />
                        <Heading twClass={`text-sm font-normal`} title={'Edit this card'}/>
                    </View>
                </View>
            </Panel>

            <Panel panelClass={'mt-5 justify-center items-center pb-5'}>
                <Button title={'Delete this card permanently'} tWStyles={`bg-${Colors.danger}`} onPress={() => console.log(1)}/>
            </Panel>
        </View>
    )
}

export default PaymentMethodViewScreen;