/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Header from './Header'

const App = () => {
  return (
    <Header />
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
  }
});

export default App;
