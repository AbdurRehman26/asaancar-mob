import {Text, TextProps} from "react-native";
import tw from "tailwind-react-native-classnames";
import { cn } from '../utils/classesMerge';

interface HeadingProps extends TextProps {
    title: string;
    twClass?: string
}

const Heading = ({ title, twClass, ...props }: HeadingProps) => {

    const headingClasses =  cn(twClass, 'font-bold text-xl')

    return (
        <Text {...props} style={tw`${headingClasses}`}>{title}</Text>
    )
}

export default Heading;