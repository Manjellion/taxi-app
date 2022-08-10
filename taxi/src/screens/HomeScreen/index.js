import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap/'
import Message from '../../components/Message'
import HomeSearch from '../../components/HomeSearch'

const index = () => {
  return (
    <View>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <HomeMap />
      </View>

        {/* Warning/ Popup message */}
        <Message />
        
        {/* Bottom Component */}
        <HomeSearch />
    </View>
  )
}

export default index