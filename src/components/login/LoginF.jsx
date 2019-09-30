import React from 'react';
import PropTypes from 'prop-types';
/** */
import {
  Card,
  CardItem,
  Body,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button,
} from 'native-base';
/** */
import styles from './loginFCss';

function LoginF(props) {
  const { titleCard, userLabel, passLabel, buttonLabel } = props;
  const { container, separa, buttonStyle } = styles;

  return (
    <Content contentContainerStyle={container}>
      <Card>
        <CardItem header>
          <Text>{titleCard}</Text>
        </CardItem>
        <Form>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label>{userLabel}</Label>
                <Input onChangeText={(val) => console.log(val)} />
                <Icon active name="person" />
              </Item>
              <Item floatingLabel style={separa}>
                <Label>{passLabel}</Label>
                <Input
                  onChangeText={(val) => console.log(val)}
                  secureTextEntry
                />
                <Icon active name="lock" />
              </Item>
            </Body>
          </CardItem>
          <CardItem footer>
            <Button full style={[buttonStyle, separa]}>
              <Text>{buttonLabel}</Text>
            </Button>
          </CardItem>
        </Form>
      </Card>
    </Content>
  );
}

LoginF.defaultProps = {
  userLabel: 'User name',
  passLabel: 'Password',
  titleCard: 'Login user',
  buttonLabel: 'Login',
};

LoginF.propTypes = {
  userLabel: PropTypes.string,
  passLabel: PropTypes.string,
  titleCard: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default LoginF;
