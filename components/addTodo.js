import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

 
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        style={styles.click}
        onPress={() => submitHandler(text)}
        title="add todo"
        color='coral'
        width={500}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 80,
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: 100,

  },
 
});
