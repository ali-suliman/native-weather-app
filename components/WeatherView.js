import React, { Component } from "react"
import { Text, View, StyleSheet, Image, Dimensions } from "react-native"

const width = Dimensions.get("window").width

const WeatherView = ({ currWeather, setCurrWeather }) => {
  const {
    main: { temp },
    weather: [weatherData],
    name,
  } = currWeather

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`
  return (
    <View style={styles.main}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.cityName}>{weatherData.main}</Text>
      <Image style={styles.image} source={{ uri: iconUrl }} />
      <Text style={styles.tempTxt}>{Math.floor(temp)}°</Text>
      <Text style={styles.des}>{weatherData.description}</Text>
    </View>
  )
}

export default WeatherView

const styles = StyleSheet.create({
  main: {
    width: width,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    marginTop: -64,
  },
  cityName: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#aaa",
    marginTop: 4,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 150,
  },
  tempTxt: {
    fontSize: 48,
    color: "#4BA3C3",
    marginTop: -10,
    marginBottom: 10,
    color: "#666",
  },
  des: {
    color: "#888",
    fontSize: 18,
    textTransform: "capitalize",
  },
})
