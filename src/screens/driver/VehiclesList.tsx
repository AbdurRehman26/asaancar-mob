import {Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList} from "react-native";
import tw from "twrnc";
import Button from "@components/fragments/Button";
import VehicleThumbnail from "@components/VehicleThumbnail";
import {useNavigation} from "@react-navigation/native";
import Heading from "@components/fragments/Heading";

const SECTIONS = [
    {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
    },
    {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
    },

    {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
    },
    {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
    },
    {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
    },
];

const VehiclesList  = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
            <ScrollView>
                <Heading title={'Your Vehicles'} twClass={`text-center mt-4`} />
                <View>
                    <FlatList
                        data={SECTIONS.map((section) => section)}
                        renderItem={({ item }) => <VehicleThumbnail imageUri={item.uri} title={item.text} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </ScrollView>

            <View style={tw`rounded-t-3xl p-2 px-8 bg-gray-200`}>
                <View style={tw``}>
                    <Button title={'Add Vehicle'} onPress={() => navigation.navigate('AddVehicle')}/>
                </View>
            </View>
        </View>
    )
}

export default VehiclesList;