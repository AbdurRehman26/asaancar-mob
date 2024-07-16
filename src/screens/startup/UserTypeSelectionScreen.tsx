import {View} from "react-native";
import Button from "@components/fragments/Button";
import tw from "twrnc";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {setUserType} from "@app/shared/slices/userSlice";
import ROLE from "@constants/Role";

const UserTypeSelectionScreen = ({ navigation }: any) => {

    const dispatch = useDispatch();

    const setUserMode = useCallback((role: string) => {
        dispatch(setUserType(role))
        navigation.navigate('MainScreenNavigation');

    }, [])

    return (
        <View style={tw`flex flex-col h-full justify-center items-center`}>
            <Button tWStyles={'w-60'} title={'Passenger'} onPress={() => setUserMode(ROLE.PASSENGER)}/>
            <Button tWStyles={'w-60'} title={'Driver'} onPress={() => setUserMode(ROLE.DRIVER)}/>
        </View>
    )
}

export default UserTypeSelectionScreen;