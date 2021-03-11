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

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>wtfdyw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    alignItems: 'center',
    // backgroundColor: 'gray',
    marginTop: 100,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
