import {View, Text, StyleSheet, Dimensions} from "react-native";
const { width, height } = Dimensions.get('window')
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const VehicleMediaSwiper = ()=> {

    return (
        <SwiperFlatList
            index={2}
            showPagination
            data={colors}
            renderItem={({ item }) => (
                <View style={[styles.child, { backgroundColor: item }]}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
        />
    );
};

export default VehicleMediaSwiper;