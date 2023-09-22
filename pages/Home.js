import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function Home() {
  const [name, setName] = useState("jane");
  const [age, setAge] = useState(40);

  const ClickEvent = () => {
    setName("John");
    setAge(24);
  };

  return (
    <View>
      <Text>Enter your name: </Text>
      <TextInput
      multiline
        style={styles.input}
        placeholder="e.g Jane "
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter your age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 70 "
        onChangeText={(val) => setAge(val)}
      />

      <Text>My name is {name}</Text>
      <Text>My age is {age} </Text>

      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={ClickEvent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
