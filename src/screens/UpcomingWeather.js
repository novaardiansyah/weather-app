import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, ImageBackground, StatusBar } from 'react-native'

import ListItem from '../components/ListItem'

const data = [
  {
    dt_text: '2020-11-30 12:00:00',
    main: {
      temp_max: 7,
      temp_min: 4
    },
    weather: [
      { main: 'Clouds' }
    ]
  },
  {
    dt_text: '2020-12-01 12:00:00',
    main: {
      temp_max: 6,
      temp_min: 5
    },
    weather: [
      { main: 'Rain' }
    ]
  },
  {
    dt_text: '2020-12-12 12:00:00',
    main: {
      temp_max: 8,
      temp_min: 7
    },
    weather: [
      { main: 'Clear' }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
  )

  const { container, title, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/images/death-valley-g395b36454_1920.jpg')} style={image}>
        <Text style={title}>Upcoming Weather</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },
  title: {
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
