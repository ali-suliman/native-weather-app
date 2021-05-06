import React from "react"
import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Dimensions } from "react-native"

const width = Dimensions.get("window").width

export default function UnitsPicker({ unit, setUnit }) {
  return (
    <Picker selectedValue={unit} style={styles.picker} onValueChange={setUnit}>
      <Picker.Item label="C°" value="metric" />
      <Picker.Item label="F°" value="imperial" />
    </Picker>
  )
}

const styles = StyleSheet.create({
  picker: { height: 50, width: width, margin: 70 },
})
