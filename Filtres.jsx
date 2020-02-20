import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { render } from "react-dom";

export const Filtres = props => {
  let clearInput = true;
  this.setState = { clearButton: false };
  const clearButtonButton = () => {
    alert("Pres Ok");
    this.setState = { clearButton: true };
  };

  if ((clearButton = true)) {
    clearInput = "";
  } else {
    clearInput = true;
  }

  return (
    <View style={styles.filtres}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.inputBlock}>
        <TextInput
          value={clearInput}
          style={styles.input}
          type="text"
          name="first_name"
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          type="text"
          name="dob"
          placeholder="Age start"
        />
        <TextInput
          style={styles.input}
          type="text"
          name="dob"
          placeholder="Age end"
        />
        <TextInput
          style={styles.input}
          type="text"
          name="gender"
          placeholder="Sex"
        />
      </View>
      <Button title="Reset serch" onPress={clearButtonButton} />
    </View>
  );
};

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
    justifyContent: "center"
  },
  input: {
    marginBottom: 10,
    padding: 5,
    width: "50%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#1b2fc2",
    color: "#ff00ff"
  }
});
