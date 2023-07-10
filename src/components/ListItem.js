import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { Feather } from '@expo/vector-icons'

import { weatherType } from '../utilities/weatherType'

const ListItem = ({ dt_text, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_text).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_text).format('h:mm a')}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred'
  },
  temp: {
    color: '#fff',
    fontSize: 20
  },
  date: {
    color: '#fff',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem