import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          accessibilityRole='image'
          source={require('../images/cutlery.png')}
          style={styles.logo}
        />
        <Text style={styles.sectionTitle}>wtfdyw</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}>what the FOOD do you want !?</Text>
      </View>
    </View>
  )
}

const colors = '../styles/colors'
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  logoContainer: {
    marginTop: 50,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    marginRight: 5,
    height: 35,
    width: 35
  },
  sectionContainer: {
    marginLeft: 10
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: colors.black
  },
  sectionSubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.black
  }
})

export default Header