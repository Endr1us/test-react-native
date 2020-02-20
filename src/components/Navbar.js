import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = props => {
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 70,
    backgroundColor: "#3949ab",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  text: {
    fontSize: 22,
    color: "#ccc"
  }
});
