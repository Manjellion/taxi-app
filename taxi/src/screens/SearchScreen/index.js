import { View, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlacesRow from './PlacesRow'
import { useNavigation } from '@react-navigation/native'

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const index = () => {

    const [ originPlace, setOriginPlace ] = useState(null);
    const [ destinationPlace, setDestinationPlace ] = useState(null);

    const navgition = useNavigation();

    useEffect(() => {
        if (originPlace && destinationPlace) {
            navgition.navigate('SearchResult', {
                originPlace,
                destinationPlace
            });
        }
    }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                placeholder='Where from?'
                onPress={(data, details = null) => {
                    setOriginPlace({data, details})
                }}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
                renderRow={(data) => <PlacesRow data={data} />}
                renderDescription={(data) => data.description || data.vicinity}
                currentLocation={true}
                currentLocationLabel='Current Location'
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details})
                }}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: {
                        ...styles.autocompleteContainer,
                        top: 55
                    },
                    separator: styles.separator

                }}
                fetchDetails
                query={{
                    key: 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
                renderRow={(data) => <PlacesRow data={data} />}
            />  

            {/* Circle near origin input */}
            <View style={styles.circle}>

            </View>

            {/* the line connecting the two */}
            <View style={styles.line}>

            </View>

            {/* Square near destination input */}
            <View style={styles.square}>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default index