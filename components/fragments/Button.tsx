import {GestureResponderEvent, Text, TouchableOpacity} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import Colors from "@constants/Colors";
import React from "react";
import {cn} from "../../utils/classesMerge";
import tw from "tailwind-react-native-classnames";

interface ButtonProps{
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    isDisabled?: boolean;
    tWStyles?: string
}
const Button = ({title, onPress, isDisabled = false, tWStyles } : ButtonProps) =>  {

    const buttonColor = isDisabled ? Colors.primaryDisabled : Colors.primary;

    const twClasses = cn(`rounded bg-${buttonColor} p-4 mt-4`, tWStyles);

    return (
        <TouchableOpacity disabled={isDisabled} onPress={onPress} style={tw`${twClasses}`}>
            <Text style={tailwind`text-center text-white font-bold`}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;