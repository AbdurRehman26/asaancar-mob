import {ScrollView, View} from "react-native";
import React from "react";
import Panel from "@components/fragments/Panel";
import Button from "@components/fragments/Button";
import {Avatar} from "react-native-elements";
import InputText from "@components/fragments/InputText";
import tw from "twrnc";

const AccountInfo = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <ScrollView>
                <Avatar
                    containerStyle={tw`mt-6 ml-4`}
                    overlayContainerStyle={tw`bg-red-600`}
                    size="large"
                    rounded
                    title="CR"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />

                <InputText label={'Full Name'} placeHolder={'Enter Full Name'} labelClasses={`mt-10`}/>
                <InputText label={'Email Address'} placeHolder={'Enter Your Email Address'}/>
                <InputText label={'Phone Number'} placeHolder={'Enter Your Phone Number'}/>
            </ScrollView>
            <Panel>
                <Button tWStyles={`w-full`} title={'Update'} onPress={() => console.log(1)}/>
            </Panel>
        </View>
    )
}

export default AccountInfo;