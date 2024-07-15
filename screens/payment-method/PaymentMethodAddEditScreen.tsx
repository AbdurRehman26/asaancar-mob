import Panel from "@components/fragments/Panel";
import {ScrollView, View} from "react-native";
import {Icon} from "react-native-elements";
import Colors from "@constants/Colors";
import tw from "tailwind-react-native-classnames";
import InputText from "@components/fragments/InputText";
import Button from "@components/fragments/Button";

const PaymentMethodAddEditScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
                <View style={tw`items-center flex-row justify-center`}>
                    <Icon name={'card-outline'} size={200} color={Colors.primaryCode} type={'ionicon'} tvParallaxProperties={false} />
                </View>
                <View style={tw`flex-col`}>
                    <InputText label={'Card Number'}/>
                </View>
                <View style={tw`flex-row`}>
                    <InputText label={'Exp. Date'}/>
                    <InputText label={'CVV'}/>
                </View>
            </ScrollView>

            <Panel panelClass={'justify-center items-center p-2'}>
                <Button tWStyles={`w-5/6`} title={'Save Card'} onPress={() => console.log(1)}/>
            </Panel>
        </View>
    )
}

export default PaymentMethodAddEditScreen;