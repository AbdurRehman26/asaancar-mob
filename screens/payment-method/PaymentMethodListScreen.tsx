import {ScrollView, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Colors from "../../constants/Colors";
import Heading from "../../components/fragments/Heading";
import Panel from "../../components/fragments/Panel";
import Button from "../../components/fragments/Button";

const PaymentMethodListScreen = ({ navigation }) => {

    const payments = [{}, {}]

    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
                <View style={tw`items-center`}>
                    <Icon name={'card-outline'} size={200} color={Colors.primaryCode} type={'ionicon'} tvParallaxProperties={false} />

                    { payments.map(payment => (
                        <Panel onPress={() => navigation.navigate('PaymentMethodEditScreen')} panelClass={'mt-4'}>
                            <Icon style={tw`mx-5`} size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'card'} />
                            <Heading title={'***** 12355'}/>
                        </Panel>
                    ))}
                </View>
            </ScrollView>
            <View>
                <Panel panelClass={'flex-row items-center justify-center'}>
                    <Button tWStyles={`w-5/6`} title={'Add Card'} onPress={() => console.log()}/>
                </Panel>
            </View>
        </View>
    )
}

export default PaymentMethodListScreen;