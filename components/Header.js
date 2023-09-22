import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return(
  <View style={styles.Header} >
    <Text style={styles.title}>My todos</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    Header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        width: 500,
    },
    title:{
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",

    }
})
