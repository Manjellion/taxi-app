import { View, Text } from 'react-native'
import React from 'react'
import Styles from './styles'

const index = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Travel only if necessary</Text>
      <Text style={Styles.text}>Help flatten the curve. If you must travel, please exercise caution for your safety and the safety of our community</Text>
      <Text style={Styles.learnMore}>Learn more </Text>
    </View>
  )
}



export default index