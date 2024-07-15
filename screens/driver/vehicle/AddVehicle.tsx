import {ScrollView, View} from "react-native";
import Heading from "@components/fragments/Heading";
import tw from "tailwind-react-native-classnames";
import React, {useState} from "react";
import Button from "@components/fragments/Button";
import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Colors from "@constants/Colors";

const MODELS = {
    label: 'Model',
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
    label: 'Color',
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

const AddVehicle = ({ navigation }) => {

        const [make, setMake] = useState('')
        const [model, setModel] = useState('')
        const [color, setColor] = useState('')
        const [open, setOpen] = useState({
            make: false,
            model: false,
            color: false
        });

    const openImages = async () => {
        const result = await launchImageLibrary({
            mediaType: "photo"
        });
        console.log(result);
    };

    return (
            <View style={{ flex: 1, justifyContent: 'space-between'}}>
                <ScrollView>
                    <View style={tw`p-4`}>
                    <View>
                        <Heading twClass={'text-center my-4'} title={'Add Vehicle'}/>
                    </View>

                    <View
                        style={{
                            marginTop: 15,
                            zIndex : open.make ? 10 : 1
                        }}>
                    <Heading title={MAKE.label}/>
                        <DropDownPicker
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
                                model: false,
                                color: false
                            })}
                            setValue={setMake}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 15,
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
                                make: false,
                                model: true,
                                color: false
                            })}
                            setValue={setModel}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 15,
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
                                make: false,
                                model: false,
                                color: true
                            })}
                            setValue={setColor}
                        />
                    </View>

                        <View
                            style={{
                                marginTop: 15,
                                zIndex : open.make ? 10 : 1
                            }}>
                            <Heading title={'Charges'}/>

                            <View style={tw`flex-row`}>
                            <DropDownPicker
                                containerProps={{
                                    style: {
                                        width: 150,
                                    }
                                }}
                                onClose={() => setOpen({
                                    make: false,
                                    model: open.model,
                                    color: open.color
                                })}
                                open={open.make}
                                value={'per_hour'}
                                items={[
                                    {
                                        value: 'per_hour',
                                        label: 'Per Hour'
                                    },
                                    {
                                        value: 'per_day',
                                        label: 'Per Day'
                                    }

                                ]}
                                setOpen={() => setOpen({
                                    make: true,
                                    model: false,
                                    color: false
                                })}
                                setValue={setMake}
                            />
                            <DropDownPicker
                                containerProps={{
                                    style: {
                                        width: 150,
                                        marginLeft: 10
                                    }
                                }}
                                onClose={() => setOpen({
                                    make: false,
                                    model: open.model,
                                    color: open.color
                                })}
                                open={open.make}
                                value={'100'}
                                items={[
                                    {
                                        value: '500',
                                        label: '500'
                                    },
                                    {
                                        value: '100',
                                        label: '100'
                                    }

                                ]}
                                setOpen={() => setOpen({
                                    make: true,
                                    model: false,
                                    color: false
                                })}
                                setValue={setMake}
                            />
                            </View>

                            <View>
                                <Button title={'Add Images'} onPress={() => openImages()}/>
                            </View>

                            <View>
                                <Button tWStyles={`bg-${Colors.success}`} title={'Add License'} onPress={() => openImages()}/>
                            </View>

                            <View>
                                <Button tWStyles={`bg-${Colors.primaryDisabled}`} title={'Add Car Document'} onPress={() => openImages()}/>
                            </View>

                        </View>

                    </View>

                </ScrollView>

                <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                    <Button title={'Save'} onPress={() => navigation.navigate('VehiclesList')}/>
                </View>
            </View>
        )
}

export default AddVehicle;