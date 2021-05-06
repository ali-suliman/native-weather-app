import React from "react"
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from "react-native"

const width = Dimensions.get("window").width

const Btn = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.btnCont}>
        <Text style={style.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  btnCont: {
    backgroundColor: "#5FBB97",
    width: width / 1.2,
    paddingVertical: 18,
    borderRadius: 9,
    margin: 30,
  },
  btnText: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "bold",
  },
})

export default Btn
