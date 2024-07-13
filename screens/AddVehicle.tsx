import {ScrollView, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Heading from "../components/Heading";
import tw from "tailwind-react-native-classnames";
import React, {useState} from "react";
import Button from "../components/Button";
import DropDownPicker from 'react-native-dropdown-picker';

const MODELS = {
    label: 'Models',
    data : [
    {
        value: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        label: 'First Item',
    },
    {
        value: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        label: 'Second Item',
    },
    {
        value: '58694a0f-3da1-471f-bd96-145571e29d72',
        label: 'Third Item',
    },
]};

const MAKE = {
    label: "Make",
    data: [
    {
        value: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        label: 'First Item',
    },
    {
        value: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        label: 'Second Item',
    },
    {
        value: '58694a0f-3da1-471f-bd96-145571e29d72',
        label: 'Third Item',
    },
]};

const COLORS = {
    label: 'Colors',
    data: [
    {
        value: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        label: 'First Item',
    },
    {
        value: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        label: 'Second Item',
    },
    {
        value: '58694a0f-3da1-471f-bd96-145571e29d72',
        label: 'Third Item',
    },
]};

const AddVehicle = () => {

        const [make, setMake] = useState('')
        const [model, setModel] = useState('')
        const [color, setColor] = useState('')
        const [open, setOpen] = useState({
            make: false,
            model: false,
            color: false
        });

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
                <ScrollView>
                    <View style={tw`p-4`}>
                    <View>
                        <Heading twClass={'text-center my-4'} title={'Add Vehicle'}/>
                    </View>

                    <View
                        style={{
                            zIndex : open.make ? 10 : 1
                        }}>
                    <Heading title={MAKE.label}/>
                        <DropDownPicker
                            zIndex={open.make ? 10 : 1}
                            onClose={() => setOpen({
                                make: false,
                                model: open.model,
                                color: open.color
                            })}
                            open={open.make}
                            value={make}
                            items={MAKE.data}
                            setOpen={() => setOpen({
                                make: true,
                                model: open.model,
                                color: open.color
                            })}
                            setValue={setMake}
                        />
                    </View>

                    <View
                        style={{
                            zIndex : open.model ? 10 : 1
                        }}>
                        <Heading title={MODELS.label}/>
                        <DropDownPicker
                            onClose={() => setOpen({
                                make: open.make,
                                model: false,
                                color: open.color
                            })}
                            open={open.model}
                            value={model}
                            items={MODELS.data}
                            setOpen={() => setOpen({
                                make: open.make,
                                model: true,
                                color: open.color
                            })}
                            setValue={setModel}
                        />
                    </View>

                    <View
                        style={{
                            zIndex : open.color ? 10 : 1
                        }}>
                        <Heading title={COLORS.label}/>
                        <DropDownPicker
                            onClose={() => setOpen({
                                make: open.make,
                                model: open.model,
                                color: false
                            })}
                            open={open.color}
                            value={color}
                            items={COLORS.data}
                            setOpen={() => setOpen({
                                make: open.make,
                                model: open.model,
                                color: true
                            })}
                            setValue={setColor}
                        />
                    </View>
                    </View>

                </ScrollView>

                <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                    <Button title={'Save'} onPress={() => console.log(111)}/>
                </View>
            </SafeAreaView>
        )
}

export default AddVehicle;