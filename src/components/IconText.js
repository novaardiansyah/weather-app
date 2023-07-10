import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({ name, color, text, textStyle }) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={50} color={color} />
      <Text style={[styles.textTheme, textStyle]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText