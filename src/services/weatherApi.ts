import { Weather } from '../models/Weather'

const WEATHERAPI = `http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY}`
const TOKENAPIFORIP = import.meta.env.VITE_IP_API_URL

export async function fetchLocation(): Promise <{ city: string } | null> {
  const response = await fetch(TOKENAPIFORIP)
  const data = await response.json()
  if (data && data.city) {
    return { city: data.city }
  }
  else {
    return null
  }
}

export async function fetchWeather(city: string): Promise <Weather | null> {
  const response = await fetch(`${WEATHERAPI}&query=${city}`)
  const data = await response.json()
  if (data && data.current && data.location) {
    return {
      city: data.location.name,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0]
    }
  } 
  else {
    return null
  }
}
