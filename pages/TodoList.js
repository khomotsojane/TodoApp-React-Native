import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Todoitem from "../components/Todoitem";
import AddTodo from "../components/addTodo";


export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Drink coffee", key: 1 },
    { text: "Create app", key: 2 },
    { text: "Sleep", key: 3 },
  ]);

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo =>todo.key != key)
    });
  };

  const submitHandler = (text) =>{
    setTodos((prevTodos) => {
        return[
            { text: text, key: Math.random().toString()},
            ...prevTodos
        ]
    })
}

  return (
    <View style={styles.container}>
      {/*Header */}
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (

            <Todoitem item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    //wkeyth: 500,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
