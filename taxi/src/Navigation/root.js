import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import SearchResults from '../screens/SearchResults'

const Stack = createNativeStackNavigator();

const root = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="SearchResult" component={SearchResults} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default root