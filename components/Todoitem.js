import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";




export default function Todoitem({ item, deleteHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => deleteHandler(item.key)} >
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    width: 200,
    
  },
});
