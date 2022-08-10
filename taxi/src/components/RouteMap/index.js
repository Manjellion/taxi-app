import { View, Text, Image } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const index = () => {

    const origin = {
        latitude: 51.1306,
        longitude: 0.8536,
    }

    const destination = {
        latitude: 51.1405,
        longitude: 0.8378,
    }

    const api_key = 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0';

  return (
    <MapView
        style={{ width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
        latitude: 51.1451,
        longitude: 0.8740,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        <MapViewDirections 
            origin={origin}
            destination={destination}
            apikey={api_key}
            strokeWidth={3}
        />
        <Marker 
            coordinate={origin}
            title={'Origin'}
        />
        <Marker 
            coordinate={destination}
            title={'Destination'}
        />
    </MapView>
  )
}

export default index