import {View, ScrollView, Text} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {Avatar, Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import Colors from "../constants/Colors";
import Heading from "../components/Heading";
import Panel from "../components/Panel";
import {Modal} from "../components/Modal";

const ProfileSettingScreen = ({ navigation })=> {

    const [openModal, setOpenModal] = useState(false);

    return (
        <View>
            <ScrollView>
            <View style={tw`flex-row h-24 p-2 px-4 mt-3 bg-white shadow`}>

                <Modal isVisible={openModal} onRequestClose={() => setOpenModal(false)}/>

                <Avatar
                    overlayContainerStyle={tailwind`bg-red-600`}
                    size="large"
                    rounded
                    title="CR"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <View style={tw`ml-4 justify-center`}>
                    <Heading twClass={`font-bold text-lg`} title={'Syed Abdur Rehman Kazmi'}/>
                    <Heading twClass={`font-normal text-lg`} title={'+92-320-2095051'}/>
                </View>
            </View>

                <View style={tw`h-20 flex-row items-center p-2 px-5 mt-3 bg-white shadow`}>
                    <Icon size={35} tvParallaxProperties={false} type='ionicon' color={Colors.primaryCode} name={'notifications'} />
                    <View style={tw`justify-center`}>
                        <Heading twClass={`font-bold text-lg`} title={'Notifications'}/>
                    </View>
                </View>

                <View>

                <Heading twClass={`font-normal text-lg text-${Colors.gray} p-3`} title={'Account'}/>
                <Panel icon={'person'} title={'Profile Settings'} panelClass={`mt-3 px-5`} onPress={() => navigation.navigate('AccountInfo')} />
                <Panel onPress={() => setOpenModal(true)} panelClass={`mt-3 px-5`} icon={'information-circle'} title={'About Us'}/>
                <Panel onPress={() => setOpenModal(true)} panelClass={`mt-3 px-5`} icon={'newspaper'} title={'Privacy Policy'}/>
                <Panel onPress={() => setOpenModal(true)} panelClass={`mt-3 px-5`} icon={'clipboard'} title={'Terms & Conditions'}/>
                <Panel onPress={() => setOpenModal(true)} panelClass={`mt-3 px-5`} icon={'logo-wechat'} title={'FAQs'}/>
                <Panel onPress={() => navigation.navigate('ContactUs')} panelClass={`mt-3 px-5`} icon={'headset'} title={'Contact Us'}/>
            </View>


            <Button title={'Logout'} tWStyles={`mx-4 bg-${Colors.primaryDisabled}`} onPress={() => console.log('')}/>
            <Button title={'Delete Account'} tWStyles={`mx-4 my-4 bg-${Colors.danger}`} onPress={() => console.log('')}/>
            </ScrollView>
        </View>
    );
};

export default ProfileSettingScreen;