import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View} from "react-native";
import React, {useRef, useState} from "react";
import PhoneInput from "react-native-phone-number-input";
import {Link} from "@react-navigation/native";
import tailwind from "tailwind-react-native-classnames";

const SignupScreen = ()=> {
    const phoneInput = useRef<PhoneInput>(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    return (
        <SafeAreaView style={tailwind`p-5`}>
            <Text style={tailwind`font-bold text-xl pb-12 pt-10`}>
                Set up your account
            </Text>

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
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    countryPickerProps={{
                        countryCodes: ['PK'],
                    }}
                />
            </View>

            <View
                style={tailwind`rounded bg-purple-500 p-4 mt-4`}>
                <TouchableOpacity>
                    <Text style={tailwind`text-center text-white font-bold`}>Continue</Text>
                </TouchableOpacity>
            </View>

            <View style={tailwind`mt-5`}>
                <Text style={tailwind`text-black text-center`}>By signing up, you agree to GoGoRide's</Text>
                <Text style={tailwind`text-black text-center`}>Terms of Service and Privacy Policy</Text>
            </View>

            <Text style={tailwind`mt-12 text-center text-lg`}>Already have an account? <Link to={''} children={<Text style={tailwind`text-blue-500`} >Login</Text>}/></Text>

        </SafeAreaView>
    );
};

export default SignupScreen