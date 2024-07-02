import {GestureResponderEvent, Text, TouchableOpacity} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import Colors from "../constants/Colors";

interface ButtonProps{
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    isDisabled?: boolean;
}
const Button = ({title, onPress, isDisabled = false} : ButtonProps) =>  {

    const buttonColor = isDisabled ? Colors.primaryDisabled : Colors.primary;

    return (
        <TouchableOpacity disabled={isDisabled} onPress={onPress} style={tailwind`rounded bg-${buttonColor} p-4 mt-4`}>
            <Text style={tailwind`text-center text-white font-bold`}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;