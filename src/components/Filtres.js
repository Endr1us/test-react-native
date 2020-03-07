import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class Filtres extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Serch reset! Start new serch!" };
  }

  handleClick = () => {
    alert(this.state.message);
    this.textInput.clear();
    this.textInput2.clear();
    this.textInput3.clear();
    this.textInput4.clear();
  };

  render() {
    return (
      <View style={styles.filtres}>
        <Text style={styles.text}>Find your love!</Text>
        <View style={styles.inputBlock}>
          <TextInput
            ref={input => {
              this.textInput = input;
            }}
            style={styles.input}
            type="text"
            name="first_name"
            placeholder="Name"
          />

          <TextInput
            ref={input => {
              this.textInput2 = input;
            }}
            style={styles.input}
            type="text"
            name="dob"
            placeholder="Age start"
          />

          <TextInput
            ref={input => {
              this.textInput3 = input;
            }}
            style={styles.input}
            type="text"
            name="dob"
            placeholder="Age end"
          />

          <TextInput
            ref={input => {
              this.textInput4 = input;
            }}
            style={styles.input}
            type="text"
            name="gender"
            placeholder="Sex"
          />

          <Button
            style={styles.button}
            title="Reset serch"
            onPress={this.handleClick}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filtres: {
    backgroundColor: "#eee",
    color: "#c718a1",
    marginBottom: 15
  },
  text: {
    fontSize: 22,
    color: "#ff0000",
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 10
  },
  inputBlock: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10
  },

  input: {
    marginBottom: 10,
    marginRight: 10,
    padding: 5,
    width: "50%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#1b2fc2",
    color: "#ff00ff"
  },
  button: {
    alignItems: "center",
    justifyContent: "center"
  }
});
