import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name={weatherType['Thunderstorm'].icon} size={100} color={weatherType['Thunderstorm'].backgroundColor} />

        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <RowText messageOne="High 7&nbsp;" messageTwo="Low 4" containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
      </View>

      <RowText messageOne="Thunderstorm" messageTwo={weatherType['Thunderstorm'].message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: '#000',
    fontSize: 48
  },
  feels: {
    color: '#000',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: '#000',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
