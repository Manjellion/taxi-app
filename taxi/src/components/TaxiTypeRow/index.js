import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'

const index = (props) => {

  const {type} = props;

  const getImageName = () => {
    if (type.type === 'TaxiX') {
      return require('../../assets/images/TaxiX.jpeg')
    }
    if (type.type === 'Taxi+') {
      return require('../../assets/images/Taxi+.jpeg')
    }
    if (type.type === 'TaxiXL') {
      return require('../../assets/images/TaxiXL.jpeg')
    }
  }

  return (
    <View style={styles.container}>

      {/* Image */}
      <Image style={styles.image} source={getImageName()} />

      {/* Type name/ desc */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name='person' size={16} />
          3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      {/* Price */}
      <View style={styles.rightContainer}>
        <Ionicons name='pricetag' size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  )
}

export default index