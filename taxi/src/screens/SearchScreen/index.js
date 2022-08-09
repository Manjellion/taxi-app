import { View, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const index = () => {
    
    const [ fromText, setFromText ] = useState('');
    const [ destinationText, setDestinationText ] = useState('');

    const [ originPlace, setOriginPlace ] = useState(null);
    const [ destinationPlace, setDestinationPlace ] = useState(null);

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details})
                }}
                styles={{
                    textInput: styles.textInput
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
            />

            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details})
                }}
                styles={{
                    textInput: styles.textInput
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
            />  
        </View>
    </SafeAreaView>
  )
}

export default index