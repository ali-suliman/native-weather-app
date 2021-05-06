import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function ReloadIcon({ load }) {
  return (
    <TouchableOpacity style={styles.icon} onPress={load}>
      <View>
        <Ionicons name="ios-refresh" size={18} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 40,

    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf: "flex-end",
  },
})
