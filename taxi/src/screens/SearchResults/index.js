import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import TaxiTypes from '../../components/TaxiTypes'

import { useRoute } from '@react-navigation/native'

const index = (props) => {

  const route = useRoute();

  console.log(route);

  const {originPlace, destinationPlace} = route.params;

  return (
    <ScrollView>
      <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Map showing destination */}
          <View style={{ height: Dimensions.get('window').height - 400 }}>
            <RouteMap origin={originPlace} destination={destinationPlace} />
          </View>

          {/* Select a type of taxi to use */}
          <View style={{ height: 400 }}>
            <TaxiTypes />
          </View>
      </View>
    </ScrollView>
  )
}

export default index