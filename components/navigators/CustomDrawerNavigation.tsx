import {
    View,
    Text,
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
import Heading from "../fragments/Heading";
import Colors from "../../constants/Colors";
import {Avatar} from "react-native-elements";
import React from "react";
import Button from "../fragments/Button";

const CustomDrawerNavigation = (props: any) => {

    const dispatch = useDispatch();
    const userType = useSelector(selectUserType);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={
                {
                    backgroundColor: `${Colors.primaryCode}`,
                    zIndex: 10,
                }}
            >
                <View style={tw`flex-row mt-20 ml-2 mb-5`}>
                    <Avatar
                        avatarStyle={{ borderWidth: 2, borderColor: 'white'}}
                        overlayContainerStyle={tw`bg-red-600`}
                        size="medium"
                        rounded
                        title="CR"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <View>
                        <Heading title={'Name of User'} twClass={`text-white ml-4`} />
                        <Heading title={'+92-320-2095051'} twClass={`text-white font-normal ml-4`} />
                    </View>
                </View>
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
                    <Button tWStyles={`ml-5 mt-0 w-40`} title={userType} onPress={() => dispatch(setUserType(userType === ROLE.PASSENGER ? ROLE.DRIVER : ROLE.PASSENGER))}/>
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
