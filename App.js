import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
/** */
import { AppLoading } from 'expo';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
/** */
// import { FB, dbFB, authFB, storageFB } from './config/config';
// import registerUser, { getCurrentUserLogin } from './src/utils/bdFunction';
import { getCurrentUserLogin } from './src/utils/bdFunction';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ ...this.state, isReady: true });
  }

  isUserLoggedIn = async () => {
    userInfo = await getCurrentUserLogin();
    if (userInfo) {
      this.setState({
        ...this.state,
        loggedIn: true
      });
    } else {
      this.setState({
        ...this.state,
        loggedIn: false
      });
    }
  };

  render() {
    if (!this.state.isReady) {
      console.log('cargando ...');
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
