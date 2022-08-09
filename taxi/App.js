/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import HomeSearch from './src/screens/SearchScreen'

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeSearch />
    </>
  );
};

export default App;
