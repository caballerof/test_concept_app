import React, { Component } from 'react';
import { View } from 'react-native';
/** */
import { Text, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
/** */
import { getCurrentUserLogin } from './src/utils/bdFunction';
import LoginF from './src/components/login/LoginF';
import HeaderApp from './src/components/nav/HeaderApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState((prevState) => ({
      ...prevState,
      isReady: true,
    }));
  }

  async isUserLoggedIn() {
    const userInfo = await getCurrentUserLogin();
    if (userInfo) {
      this.setState((prevState) => ({
        ...prevState,
        loggedIn: true,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        loggedIn: false,
      }));
    }
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <View>
          <Text>Cargando...</Text>
        </View>
      );
    }

    return (
      <Container>
        <HeaderApp title="Share Products" />
        <LoginF />
      </Container>
    );
  }
}
