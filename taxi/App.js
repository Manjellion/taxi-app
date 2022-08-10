/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Router from './src/Navigation/root'

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Node = () => {

  useEffect(() => {
    Geolocation.requestAuthorization();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
