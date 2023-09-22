import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import List from "./pages/List";
import TodoList from "./pages/TodoList";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
       {/* <List /> */}
       <Header />
       
       <TodoList />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
