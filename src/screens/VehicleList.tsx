import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet, TextInput, FlatList, SectionList} from "react-native";
import React, {useState} from "react";
import tailwind from "twrnc";
import {Icon, SearchBar} from 'react-native-elements'
import tw from "twrnc";
import VehicleCard from "@components/VehicleCard";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#000',
        marginTop: 20,
        marginBottom: 5,
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 200,
        height: 200,
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    },
});

const SECTIONS = [
    {
        title: 'Popular Vehicles',
        horizontal: true,
        data: [
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
        ],
    },
    {
        title: 'Punk and hardcore',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1011/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1012/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1013/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1015/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1016/200',
            },
        ],
    },
    {
        title: 'Based on your recent listening',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1020/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1024/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1027/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1035/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1038/200',
            },
        ],
    },
];

const VehicleList = ()=> {

    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={tailwind`p-5 pt-10`}>

            <Text style={tailwind`font-semibold text-xl pt-10 pb-2`}>
                Rent a Vehicle anytime
            </Text>

            <View>

                <SearchBar
                    inputContainerStyle={tw`bg-white h-9`}
                    containerStyle={tw`bg-white rounded-xl`}
                    lightTheme
                    onChangeText={(search) => setSearch(search)}
                    placeholder="Search any vehicle..."
                    value={search}
                />

            </View>

            <SectionList
                contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 120 }}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({ section }) => (
                    <>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                        {section.horizontal ? (
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => <VehicleCard imageUri={item.uri} title={item.text} />}
                                showsHorizontalScrollIndicator={false}
                            />
                        ) : null}
                    </>
                )}
                renderItem={({ item, section }) => {
                    if (section.horizontal) {
                        return null;
                    }
                    return <VehicleCard imageUri={item.uri} title={item.text} />;
                }}
            />

        </SafeAreaView>
    );
};

export default VehicleList;