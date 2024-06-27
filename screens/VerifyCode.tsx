import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import tailwind from "tailwind-react-native-classnames";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

const VerifyCode = ()=> {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={tailwind`p-5 pt-20`}>
            <Text style={tailwind`text-center font-bold text-xl pb-10 pt-10`}>
                Verify Code
            </Text>
            <View>
                <Text style={tailwind`text-black text-center`}>By signing up, you agree to GoGoRide's</Text>
                <Text style={tailwind`text-black text-center`}>Terms of Service and Privacy Policy</Text>
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

            <View
                style={tailwind`rounded bg-purple-500 p-4 mt-4`}>
                <TouchableOpacity>
                    <Text style={tailwind`text-center text-white font-bold`}>Verify</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default VerifyCode