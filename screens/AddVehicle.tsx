import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Heading from "../components/Heading";
import tw from "tailwind-react-native-classnames";
import React, {useCallback, useState} from "react";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import {HomeScreenProp} from "../components/NavOptions";
import {Icon} from "react-native-elements";

const MODELS = {
    title: 'Models',
    data : [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
]};

const MAKE = {
    title: "Make",
    data: [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
]};

const COLORS = {
    title: 'Colors',
    data: [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
]};

const AddVehicle = () => {
    const navigation = useNavigation<HomeScreenProp>();

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [flatListData, setFlatListData] = useState(MAKE);

    const selectValue = useCallback((selectedValue: string) => {
        if(flatListData.title === MAKE.title){
            setMake(selectedValue)
            setFlatListData(MODELS)
        }

        if(flatListData.title === MODELS.title){
            setModel(selectedValue)
            setFlatListData(COLORS)
        }

        if(flatListData.title === COLORS.title){
            setColor(selectedValue)
            setFlatListData({ title: 'Save Vehicle', data: []})
        }

    }, [model, make, color]);

    const clearValue = useCallback(() => {
        if(flatListData.title === MAKE.title){
            navigation.navigate('Vehicles')
        }

        if(flatListData.title === MODELS.title){
            setMake('')
            setFlatListData(MAKE)
        }

        if(flatListData.title === COLORS.title){
            setModel('')
            setFlatListData(MODELS)
        }

        if(! flatListData.data.length){
            setColor('')
            setFlatListData(COLORS)
        }

    }, [flatListData, navigation]);

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={() => clearValue()}
                    style={tw`bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
                >
                    <Icon tvParallaxProperties={false} type={'font-awesome'} name="arrow-left" />
                </TouchableOpacity>

                <ScrollView>
                    <View>
                        <Heading twClass={'text-center'} title={flatListData.title}/>
                    </View>
                    <View>
                        <Text>{make}</Text>
                        <Text>{model}</Text>
                        <Text>{color}</Text>
                    </View>

                    <FlatList
                        style={tw`mt-5`}
                        data={flatListData.data}
                        renderItem={({item}) => <TouchableOpacity onPress={() => selectValue(item.title)} style={tw`p-4 mt-auto border-t border-gray-400`}><Heading title={item.title}/></TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

                <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                    <Button title={'Save'} onPress={() => console.log(111)}/>
                </View>
            </SafeAreaView>
        )
}

export default AddVehicle;