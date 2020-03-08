import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet
} from "react-native";
import Apiloader from "./Apiloader";
import styled from "styled-components/native";

export default class ModalWind extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <ContainerView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalWind}>
            <View>
              <Text style={styles.topText}>Be happy!!!</Text>
              <Text style={styles.topWindUser}>
                Вы действительно хотите пригласить {this.props.title} на
                свидание?
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{ marginBottom: 30 }}
              >
                <Text style={styles.windUser}>Да</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.windUser}>Нет</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  color: ${item => (item.status == "active" ? "black" : "grey")};
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  modalWind: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#8abbe3",
    textAlign: "center"
  },
  topWindUser: {
    borderColor: "#0b1dde",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 30,
    paddingVertical: 30,
    backgroundColor: "#d6a7a7",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20
  },
  windUser: {
    borderColor: "#000fb0",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 30,
    backgroundColor: "#bf80bb",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16
  },
  topText: {
    textAlign: "center",
    fontSize: 28
  }
});
