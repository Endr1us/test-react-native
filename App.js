import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Navbar } from "./src/components/Navbar";
import Filtres from "./src/components/Filtres";
import { Userslist } from "./src/components/Userslist";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Navbar title="Love to Love" />
        <ScrollView style={styles.container}>
          <Filtres title="Find your love!" />
          <Userslist title="Userlist" />
          <Text>Privet Julia)</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    paddingHorizontal: 25,
    marginVertical: 15
  }
});
