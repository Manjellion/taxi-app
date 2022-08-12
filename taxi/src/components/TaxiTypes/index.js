import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TaxiTypeRow from '../TaxiTypeRow'
import styles from './styles'
import types from '../../assets/data/types'

const index = () => {

  const confirm = () => {
    console.log('Confirmed Uber');
  }

  return (
    <View>
      {types.map(type => (
        <TaxiTypeRow type={type} key={type.id}/>)
      )}

      <TouchableOpacity onPress={confirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>
          Confirm Uber
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default index