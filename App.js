import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import {
  Button,
  SafeAreaView,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native"
import Btn from "./components/Btn.js"
import * as location from "expo-location"
import WeatherView from "./components/WeatherView.js"
import UnitPicker from "./components/Picker.js"
import ReloadIcon from "./components/ReloadIcon.js"

const width = Dimensions.get("window").width

export default function App() {
  const WEATHER_API_KEY = "a2b333238ade7b0b589a0188dbde10da"
  const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?"
  const [erorrMssg, setMssg] = useState("getting data")
  const [currWeather, setCurrWeather] = useState(null)
  const [unit, setUnit] = useState("metric")

  useEffect(() => {
    loadLocation()
  }, [unit])

  const loadLocation = async () => {
    setCurrWeather(null)
    try {
      let { status } = await location.requestPermissionsAsync()

      if (status != "granted") {
        setMssg("Acces was not granted")
        return
      }

      const currentLocation = await location.getCurrentPositionAsync()
      const { latitude, longitude } = currentLocation.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${WEATHER_API_KEY}`
      const res = await fetch(weatherUrl)
      const data = await res.json()

      if (res.ok) {
        /*       setMssg(data.weather[0].description)
        setCurrLoc(`latitude: ${latitude}, \n longitude: ${longitude}`)
        let CurrTemp = data.main.temp
        let tempInC = Math.round(CurrTemp - 273.15)
        setTemp(tempInC) */
        setCurrWeather(data)
      } else {
        setMssg(res.message)
      }
    } catch (error) {
      setMssg(error.message)
    }
  }

  if (currWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ReloadIcon load={loadLocation} />
        <WeatherView
          currWeather={currWeather}
          setCurrWeather={setCurrWeather}
        />
        <UnitPicker unit={unit} setUnit={setUnit} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator></ActivityIndicator>
        <StatusBar style="auto" />
        {/* <Btn
          text="Click me!"
          onPress={() => Alert.alert("Greeting earthling")}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

/**
 

      let { status } = await location.requestPermissionsAsync()
      if (status != "granted") {
        setMssg("Access not granted")
        return
      }

      const currentLocation = await location.getCurrentPositionAsync()
      const { latitude, longitude } = currentLocation.coords
      setCurrLoc(`latitude: ${latitude}, \n longitude: ${longitude}`)





 *  const loadLocation = async () => {
    try {
      let { status } = await location.requestPermissionsAsync()

      if (status != "granted") {
        setMssg("Access not granted")
        return
      }
      const location = await location.getCurrentPositionAsync()

      const { lat, long } = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      const res = await fetch(weatherUrl)
      const data = await res.json()

      if (res.ok) {
        setCurrWeather(res)
      } else {
        setMssg("Something went wrong: ", res.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
 */
