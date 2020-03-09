import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import ModalWind from "./ModalWind";
import styled from "styled-components/native";

const API_KEY = "wmitiVLalvIQF8GTUbQ5M8NAhoG5QpSiRz7t";

export default class Apiloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount = async () => {
    return await fetch(
      `https://gorest.co.in/public-api/users?_format=json&access-token=${API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.result
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    let brr = { first_name: ["<A>", "<B>"] };
    let arr = this.state.dataSource;
    //var obj = Object.assign(brr, arr);
    arr.sort((a, b) => a.first_name.localeCompare(b.first_name));
    //console.log(brr.first_name.join(" "));
    //console.log(obj);

    return (
      <View>
        <View style={styles.userslists}>
          <FlatList
            data={arr}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.users}
                onPress={this.props.visible}
              >
                <Text>{brr.first_name.join(" ")}</Text>
                <ModalWind
                  title={
                    <ContainerText
                      active={item.status == "active" ? true : false}
                    >
                      #{item.id} - {item.first_name} {item.last_name}{" "}
                      {moment(item.dob).fromNow("YYYY")} old - {item.gender} -{" "}
                      {item.status}
                    </ContainerText>
                  }
                />
              </TouchableOpacity>
            )}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      </View>
    );
  }
}

const ContainerText = styled.Text`
  color: ${props => (props.active ? "black" : "grey")};
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  userslists: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  users: {
    marginBottom: 10
  }
});
