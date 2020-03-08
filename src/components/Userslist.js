import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Apiloader from "./Apiloader";

export const Userslist = props => {
  return (
    <View style={styles.userslist}>
      <Text style={styles.text}>{props.title}</Text>
      <Apiloader />
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
