import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'white'
      },
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        color: 'tomato',
        fontSize: 25,
        fontWeight: 'bold'
      }
    }}>
      <Tab.Screen name='Current' component={CurrentWeather} options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="sun" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }} />
      <Tab.Screen name='Upcoming' component={UpcomingWeather} options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="calendar" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }} />
      <Tab.Screen name='City' component={City} options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="map-pin" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default Tabs