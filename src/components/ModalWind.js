import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import Apiloader from "./Apiloader";

export default class ModalWind extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 1 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 10 }}>
            <View>
              <Text style={{ marginTop: 10 }}>
                Вы действительно хотите пригласить {this.props.title} на
                свидание?
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{ marginTop: 30 }}>Да</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={{ marginTop: 30 }}>Нет</Text>
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
      </View>
    );
  }
}
