import { useState, useEffect } from 'react'

import * as Location from 'expo-location'
import { API_KEY } from '@env'

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [latitude, setLatitude] = useState('44.34')
  const [longitude, setLongitude] = useState('10.99')
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeather = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}4&lon=${longitude}9&appid=${API_KEY}`)
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return setError('Permission to access location was denied')

      let location = await Location.getCurrentPositionAsync({})
      // setLatitude(location.coords.latitude)
      // setLongitude(location.coords.longitude)
      await fetchWeather()
    })()
  }, [latitude, longitude])

  return [isLoading, weather, error]
}