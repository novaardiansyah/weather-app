import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0]?.main
  
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color={weatherType[weatherCondition]?.backgroundColor} />

        <Text style={styles.tempStyle}>{Math.round(temp)}°</Text>
        <Text style={styles.feels}>Feels like {Math.round(feels_like)}°</Text>

        <RowText messageOne={'High ' + Math.round(temp_max) + '° '} messageTwo={'Low ' + Math.round(temp_min) + '°'} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
      </View>

      <RowText messageOne={weather[0]?.description} messageTwo={weatherType[weatherCondition]?.message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
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
  tempStyle: {
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
    paddingHorizontal: 25,
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
