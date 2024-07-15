import {Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import tw from "tailwind-react-native-classnames";
import {cn} from "../../utils/classesMerge";

interface InputTextProps{
    placeHolder?: string;
    twClasses?: string;
    label?: string;
    labelClasses?: string;
    lines?: number;
}

const InputText = ({ placeHolder, twClasses, label, labelClasses, lines}: InputTextProps) => {
    const [input, setInput] = useState('');

    const twClass = cn(`bg-white p-2 mx-4 mt-2 shadow rounded`, twClasses)
    const labelClass = cn(`mx-4 mt-4 font-bold`, labelClasses)

    return (
        <View>
        { label && (<Text style={tw`${labelClass}`}>{label}</Text>) }
        <TextInput
            numberOfLines={lines ?? 1}
            style={tw`${twClass}`}
            value={input}
            onChangeText={(e) => setInput(e)}
            placeholder={placeHolder}
        />

        </View>

    )
}

export default InputText;