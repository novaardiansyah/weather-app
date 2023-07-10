import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/buildings-gf6a06b7db_1920.jpg')} style={styles.imageLayout}>
        <Text style={styles.marginSafeArea} />
        <Text style={[styles.cityText, styles.cityName]}>{name}</Text>
        <Text style={[styles.cityText, styles.countryName]}>{country}</Text>

        <View style={[styles.rowLayout, styles.populationWrapper]}>
          <IconText name={'users'} color={'red'} text={`Population : ${population}`} textStyle={styles.populationText} />
        </View>

        <View style={[styles.rowLayout, styles.riseSetWrapper]}>
          <IconText name={'sunrise'} color={'white'} text={`${moment(sunrise).format('h:mm a')}`} textStyle={styles.riseSetText} />
          <IconText name={'sunset'} color={'white'} text={`${moment(sunset).format('h:mm a')}`} textStyle={styles.riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginSafeArea: {
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 10.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: '#fff'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City