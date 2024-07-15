import {Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import Button from "@components/fragments/Button";
import VehicleThumbnail from "@components/VehicleThumbnail";
import {useNavigation} from "@react-navigation/native";
import {HomeScreenProp} from "@components/NavOptions";
import Heading from "@components/fragments/Heading";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    radioButton: {
        marginRight: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#007BFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
    },
    radioButtonText: {
        fontSize: 16,
    },
});

const CustomRadioButton = ({ label, selected, onSelect }) => (
    <TouchableOpacity
        style={[styles.radioButton,
            { backgroundColor: selected ? '#007BFF' : '#FFF' }]}
        onPress={onSelect}
    >
        <Text style={[styles.radioButtonText,
            { color: selected ? '#FFF' : '#000' }]}>
            {label}
        </Text>
    </TouchableOpacity>
);

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
    const navigation = useNavigation<HomeScreenProp>();

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