import tw from "tailwind-react-native-classnames";
import {View} from "react-native";
import Heading from "./Heading";
import Colors from "@constants/Colors";
import {Icon} from "react-native-elements";
import {cn} from "../../utils/classesMerge";

interface IPanelProps{
    icon?: string;
    color?: string;
    title?: string;
    panelClass?: string;
    onPress?: any;
    children?: any;
    iconClass?: any;
}

const Panel = ({ icon, color, title, panelClass, iconClass, onPress, children }: IPanelProps) => {

    const panelClasses = cn('p-5 w-full flex-row items-center bg-white shadow', panelClass)
    const iconClasses = cn('mr-4', iconClass)

    return (
        <View onTouchEnd={onPress} style={tw`${panelClasses}`}>
            { icon && (<Icon style={tw`${iconClasses}`} size={35} tvParallaxProperties={false} type='ionicon' color={color ?? Colors.primaryCode} name={icon} />)}
            { children }
            { title && (
                <View style={tw`items-center justify-center`}>
                    <Heading twClass={`font-bold text-lg`} title={title ?? ''}/>
                </View>
            )}
        </View>
    )
}

export default Panel;