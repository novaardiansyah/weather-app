import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

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

const Item = ({ dt_text, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />

      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_text}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: '#fff',
    fontSize: 20
  },
  date: {
    color: '#fff',
    fontSize: 15
  }
})

export default UpcomingWeather
