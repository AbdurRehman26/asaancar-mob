import React, {useCallback, useState} from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

import marker from '../../assets/icons8-marker.png'

const latitudeDelta = 0.025
const longitudeDelta = 0.025

const Map = () => {
  const [state, setState] = useState({
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 25.1948475,
      longitude: 55.2682899
    }
  })

  const onRegionChange = useCallback((region) => {
    setState(region)
  }, []);

  const {region} = state

  return (
      <View style={styles.map}>
        <MapView
            style={styles.map}
            initialRegion={region}
            onRegionChangeComplete={onRegionChange}
        />
        <View style={styles.markerFixed}>
          <Image style={styles.marker} source={marker}/>
        </View>
      </View>
  )
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 48,
    width: 48
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
});