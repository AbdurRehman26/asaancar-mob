import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import {useDispatch, useSelector} from "react-redux";
import {selectUserType, setUserType} from "../../app/slices/userSlice";
import ROLE from "../../constants/Role";
import tw from "tailwind-react-native-classnames";
import Heading from "../Heading";

const CustomDrawerNavigation = (props: any) => {

    const dispatch = useDispatch();
    const userType = useSelector(selectUserType);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                    backgroundColor: "#9288F9",
                    marginTop: -50,
                    zIndex: 10,
                }}
            >
                <ImageBackground
                    source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbackground&psig=AOvVaw0cUn_IH3jD-n6YayDh46gz&ust=1720949172946000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCn17fZo4cDFQAAAAAdAAAAABAI'}}
                    style={{ padding: 20 }}
                >
                    <Image
                        alt="Not find"
                        source={{
                            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&psig=AOvVaw1gxRQN1vEcDzdYMRfwX6eM&ust=1720949219897000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICBvM3Zo4cDFQAAAAAdAAAAABAE'
                        }}
                        style={styles.userAvatar}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            marginBottom: 5,
                        }}
                    >
                        Name
                    </Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#ccc",
                    // backgroundColor: colors.cardbackground,
                }}
            >
                <View style={styles.switchTextContainer}>
                    <Switch
                        value={userType === ROLE.PASSENGER}
                        onTouchEnd={(e) => dispatch(setUserType(userType === ROLE.PASSENGER ? ROLE.DRIVER : ROLE.PASSENGER))}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
                    />
                    <Heading title={userType} twClass={`text-lg font-bold ml-2 p-4`}/>
                </View>
            </View>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,
                            }}
                        >
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawerNavigation;

const styles = StyleSheet.create({
    userAvatar: {
        height: 67.5,
        width: 67.5,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 30,
    },
    switchTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        paddingVertical: 5,
    },
    preferences: {
        fontSize: 16,
        color: "#ccc",
        paddingTop: 10,
        fontWeight: "500",
        paddingLeft: 20,
    },
    switchText: {
        fontSize: 17,
        color: "",
        paddingTop: 10,
        fontWeight: "bold",
    },
});
