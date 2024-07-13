import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import RideList from "./RideList";

const FirstRoute = () => (
    <RideList/>
);

const SecondRoute = () => (
    <RideList/>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const RideMain = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Request / Ongoing' },
        { key: 'second', title: 'Completed' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

export default RideMain;