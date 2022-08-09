import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap/'
import Message from '../../components/Message'
import HomeSearch from '../../components/HomeSearch'

const index = () => {
  return (
    <View>
        <HomeMap />

        {/* Warning/ Popup message */}
        <Message />
        
        {/* Bottom Component */}
        <HomeSearch />
    </View>
  )
}

export default index