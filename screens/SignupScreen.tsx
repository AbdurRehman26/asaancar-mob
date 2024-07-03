import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View} from "react-native";
import React, {useCallback, useEffect, useRef, useState} from "react";
import PhoneInput from "react-native-phone-number-input";
import {Link} from "@react-navigation/native";
import tailwind from "tailwind-react-native-classnames";
import Heading from "../components/Heading";
import Button from "../components/Button";

const SignupScreen = ({ navigation })=> {
    const phoneInput = useRef<PhoneInput>(null);
    const [value, setValue] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const submit = useCallback(() => {
        navigation.navigate('VerifyCodeScreen')
    }, []);

    useEffect(() => {
        setIsDisabled(! (value.length === 10))
    }, [value]);

    return (
        <SafeAreaView style={tailwind`p-5`}>
            <Heading title={'Set up your account'} twClass={'p-4'} />

            <View>
                <Text style={tailwind`font-normal text-lg pb-2 pt-4`}>
                    Enter your phone number
                </Text>
                <PhoneInput
                    containerStyle={tailwind`rounded-lg w-max`}
                    textContainerStyle={tailwind`rounded-r-lg`}
                    disableArrowIcon={true}
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="PK"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    countryPickerProps={{
                        countryCodes: ['PK'],
                    }}
                />
            </View>

            <View>
                <Button isDisabled={isDisabled} title={'Continue'} onPress={submit}/>
            </View>

            <View style={tailwind`mt-5`}>
                <Text style={tailwind`text-black text-center`}>By signing up, you agree to GoGoRide's</Text>
                <Text style={tailwind`text-black text-center`}>Terms of Service and Privacy Policy</Text>
            </View>

        </SafeAreaView>
    );
};

export default SignupScreen