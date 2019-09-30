import React from 'react';
import PropTypes from 'prop-types';
/** */
import { Header, Right, Button, Left, Icon, Body, Title } from 'native-base';

const HeaderApp = (props) => {
  const { title, icon } = props;
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name={icon} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

HeaderApp.defaultProps = { title: 'App Test 1', icon: 'menu' };

HeaderApp.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default HeaderApp;
