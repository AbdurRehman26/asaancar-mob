import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {useCallback, useEffect, useState} from "react";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from "@components/fragments/Button";
import Heading from "@components/fragments/Heading";
import Panel from "@components/fragments/Panel";
import tw from "twrnc";

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

const VerifyCodeScreen = ({ navigation }: any)=> {
    const [counter, setCounter] = useState(60)

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter - 1)
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);

    const resendText = counter > 0 ? `Resend after (${counter}) seconds` : 'Resend';

    const submit = useCallback(() => {
            navigation.navigate('AllowLocation')
    }, [value]);

    const resend = useCallback(() => {
        navigation.navigate('AllowLocation')
    }, []);

    return (
        <SafeAreaView style={[{flex: 1, justifyContent: 'space-between'}]}>
            <ScrollView style={tw`p-5`}>
                <Heading title={'Verify Code'} twClass={'text-center font-bold text-xl pb-10 pt-10'}/>
                <View>
                    <Heading title={'By signing up, you agree to GoGoRide\'s'} twClass={'text-center font-normal text-base'}/>
                    <Heading title={'Terms of Service and Privacy Policy'} twClass={'text-center font-normal text-base'}/>
                </View>

                <View>

                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        testID="my-code-input"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor/> : null)}
                            </Text>
                        )}
                    />
                </View>

            </ScrollView>

            <Panel panelClass={'w-full flex-col justify-between'}>
                <Button tWStyles={`w-full`} isDisabled={value.length !== 6} title={'Verify'}  onPress={submit}/>

                <Button  tWStyles={`w-full`} isDisabled={counter > 0} title={resendText} onPress={resend}/>
            </Panel>

        </SafeAreaView>
    );
};

export default VerifyCodeScreen