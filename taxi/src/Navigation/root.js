import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer'

import HomeRoot from './Home';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>{props.name}</Text>
  </View>
)

const root = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={ (props) => (
        <CustomDrawer {...props} />)
      }
      >
        <Drawer.Screen name="Home" component={HomeRoot} />
        <Drawer.Screen name="Your Trips" component={ () => <DummyScreen name='Your Trips' />} />
        <Drawer.Screen name="Help" component={ () => <DummyScreen name='Help' />} />
        <Drawer.Screen name="Wallet" component={ () => <DummyScreen name='Wallet' />} />
        <Drawer.Screen name="Settings" component={ () => <DummyScreen name='Settings' />} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default root