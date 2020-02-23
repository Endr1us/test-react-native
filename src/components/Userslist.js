import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Apiloader from "./Apiloader";

export const Userslist = props => {
  //const liters = ['A', 'B', 'C'];
  //let title = liters.map((title)
  return (
    <View style={styles.userslist}>
      <Text style={styles.text}>{props.title}</Text>

      <SectionList
        sections={[
          { title: "A", data: [Apiloader] },
          { title: "B", data: [] },
          { title: "C", data: [] },
          { title: "D", data: [] },
          { title: "I", data: [] },
          { title: "F", data: [] },
          { title: "J", data: [] },
          { title: "K", data: [] },
          { title: "L", data: [] },
          { title: "M", data: [] },
          { title: "N", data: [] },
          { title: "O", data: [] },
          { title: "P", data: [] },
          { title: "R", data: [] }
        ]}
        renderItem={({ item }) => <Apiloader>{item}</Apiloader>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userslist: {
    backgroundColor: "#eee"
  },
  text: {
    height: 50,
    fontSize: 22,
    color: "#000082",
    textAlign: "center",
    paddingTop: 10
  },

  sectionHeader: {
    fontSize: 18,
    color: "#0c0961",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});

