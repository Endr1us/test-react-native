import React, { Component } from "react";

import { View, Text } from "react-native";

export default class Newdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: ""
    };
  }
  componentDidMount() {
    var that = this;

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    that.setState({
      //Setting the value of the date time
      date: year + "-" + month + "-" + date
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 20
          }}
        >
          Current Date
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16
          }}
        >
          {this.state.date}
        </Text>
      </View>
    );
  }
}
