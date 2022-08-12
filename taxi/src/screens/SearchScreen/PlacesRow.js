import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const PlacesRow = ({ data }) => {
  return (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
            {data.description === 'Home' ? < Entypo name='home' size={20} color={'#fff'} /> : <Entypo name='location-pin' size={20} color={'#fff'} />}
        </View>
        <Text style={styles.locationText}>
            {data.description || data.vicinity}
        </Text>
    </View>
  )
}

export default PlacesRow