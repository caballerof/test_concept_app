import React from 'react';
import PropTypes from 'prop-types';

const HeaderApp = props => {
  const { title } = props;
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

HeaderApp.defaultProps = {
  title: 'App Test',
};

HeaderApp.propTypes = {
  title: PropTypes.string,
};

export default HeaderApp;
