import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#f8f9fa'
      },
      headerStyle: {
        backgroundColor: '#f8f9fa'
      },
      headerTitleStyle: {
        color: 'tomato',
        fontSize: 25,
        fontWeight: 'bold'
      }
    }}>
      <Tab.Screen name='Current' options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="sun" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }}>
        {(props) => <CurrentWeather {...props} weatherData={weather.list[0]} />}
      </Tab.Screen>

      <Tab.Screen name='Upcoming' options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="calendar" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }}>
        {(props) => <UpcomingWeather {...props} weatherData={weather.list} />}
      </Tab.Screen>

      <Tab.Screen name='City' options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="map-pin" size={25} color={focused ? 'tomato' : 'gray'} />
        )
      }}>
        {(props) => <City {...props} weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs