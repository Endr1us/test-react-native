import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Apiloader from "./Apiloader";

export const Userslist = props => {
  //const liters = ['A', 'B', 'C'];
  //let title = liters.map((title)
  return (
    <View style={styles.userslist}>
      <Text style={styles.text}>{props.title}</Text>
      <Apiloader />

      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie"
            ]
          }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
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
  item: {
    fontSize: 14,
    color: "#096112",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  sectionHeader: {
    fontSize: 18,
    color: "#0c0961",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});
