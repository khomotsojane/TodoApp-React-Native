import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function List() {
  const [people, setPeople] = useState([
    { name: "Shaun", id: "1" },
    { name: "Jane", id: "2" },
    { name: "John", id: "3" },
    { name: "Chris", id: "4" },
    { name: "Anna", id: "5" },
    { name: "Kholo", id: "6" },
    { name: "Kate", id: "7" },
  ]);

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
        return prevPeople.filter(person =>person.id != id)
    });
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
        {/* <ScrollView>
        {people.map((item) => {
          return (
            <View>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    //width: 500,
    marginHorizontal: 10,
    marginTop: 24,
  },
});


