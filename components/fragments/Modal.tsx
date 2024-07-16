import React from "react";
import {StyleSheet, View, Text, Modal as NModal, Dimensions} from "react-native";
import tw from "twrnc";
import Button from "./Button";
import Heading from "../fragments/Heading";

type ModalProps = {
    isVisible: boolean;
    title?: string;
    onRequestClose: any,
};
export const Modal = ({isVisible = false, title, onRequestClose}: ModalProps) => {
    return (
        <NModal
            onDismiss={onRequestClose}
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={[styles.modalView, { position: 'relative'}]}>
                    <View>
                        <Heading title={title ?? 'Title'}/>
                    </View>

                    <View>
                        <Text>Description</Text>
                    </View>


                    <View style={tw`absolute bottom-0 right-0`}>
                        <Button tWStyles={`w-64 m-8`} title={'Close'} onPress={onRequestClose}/>
                    </View>
                </View>
            </View>
        </NModal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        margin: 20
    },
    modalView: {
        height: Dimensions.get('window').height - 50,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
